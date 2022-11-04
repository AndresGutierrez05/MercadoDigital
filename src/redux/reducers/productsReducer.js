import { SUCCESS_GET_PRODUCTS, SUCCESS_GET_PRODUCT, SUCCESS_REMOVE_SELECTED_PRODUCT, SUCCESS_SET_CART, SUCCESS_REMOVE_PRODUCT_CART, SUCCESS_ADD_PRODUCT_QUANTITY, SUCCESS_DISCOUNT_PRODUCT_QUANTITY } from "../actions/products";


const initialState = {
    productos: [],
    productoSeleccionado: null,
    carrito:[]
  };

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_GET_PRODUCTS:
            state = {...state, productos: action.payload};
            break;
        case SUCCESS_GET_PRODUCT:
            const productSelected = state.productos.filter(product => product.Id === action.payload.id);
            state = {...state, productoSeleccionado: productSelected.length > 0 ? productSelected[0] : null};
            break;
        case SUCCESS_REMOVE_SELECTED_PRODUCT:
            state = {...state, productoSeleccionado: null};
            break;
        case SUCCESS_SET_CART:
            const productToAdd = state.productoSeleccionado ?? state.productos.filter(product => product.Id === action.payload.id)[0];
            state = {...state, carrito : [ ...state.carrito.filter(product => product.Id !== action.payload.id), { ...productToAdd, cantidad : action.payload.quantity } ]};
            break;
        case SUCCESS_REMOVE_PRODUCT_CART:
            state = {...state, carrito : [ ...state.carrito.filter(product => product.Id !== action.payload.id) ]};
            break;
        case SUCCESS_ADD_PRODUCT_QUANTITY:
            const actualQuantityToAdd = state.carrito.filter(product => product.Id === action.payload.id)[0].cantidad;
            state = {...state, carrito : [ ...state.carrito.filter(product => product.Id !== action.payload.id), {...state.productoSeleccionado, cantidad : actualQuantityToAdd + 1} ]};
            break;
        case SUCCESS_DISCOUNT_PRODUCT_QUANTITY:
            const actualQuantityToDiscount = state.carrito.filter(product => product.Id === action.payload.id)[0].cantidad;
            state = {...state, carrito : [ ...state.carrito.filter(product => product.Id !== action.payload.id), {...state.productoSeleccionado, cantidad : actualQuantityToDiscount === 1 ? actualQuantityToDiscount : actualQuantityToDiscount - 1} ]};
            break;
        default:
            state = { ...state };
            break;
    }

    localStorage.setItem('productos', JSON.stringify(state.productos));
    localStorage.setItem('productoSeleccionado', JSON.stringify(state.productoSeleccionado));
    localStorage.setItem('carrito', JSON.stringify(state.carrito));

    return state;
}

export default productsReducer;
