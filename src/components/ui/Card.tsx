import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const Card = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm', className)}>{children}</div>
);

export const CardHeader = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('p-4 border-b border-gray-100 dark:border-gray-800', className)}>{children}</div>
);

export const CardTitle = ({ className, children }: { className?: string; children: ReactNode }) => (
  <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>
);

export const CardContent = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('p-4', className)}>{children}</div>
);

export const CardFooter = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('p-4 border-t border-gray-100 dark:border-gray-800', className)}>{children}</div>
);

