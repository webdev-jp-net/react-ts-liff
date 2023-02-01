---
name: "page-component"
root: "src/components/pages"
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

// import { useSelector } from 'react-redux';
// import { RootState } from 'store';

import { usePageTitle } from 'hooks/usePageTitle';

import styles from './{{ inputs.name | pascal }}.module.scss';

export const {{ inputs.name | pascal }}: FC = () => {
  // const { fuga } = useSelector((state: RootState) => state.hoge);
  usePageTitle(`{{ inputs.name | pascal }}`);

  return (
    <>
      <div className={styles.{{ inputs.name | lower }}}>
        <>{{ inputs.name | pascal }}</>
      </div>
    </>
  );
};

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`
```scss
@use "style/_variable" as *;

.{{ inputs.name | lower }} {
  //
}


```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { store } from 'store';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
const history = createMemoryHistory();

describe('{{ inputs.name | pascal }}', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('{{ inputs.name | pascal }}のスナップショット', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <{{ inputs.name | pascal }} />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

```
