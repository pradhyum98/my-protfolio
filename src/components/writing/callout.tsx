import { AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'tip' | 'warning' | 'note';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const calloutConfig = {
  info: {
    icon: Info,
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-500/5',
    textColor: 'text-blue-700 dark:text-blue-400',
    iconColor: 'text-blue-500',
  },
  tip: {
    icon: Lightbulb,
    borderColor: 'border-l-green-500',
    bgColor: 'bg-green-500/5',
    textColor: 'text-green-700 dark:text-green-400',
    iconColor: 'text-green-500',
  },
  warning: {
    icon: AlertTriangle,
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/5',
    textColor: 'text-amber-700 dark:text-amber-400',
    iconColor: 'text-amber-500',
  },
  note: {
    icon: AlertCircle,
    borderColor: 'border-l-purple-500',
    bgColor: 'bg-purple-500/5',
    textColor: 'text-purple-700 dark:text-purple-400',
    iconColor: 'text-purple-500',
  },
};

export function Callout({ type = 'info', title, children, className }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'my-6 border-l-4 pl-6 pr-4 py-4 rounded-r',
        config.borderColor,
        config.bgColor,
        className
      )}
      role="note"
      aria-label={title || type}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn('h-5 w-5 mt-0.5 flex-shrink-0', config.iconColor)} />
        <div className="flex-1 space-y-2">
          {title && (
            <div className={cn('font-semibold text-sm uppercase tracking-wide', config.textColor)}>
              {title}
            </div>
          )}
          <div className="text-sm leading-relaxed text-foreground/90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
