import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:example',
    title: 'UseWindowSizeDemo',
    description: "use-window-size's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-window-size'],
    files: [
      {
        path: 'registry/examples/use-window-size-demo.tsx',
        type: 'registry:example',
        target: 'components/examples/use-window-size-demo.tsx',
      },
    ],
  },
  {
    name: 'use-media-demo',
    type: 'registry:example',
    title: 'UseMediaDemo',
    description: "use-media's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-media'],
    files: [
      {
        path: 'registry/examples/use-media-demo.tsx',
        type: 'registry:example',
        target: 'components/examples/use-media-demo.tsx',
      },
    ],
  },
  {
    name: 'use-mouse-demo',
    type: 'registry:example',
    title: 'UseMouseDemo',
    description: "use-mouse's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-mouse'],
    files: [
      {
        path: 'registry/examples/use-mouse-demo.tsx',
        type: 'registry:example',
        target: 'components/examples/use-mouse-demo.tsx',
      },
    ],
  },
];
