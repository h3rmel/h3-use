import { RainbowButton } from '@/components/magicui/rainbow-button';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <section
        className={cn('flex flex-col items-center justify-center grow gap-4')}
      >
        <hgroup
          className={cn(
            'text-center',
            'flex flex-col items-center justify-center gap-4',
          )}
        >
          <h1 className={cn('text-5xl font-bold', 'max-w-[18ch]')}>
            Hooks Library for Software Engineers
          </h1>
          <p className={cn('max-w-[40ch]')}>
            +50 free and open-source hooks build with React and TypeScript.
            Perfect for your next project. Shadcn powered.
          </p>
        </hgroup>
        <div className={cn('flex items-center justify-center gap-4')}>
          <RainbowButton>Browse Hook</RainbowButton>
        </div>
      </section>
    </>
  );
}
