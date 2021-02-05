import { setCustomEnv, ForgoNode, render } from "forgo";

// facade to a generic JSDOM bootstrap
const { parseHTML } = require("linkedom");

// now you can do the same as you would with JSDOM
const { window, document, HTMLElement } = parseHTML(
  "<html><body></body></html>"
);

window.HTMLElement = HTMLElement;
window.Text = document.createTextNode().constructor;

setCustomEnv({
  window,
  document,
});

export default function renderToString(forgoNode: ForgoNode) {
  const { node } = render(forgoNode);
  return node.toString();
}
