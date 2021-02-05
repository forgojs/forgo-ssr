import "mocha";
import "should";

import { renderToString } from "../../../";

function Parent() {
  return {
    render() {
      return (
        <div id="myapp" data-app-name="test">
          <Child />
        </div>
      );
    },
  };
}

function Child() {
  return {
    render() {
      return (
        <>
          <ChildItem name="one" />
          <ChildItem name="two" />
          <ChildItem name="three" />
        </>
      );
    },
  };
}

function ChildItem() {
  return {
    render(props: any) {
      return <p>{props.name}</p>;
    },
  };
}

export default function () {
  it("renders a complex component", () => {
    const result = renderToString(<Parent />);
    result.should.equal(
      `<div data-app-name="test" id="myapp"><p>one</p><p>two</p><p>three</p></div>`
    );
  });
}
