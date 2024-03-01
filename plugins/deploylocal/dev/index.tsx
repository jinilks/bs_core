import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { deploylocalPlugin, DeploylocalPage } from '../src/plugin';

createDevApp()
  .registerPlugin(deploylocalPlugin)
  .addPage({
    element: <DeploylocalPage />,
    title: 'Root Page',
    path: '/deploylocal'
  })
  .render();
