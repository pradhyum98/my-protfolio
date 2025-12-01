#!/usr/bin/env node
/**
 * Component Pruning Script
 * Safely removes unused components, dependencies, and exports
 */

import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

// Files identified as unused by knip and ts-prune
const UNUSED_FILES = [
  'src/components/sections/cta.tsx',
  'src/components/sections/featured-projects.tsx',
  'src/components/sections/hero.tsx',
  'src/components/sections/services-new.tsx',
  'src/components/sections/social-proof.tsx',
  'src/components/sections/value-props.tsx',
  'src/lib/mdx-processor.ts',
  'src/lib/seo-helpers.ts',
]

// Unused exports to remove from barrel files
const BARREL_EXPORTS_TO_REMOVE = {
  'src/components/file-tree/index.ts': [
    'PortfolioFileTree',
    'FilePreviewPanel',
  ],
  'src/components/terminal/index.ts': [
    'useTerminal',
    'TerminalOverlay',
    'TerminalBentoCard',
  ],
}

// Dependencies to remove
const UNUSED_DEPS = [
  '@hookform/resolvers',
  '@radix-ui/react-icons',
  'react-confetti-boom',
  'react-hook-form',
  'rehype-highlight',
  'rough-notation',
  'zod',
]

const UNUSED_DEV_DEPS = [
  // Keep these for now as they're needed for our new lint rules
  // '@typescript-eslint/eslint-plugin',
  // '@typescript-eslint/parser',
]

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function removeUnusedFiles(dryRun = false) {
  console.log('\n📦 REMOVING UNUSED FILES\n')
  const removed = []

  for (const file of UNUSED_FILES) {
    const fullPath = join(rootDir, file)
    if (await fileExists(fullPath)) {
      if (!dryRun) {
        await fs.unlink(fullPath)
      }
      console.log(`  ✓ ${dryRun ? 'Would remove' : 'Removed'}: ${file}`)
      removed.push(file)
    } else {
      console.log(`  ⊗ Already removed: ${file}`)
    }
  }

  return removed
}

async function cleanBarrelExports(dryRun = false) {
  console.log('\n📦 CLEANING BARREL EXPORTS\n')
  const cleaned = []

  for (const [file, exportsToRemove] of Object.entries(BARREL_EXPORTS_TO_REMOVE)) {
    const fullPath = join(rootDir, file)
    if (await fileExists(fullPath)) {
      const content = await fs.readFile(fullPath, 'utf-8')
      let newContent = content

      for (const exportName of exportsToRemove) {
        // Remove export { X } from './file' patterns
        const exportPattern = new RegExp(
          `export\\s*{[^}]*\\b${exportName}\\b[^}]*}\\s*from\\s*['"][^'"]+['"]\\s*;?\\s*\n?`,
          'g'
        )
        newContent = newContent.replace(exportPattern, '')

        // Remove standalone export lines
        const standalonePattern = new RegExp(
          `export\\s+\\{\\s*${exportName}\\s*\\}[^\n]*\n?`,
          'g'
        )
        newContent = newContent.replace(standalonePattern, '')
      }

      if (newContent !== content) {
        if (!dryRun) {
          await fs.writeFile(fullPath, newContent, 'utf-8')
        }
        console.log(`  ✓ ${dryRun ? 'Would clean' : 'Cleaned'}: ${file}`)
        console.log(`    Removed: ${exportsToRemove.join(', ')}`)
        cleaned.push(file)
      }
    }
  }

  return cleaned
}

async function removeUnusedDependencies(dryRun = false) {
  console.log('\n📦 REMOVING UNUSED DEPENDENCIES\n')
  const packageJsonPath = join(rootDir, 'package.json')
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))

  let modified = false
  const removed = []

  for (const dep of UNUSED_DEPS) {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      if (!dryRun) {
        delete packageJson.dependencies[dep]
      }
      console.log(`  ✓ ${dryRun ? 'Would remove' : 'Removed'} dependency: ${dep}`)
      removed.push(dep)
      modified = true
    }
  }

  for (const dep of UNUSED_DEV_DEPS) {
    if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
      if (!dryRun) {
        delete packageJson.devDependencies[dep]
      }
      console.log(`  ✓ ${dryRun ? 'Would remove' : 'Removed'} devDependency: ${dep}`)
      removed.push(dep)
      modified = true
    }
  }

  if (modified && !dryRun) {
    await fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
      'utf-8'
    )
    console.log('\n  📝 Updated package.json')
  }

  return removed
}

async function generateReport(filesRemoved, barrelsCleaned, depsRemoved) {
  const reportPath = join(rootDir, '_reports', 'cleanup-report.md')

  const report = `# Component Cleanup Report

## Summary

- **Files Removed**: ${filesRemoved.length}
- **Barrel Exports Cleaned**: ${barrelsCleaned.length}
- **Dependencies Removed**: ${depsRemoved.length}

## Removed Files

${filesRemoved.length > 0 ? filesRemoved.map(f => `- \`${f}\``).join('\n') : 'None'}

## Cleaned Barrel Exports

${barrelsCleaned.length > 0 ? barrelsCleaned.map(f => `- \`${f}\``).join('\n') : 'None'}

## Removed Dependencies

${depsRemoved.length > 0 ? depsRemoved.map(d => `- \`${d}\``).join('\n') : 'None'}

## Next Steps

1. Run \`yarn install\` to update lockfile
2. Run \`yarn ts:check\` to verify TypeScript compilation
3. Run \`yarn lint\` to verify ESLint passes
4. Run \`yarn build\` to verify production build
5. Test the application manually
6. Commit changes with atomic commits

## Verification Commands

\`\`\`bash
yarn install
yarn ts:check
yarn lint
yarn build
yarn analyze:tsprune
\`\`\`

Generated: ${new Date().toISOString()}
`

  await fs.writeFile(reportPath, report, 'utf-8')
  console.log(`\n📊 Generated report: _reports/cleanup-report.md\n`)
}

// Main execution
const dryRun = process.argv.includes('--dry-run')

console.log('🧹 Component Pruning Script')
console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}`)
console.log('─'.repeat(50))

try {
  const filesRemoved = await removeUnusedFiles(dryRun)
  const barrelsCleaned = await cleanBarrelExports(dryRun)
  const depsRemoved = await removeUnusedDependencies(dryRun)

  if (!dryRun) {
    await generateReport(filesRemoved, barrelsCleaned, depsRemoved)
  }

  console.log('\n' + '─'.repeat(50))
  console.log('✨ Pruning complete!')

  if (dryRun) {
    console.log('\n💡 Run without --dry-run to apply changes')
  } else {
    console.log('\n📋 Next steps:')
    console.log('  1. yarn install')
    console.log('  2. yarn ts:check')
    console.log('  3. yarn lint')
    console.log('  4. yarn build')
  }
} catch (error) {
  console.error('\n❌ Error:', error.message)
  process.exit(1)
}
