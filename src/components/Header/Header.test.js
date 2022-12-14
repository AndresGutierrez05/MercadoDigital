import Header from "./Header.jsx";
import renderer from "react-test-renderer";

test("Header component test", () => {
    const component = renderer.create(
        <Header />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});