import React from 'react';

import { cn } from '@/lib/utils';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageBanner({
  title,
  subtitle,
  className,
  children,
}: PageBannerProps) {
  return (
    <hgroup className={cn('w-full flex flex-col gap-1 pb-8', className)}>
      <h1
        className={cn(
          'font-heading text-foreground text-3xl font-semibold tracking-normal md:text-4xl',
        )}
      >
        {title}
      </h1>
      <p className={cn('text-muted-foreground text-base md:text-lg')}>
        {subtitle}
      </p>
      <div>{children}</div>
    </hgroup>
  );
}
