import * as forgo from "forgo";
import render from "../../index";

function MyComponent() {
  return {
    render() {
      return <div>Hello world</div>;
    },
  };
}

export default function () {
  it("renders a simple component", () => {
    const result = render(<MyComponent />);
    result.should.equal("<div>Hello world</div>");
  });
}
