import ShoppingCart from "./ShoppingCart.jsx";
import renderer from "react-test-renderer";
import store from "../../redux/store/index.js";
import { Provider } from "react-redux";
import products from "../../data/products.json";

describe('ShoppingCart component', () => {
    test("default component without product added on cart, totalPrice must to be $0", () => {
        const component = renderer.create(
            <Provider store={store()}>
                <ShoppingCart/>,
            </Provider>
            );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        let testInstance = component.root;
        expect(testInstance.findByProps({ className  : "totalPrice"}).children[1]).toEqual("0");
    });

    if(products !== null && products.length > 0){
        test("component with first product(2) on the cart, totalPrice must to be > $0", () => {
            const component = renderer.create(
                <Provider store={store()}>
                    <ShoppingCart propCart={[{...products[0], cantidad : 2}]}/>,
                </Provider>
                );
    
            
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            let testInstance = component.root;
            expect(parseInt(testInstance.findByProps({ className  : "totalPrice"}).children[1])).toBeGreaterThanOrEqual(1);
        });
    }
});