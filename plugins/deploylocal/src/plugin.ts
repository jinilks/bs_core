import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const deploylocalPlugin = createPlugin({
  id: 'deploylocal',
  routes: {
    root: rootRouteRef,
  },
});

export const DeploylocalPage = deploylocalPlugin.provide(
  createRoutableExtension({
    name: 'DeploylocalPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
