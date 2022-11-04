import ImageProduct from "./ImageProduct.jsx";
import renderer from "react-test-renderer";

test("Image product component test", () => {
    const component = renderer.create(
        <ImageProduct />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});