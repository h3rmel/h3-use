import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { NavigationDesktop } from './navigation-desktop';
import { NavigationMobile } from './navigation-mobile';

export function Header() {
  return (
    <header
      className={cn(
        'sticky lg:top-4 top-0 left-0 right-0 z-50',
        'w-full h-[72px]',
      )}
    >
      <section
        className={cn(
          'max-w-5xl w-full mx-auto px-4 h-full',
          'bg-background/50 backdrop-blur-xs',
          'flex items-center gap-4',
          'lg:border border-b rounded-md shadow-sm',
        )}
      >
        <HeaderLogo />
        <NavigationDesktop />
        <NavigationMobile />
      </section>
    </header>
  );
}
