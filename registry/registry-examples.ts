import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:example',
    title: 'Use Window Size Demo',
    description: "use-window-size's hook in action.",
    registryDependencies: ['https://ez-hooks.vercel.app/r/use-window-size'],
    files: [
      {
        path: 'registry/examples/use-window-size-demo.tsx',
        type: 'registry:example',
        target: 'components/examples/use-window-size-demo.tsx',
      },
    ],
  },
];
