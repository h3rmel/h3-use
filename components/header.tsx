import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { NavigationDesktop } from './navigation-desktop';
import { NavigationMobile } from './navigation-mobile';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'w-full h-[72px]',
        'bg-background/50 backdrop-blur-sm',
        'border-b border-dashed',
      )}
    >
      <section
        className={cn(
          'max-w-7xl w-full mx-auto px-4 h-full',
          'flex items-center gap-4',
          'lg:border-x border-dashed',
        )}
      >
        <div className="hidden lg:flex">
          <HeaderLogo />
        </div>
        <NavigationDesktop />
        <NavigationMobile />
      </section>
    </header>
  );
}
