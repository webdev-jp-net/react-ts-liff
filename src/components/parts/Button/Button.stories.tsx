import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'parts/link button/Button',
  component: Button,
  args: {
    disabled: false,
    addClass: [],
    handleClick: action('click'),
    children: 'ボタン',
  },
} as ComponentMeta<typeof Button>;
export const Basic: ComponentStory<typeof Button> = args => <Button {...args}></Button>;
