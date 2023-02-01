import React from 'react';
import { MemoryRouter } from 'react-router';
import { addDecorator } from '@storybook/react';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  liff: {
    name: 'LiFF',
    styles: {
      width: '375px',
      height: '560px',
    },
  },
  liffTablet: {
    name: 'LIFF Tablet',
    styles: {
      width: '540px',
      height: '620px',
    },
  },
};

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports,
      ...MINIMAL_VIEWPORTS,
    },
    defaultViewport: 'liff',
  },
};

addDecorator(Story => (
  <MemoryRouter initialEntries={['/', 'posts']}>
    <Story />
  </MemoryRouter>
));
