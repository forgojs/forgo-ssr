import { setCustomEnv, ForgoNode, render } from "forgo";

// facade to a generic JSDOM bootstrap
const { parseHTML } = require("linkedom");

// now you can do the same as you would with JSDOM
const { window, document } = parseHTML("<html><body></body></html>");

setCustomEnv({
  window,
  document,
});

export function renderToString(forgoNode: ForgoNode) {
  const { node } = render(forgoNode);
  // console.log(typeof node, node);
  return node.toString();
}
