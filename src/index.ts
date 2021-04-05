import { setCustomEnv, ForgoNode, render } from "forgo";

import * as jsdom from "jsdom";

const { JSDOM } = jsdom;

// now you can do the same as you would with JSDOM
const { window } = new JSDOM("<html><body></body></html>");

setCustomEnv({
  window,
  document: window.document,
});

export default function renderToString(forgoNode: ForgoNode) {
  const { node } = render(forgoNode);
  return (node as Element).outerHTML;
}
