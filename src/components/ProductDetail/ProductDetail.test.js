import ProductDetail from "./ProductDetail.jsx";
import renderer from "react-test-renderer";
import store from "../../redux/store/index.js";
import { Provider } from "react-redux";
import products from "../../data/products.json";

describe('Product detail component', () => {
    test("default component test (phone-size)", () => {
        const component = renderer.create(
            <Provider store={store()}>
                <ProductDetail propWindowSize={400}/>,
            </Provider>
            );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    test("default component test (nomal-size)", () => {
        const component = renderer.create(
            <Provider store={store()}>
                <ProductDetail propWindowSize={1000} />,
            </Provider>
            );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }); 

    if(products !== null && products.length > 0){
        test("Product detail first product component test", () => {
            const component = renderer.create(
                <Provider store={store()}>
                    <ProductDetail propWindowSize={1000} propProduct={products[0]}/>,
                </Provider>
                );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        }); 
    }
});