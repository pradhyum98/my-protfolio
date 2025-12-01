// ============================================================================
// ESLint Custom Rule: no-hardcoded-strings
// ============================================================================
// Prevents new hard-coded user-visible strings in components and pages.
// Enforces use of the centralized copy system in /src/content/copy.ts
// ============================================================================

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow hard-coded user-visible strings; use copy.* instead",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      hardcodedString: "Hard-coded user-visible string detected. Use copy.* from @/content/copy instead. Found: {{value}}",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowedPatterns: {
            type: "array",
            items: { type: "string" },
            description: "Regex patterns for strings to ignore (e.g., class names, route paths)",
          },
          ignoreFiles: {
            type: "array",
            items: { type: "string" },
            description: "Glob patterns for files to skip",
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = context.options[0] || {}
    const allowedPatterns = (options.allowedPatterns || []).map((p) => new RegExp(p))
    const ignoreFiles = options.ignoreFiles || []

    // Check if current file should be ignored
    const filename = context.getFilename()
    const shouldIgnoreFile = ignoreFiles.some((pattern) => {
      const regex = new RegExp(pattern.replace(/\*/g, ".*"))
      return regex.test(filename)
    })

    if (shouldIgnoreFile) return {}

    // Patterns that indicate a string is likely NOT user-visible
    const technicalPatterns = [
      /^use (client|server)$/, // React directives
      /^\//, // Route paths
      /^https?:\/\//, // URLs
      /^@\//, // Import paths
      /^\.\//, // Relative paths
      /^\.\.\//, // Parent paths
      /^\w+\/\w+/, // Module paths (e.g., "react/dom")
      /^#[0-9a-fA-F]{3,8}$/, // Hex colors
      /^(rgb|rgba|hsl|hsla)\(/, // CSS colors
      /^-?\d+(\.\d+)?(px|em|rem|%|vh|vw|pt|cm|mm|in)$/, // CSS units
      /^(left|right|center|top|bottom|auto|inherit|initial|unset|none|block|flex|grid|inline)$/i, // CSS keywords
      /^(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl):/, // Tailwind breakpoints
      /^(text|bg|border|shadow|ring|rounded|p|m|w|h|gap|space|relative|absolute|fixed|sticky|inset|flex|grid|hidden|aspect)-/, // Tailwind classes
      /(flex|grid|hidden|block|inline|relative|absolute|fixed|sticky)\s/, // CSS class patterns
      /\s(h-|w-|p-|m-|gap-|space-|rounded|border|shadow|bg-|text-)/, // Tailwind patterns
      /^[\w-]+:[\w-]+/, // CSS-like properties
      /^(get|post|put|patch|delete|head|options)$/i, // HTTP methods
      /^(dev|production|test|staging)$/i, // Environment names
      /^(true|false|null|undefined)$/i, // Literals
      /^[\w-]+\.(tsx?|jsx?|css|json|svg|png|jpg|jpeg|gif|webp|ico)$/, // File extensions
      /^[A-Z_][A-Z0-9_]*$/, // CONSTANT_CASE
      /^(className|style|href|src|alt|title|id|name|type|placeholder|value|aria-\w+|data-\w+)$/i, // HTML attributes
      /^[.#][\w-]+$/, // CSS selectors
    ]

    // Patterns for strings that ARE user-visible and should be centralized
    const userVisibleContexts = [
      "JSXText", // Text content inside JSX
      "JSXExpressionContainer", // {string} in JSX
    ]

    function isLikelyTechnicalString(value) {
      // Empty or very short strings
      if (!value || value.length <= 1) return true

      // Only punctuation or whitespace
      if (/^[\s.,;:!?()[\]{}<>\/\\|_=+\-*&^%$#@~`'"]+$/.test(value)) return true

      // Single letters/numbers
      if (/^[a-zA-Z0-9]$/.test(value)) return true

      // CSS class strings (contain Tailwind patterns)
      if (/(flex|grid|gap|space|rounded|border|shadow|bg-|text-|p-|m-|w-|h-|justify|items|overflow|hidden|block|inline|relative|absolute|fixed|sticky|inset|top|bottom|left|right|hover|focus|active|disabled|cursor|transition|transform|opacity|z-|min-|max-)/.test(value)) return true

      // Check against technical patterns
      return technicalPatterns.some((pattern) => pattern.test(value))
    }

    function checkStringLiteral(node, value) {
      // Skip if configured to allow
      if (allowedPatterns.some((pattern) => pattern.test(value))) return

      // Skip technical strings
      if (isLikelyTechnicalString(value)) return

      // Skip import/export statements
      const sourceCode = context.sourceCode || context.getSourceCode()
      const ancestors = sourceCode.getAncestors ? sourceCode.getAncestors(node) : []
      const hasImportOrExport = ancestors.some(
        (ancestor) =>
          ancestor.type === "ImportDeclaration" ||
          ancestor.type === "ExportNamedDeclaration" ||
          ancestor.type === "ExportDefaultDeclaration" ||
          ancestor.type === "ExportAllDeclaration"
      )
      if (hasImportOrExport) return

      // Skip object keys (but not values)
      const parent = ancestors[ancestors.length - 1]
      if (parent && parent.type === "Property" && parent.key === node) return

      // Skip if inside constants file (where hard-coded strings are the SOURCE)
      if (filename.includes("content/copy.ts") || filename.includes("lib/constants.ts")) return

      // Skip test files
      if (filename.includes(".test.") || filename.includes(".spec.")) return

      // Report the violation
      context.report({
        node,
        messageId: "hardcodedString",
        data: {
          value: value.length > 50 ? `${value.substring(0, 47)}...` : value,
        },
      })
    }

    return {
      Literal(node) {
        if (typeof node.value === "string" && node.value.trim()) {
          checkStringLiteral(node, node.value)
        }
      },

      TemplateLiteral(node) {
        // Only check template literals with NO expressions (static strings)
        if (node.expressions.length === 0 && node.quasis.length === 1) {
          const value = node.quasis[0].value.cooked
          if (value && value.trim()) {
            checkStringLiteral(node, value)
          }
        }
      },

      JSXText(node) {
        const value = node.value.trim()
        if (value) {
          checkStringLiteral(node, value)
        }
      },
    }
  },
}
