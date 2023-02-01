---
name: "model-component"
root: "src/components"
output: "**/*"
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { FC } from 'react';

import styles from './{{ inputs.name | pascal }}.module.scss';

import { use{{ inputs.name | pascal }} } from './use{{ inputs.name | pascal }}';

export const {{ inputs.name | pascal }} = () => {
  const { handleClick } = use{{ inputs.name | pascal }}();
  return <{{ inputs.name | pascal }}View handleClick={handleClick} />;
};

type {{ inputs.name | pascal }}ViewProps = {
  type?: 'primary' | 'secondary';
  addClass?: string[];
  handleClick?: () => void;
};
export const {{ inputs.name | pascal }}View: FC<{{ inputs.name | pascal }}ViewProps> = ({ type = 'primary', addClass = [], handleClick }) => {
  return (
    <div className={[styles.{{ inputs.name | lower }}, ...addClass, type && styles[`--${type}`]].join(' ')}>
      <>{{ inputs.name | pascal }}</>
      {handleClick && <button onClick={handleClick}>click</button>}
    </div>
  );
};

```


# `{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.ts`

```typescript
export const use{{inputs.name | pascal}} = () => {
  const handleClick = () => {
    console.log('action');
  };
  return { handleClick };
};

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { {{ inputs.name | pascal }}View } from './{{ inputs.name | pascal }}';

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }}View,
  args: {
    type: 'primary',
    handleClick: action(''),
  },
} as ComponentMeta<typeof {{ inputs.name | pascal }}View>;
export const Basic: ComponentStory<typeof {{ inputs.name | pascal }}View> = args => <{{ inputs.name | pascal }}View {...args}></{{ inputs.name | pascal }}View>;

```

# `{{ inputs.name | pascal }}/use{{ inputs.name | pascal }}.test.tsx`

```typescript
import { cleanup, renderHook } from '@testing-library/react';

import { use{{ inputs.name | pascal }} } from './use{{ inputs.name | pascal }}';

describe('use{{ inputs.name | pascal }}のテスト', () => {
  beforeEach(() => {
    cleanup();
  });
  it('use{{ inputs.name | pascal }}の機能テスト', () => {
    const { result } = renderHook(() => {
      return use{{ inputs.name | pascal }}();
    });
    // expect().toBe();
  });
});

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
@use "style/_variable" as *;

.{{ inputs.name | lower }} {
  //
}


```
