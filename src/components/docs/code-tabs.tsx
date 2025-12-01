'use client';

import { CodeBlock } from './code-block';

type InstallCommand = {
  npm: string;
  yarn: string;
  pnpm: string;
  bun?: string;
};

type CodeTabsProps = {
  install?: string;
  commands?: InstallCommand;
  filename?: string;
};

export const CodeTabs = ({ install, commands, filename }: CodeTabsProps) => {
  // Auto-generate install commands if package name provided
  const tabs = commands
    ? [
        { label: 'npm', code: commands.npm, language: 'bash' },
        { label: 'yarn', code: commands.yarn, language: 'bash' },
        { label: 'pnpm', code: commands.pnpm, language: 'bash' },
        ...(commands.bun ? [{ label: 'bun', code: commands.bun, language: 'bash' }] : []),
      ]
    : install
    ? [
        { label: 'npm', code: `npm install ${install}`, language: 'bash' },
        { label: 'yarn', code: `yarn add ${install}`, language: 'bash' },
        { label: 'pnpm', code: `pnpm add ${install}`, language: 'bash' },
        { label: 'bun', code: `bun add ${install}`, language: 'bash' },
      ]
    : [];

  if (tabs.length === 0) return null;

  return (
    <CodeBlock
      code={tabs[0].code}
      language="bash"
      variant="tabs"
      tabOptions={tabs}
      filename={filename}
      showLineNumbers={false}
    />
  );
};
