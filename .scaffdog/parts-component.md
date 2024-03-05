---
name: "parts-component"
root: "src/components"
output: "**/*"
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`
```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`
```typescript
import { FC, ReactNode } from 'react'

import styles from './{{ inputs.name | pascal }}.module.scss'

type {{ inputs.name | pascal }}Props = {
  children: ReactNode
  addClass?: string[]
}

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal }}Props> = ({ children, addClass = [] }) => {
  const customClass = Array.isArray(addClass) ? addClass : [addClass]
  return (
    <div className={[styles.{{ inputs.name | camel }}, ...customClass].join(' ')}>
      <>{{ inputs.name | pascal }}</>
      {children}
    </div>
  )
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`
```typescript
// import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

export default {
  title: 'parts/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as Meta

export const Basic: StoryObj<typeof {{ inputs.name | pascal }}> = {
  args: {
    children: 'children',
  },
}

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`
```scss
@use "style/_variable" as *;

.{{ inputs.name | camel }} {
  //
}

```
