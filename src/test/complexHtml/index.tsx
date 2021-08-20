import "should";
import * as forgo from "forgo";
import render from "../../index.js";

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

function ChildItem(props: any) {
  return {
    render(props: any) {
      return <p>{props.name}</p>;
    },
  };
}

export default function () {
  it("renders a complex component", () => {
    const result = render(<Parent />);
    result.should.equal(
      `<div id="myapp" data-app-name="test"><p>one</p><p>two</p><p>three</p></div>`
    );
  });
}
