import { setCustomEnv as setForgoEnv, ForgoNode, render } from "forgo";

import * as jsdom from "jsdom";

const { JSDOM } = jsdom;

// now you can do the same as you would with JSDOM
const { window } = new JSDOM("<html><body></body></html>");

setForgoEnv({
  window,
  document: window.document,
});

export function setCustomEnv(customEnv: any) {
  setForgoEnv(customEnv);
}

export default function renderToString(forgoNode: ForgoNode) {
  const { node } = render(forgoNode);
  return (node as Element).outerHTML;
}
