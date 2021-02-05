# Forgo Server Side Rendering

Allows you to render a forgo node tree into a string.

## The renderToString() function

```tsx
import { renderToString } from "forgo-ssr";

// A forgo component.
function Component() {
  return {
    render(props) {
      return <p id="live-scores">Top score is {props.topscore}</p>;
    },
  };
}

const html = renderToString(<Component />);


```
