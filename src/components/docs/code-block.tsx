'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type TabConfig = {
  label: string;
  code: string;
  language?: string;
};

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
  collapsed?: boolean;
  variant?: 'single' | 'tabs';
  tabOptions?: TabConfig[];
  showLineNumbers?: boolean;
  className?: string;
};

export const CodeBlock = ({
  code,
  language = 'typescript',
  filename,
  highlights = [],
  collapsed = false,
  variant = 'single',
  tabOptions = [],
  showLineNumbers = true,
  className,
}: CodeBlockProps) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!collapsed);
  const [activeTab, setActiveTab] = useState(0);

  const effectiveCode = variant === 'tabs' && tabOptions.length > 0
    ? tabOptions[activeTab].code
    : code;

  const effectiveLanguage = variant === 'tabs' && tabOptions.length > 0
    ? tabOptions[activeTab].language || language
    : language;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(effectiveCode.trim());
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = effectiveCode.split('\n');
  const shouldCollapse = collapsed && lines.length > 20;
  const displayCode = !isExpanded && shouldCollapse
    ? lines.slice(0, 10).join('\n') + '\n...'
    : effectiveCode;

  const isDark = theme === 'dark';

  return (
    <div className={cn('group relative my-6 overflow-hidden rounded-lg border bg-card', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
        <div className="flex items-center gap-2">
          {filename && (
            <>
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">{filename}</span>
            </>
          )}
          {!filename && (
            <span className="text-xs font-mono text-muted-foreground uppercase">{effectiveLanguage}</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Tabs */}
      {variant === 'tabs' && tabOptions.length > 0 && (
        <div className="flex border-b bg-muted/30">
          {tabOptions.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                'border-b-2 border-transparent',
                'hover:text-foreground',
                activeTab === idx
                  ? 'border-primary text-foreground bg-background'
                  : 'text-muted-foreground'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Code */}
      <div className="relative overflow-x-auto">
        <SyntaxHighlighter
          language={effectiveLanguage}
          style={isDark ? oneDark : oneLight}
          showLineNumbers={showLineNumbers}
          wrapLines
          lineProps={(lineNumber) => {
            const isHighlighted = highlights.includes(lineNumber);
            return {
              style: {
                backgroundColor: isHighlighted
                  ? isDark
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)'
                  : 'transparent',
                display: 'block',
                width: '100%',
              },
            };
          }}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'var(--font-mono, "Fira Code", "Courier New", monospace)',
            },
          }}
        >
          {displayCode}
        </SyntaxHighlighter>
      </div>

      {/* Expand Toggle */}
      {shouldCollapse && (
        <div className="border-t bg-muted/30 px-4 py-2 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary hover:underline"
          >
            {isExpanded ? 'Show less' : `Show ${lines.length - 10} more lines`}
          </button>
        </div>
      )}
    </div>
  );
};
