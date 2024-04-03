// import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Navigation } from './Navigation'

export default {
  title: 'parts/Navigation',
  component: Navigation,
} as Meta

export const Basic: StoryObj<typeof Navigation> = {
  args: {},
}
