# Forgo Server Side Rendering

Allows you to render a forgo component into a string.

## Installation

```sh
npm i forgo-ssr
```

## Rendering to a string

This is quite simple really.

```tsx
import render from "forgo-ssr";

// A forgo component.
function MyComponent() {
  return {
    render() {
      return <div>Hello world</div>;
    },
  };
}

// Get the html (string) and serve it via koa, express etc.
const html = render(<MyComponent />);
```
