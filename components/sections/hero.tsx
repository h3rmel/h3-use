import Link from 'next/link';

import { BlurredBlob } from '@/components/design/blurred-blob';
import { ScrollIndicator } from '@/components/design/scroll-indicator';
import { Icons } from '@/components/icons';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { getHooksCount } from '@/lib/hooks';
import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { NumberTicker } from '../magicui/number-ticker';

export async function Hero() {
  const hooksCount = getHooksCount();
  let githubStars = 50;

  try {
    const response = await fetch('https://api.github.com/repos/h3rmel/h3-use');

    if (response.ok) {
      const data = await response.json();

      githubStars = data.stargazers_count || 0;
    }
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
  }

  return (
    <div
      id="hooks-hero"
      className={cn(
        'relative w-full h-[calc(100dvh-72px)]',
        'flex flex-col items-center justify-center grow gap-8',
        'border-b border-dashed',
      )}
    >
      <hgroup
        className={cn(
          'text-center',
          'z-10',
          'flex flex-col items-center justify-center gap-4',
          'px-4 lg:px-0',
        )}
      >
        <h1 className={cn('text-6xl font-bold', 'max-w-[18ch]')}>
          Hooks Library for Software Engineers
        </h1>
        <p className={cn('max-w-[34ch]')}>
          Free and open-source hooks build with{' '}
          <span className={cn('font-bold')}>React</span> and{' '}
          <span className={cn('font-bold')}>TypeScript</span>. Perfect for your
          next application. <span className={cn('font-bold')}>Shadcn</span>{' '}
          powered.
        </p>
      </hgroup>
      <div
        className={cn(
          'z-10 flex flex-col lg:flex-row lg:items-center justify-center gap-4 w-3/4',
          'px-4 lg:px-0',
        )}
      >
        <Link
          href="/docs"
          className={cn(
            buttonVariants({ variant: 'rainbow', size: 'lg' }),
            'group hover:scale-[1.025]',
          )}
        >
          Browse Hooks
          <Icons.Chevron.Right className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className={cn(
                buttonVariants({ variant: 'rainbow-secondary', size: 'lg' }),
                'group hover:scale-[1.025] gap-2',
              )}
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Give it a star!</span>
              <Icons.Star className="size-4 group-hover:scale-[1.25] duration-200 transition-transform" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className="text-sm text-accent-foreground">
              Currently with <NumberTicker value={githubStars} /> stars.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      <ScrollIndicator
        className={cn(
          'absolute left-8 lg:left-1/2 lg:-translate-x-1/2 bottom-8',
        )}
      />
      <p
        className={cn(
          'absolute bottom-8 right-8',
          'text-sm text-muted-foreground',
        )}
      >
        Currently with {hooksCount} hooks.
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0',
        )}
      />
      <BlurredBlob
        className="lg:-top-[120%] -top-1/2 left-1/2 lg:-translate-x-1/8 lg:opacity-30 opacity-40 rotate-90 lg:rotate-270"
        colorFrom="#EC003F"
        colorTo="#4F39F6"
      />
    </div>
  );
}
