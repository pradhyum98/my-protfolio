'use client';

import { AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'tip' | 'danger';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const calloutStyles: Record<CalloutType, { icon: typeof Info; classes: string }> = {
  info: {
    icon: Info,
    classes: 'border-l-blue-500/50 bg-blue-500/5 text-blue-900 dark:text-blue-100',
  },
  warning: {
    icon: AlertTriangle,
    classes: 'border-l-yellow-500/50 bg-yellow-500/5 text-yellow-900 dark:text-yellow-100',
  },
  tip: {
    icon: Lightbulb,
    classes: 'border-l-green-500/50 bg-green-500/5 text-green-900 dark:text-green-100',
  },
  danger: {
    icon: AlertCircle,
    classes: 'border-l-red-500/50 bg-red-500/5 text-red-900 dark:text-red-100',
  },
};

export function Callout({ type = 'info', title, children, className }: CalloutProps) {
  const { icon: Icon, classes } = calloutStyles[type];

  return (
    <div
      className={cn(
        'my-6 border-l-4 pl-6 pr-4 py-4 rounded-r-lg',
        classes,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
        <div className="flex-1 space-y-2">
          {title && <div className="font-semibold text-sm uppercase tracking-wide">{title}</div>}
          <div className="text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
