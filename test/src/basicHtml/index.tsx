import "mocha";
import "should";

import { renderToString } from "../../../";

function MyComponent() {
  return {
    render() {
      return <div>Hello world</div>;
    },
  };
}

export default function () {
  it("renders a simple component", () => {
    const result = renderToString(<MyComponent />);
    result.should.equal("<div>Hello world</div>");
  });
}
