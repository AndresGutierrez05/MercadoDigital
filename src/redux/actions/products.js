export const START_GET_PRODUCTS = 'START_GET_PRODUCTS';
export const SUCCESS_GET_PRODUCTS = 'SUCCESS_GET_PRODUCTS';
export const START_GET_PRODUCT = 'START_GET_PRODUCT';
export const SUCCESS_GET_PRODUCT = 'SUCCESS_GET_PRODUCT';
export const START_REMOVE_SELECTED_PRODUCT = 'START_REMOVE_SELECTED_PRODUCT';
export const SUCCESS_REMOVE_SELECTED_PRODUCT = 'SUCCESS_REMOVE_SELECTED_PRODUCT';
export const START_SET_CART = 'START_SET_CART';
export const SUCCESS_SET_CART = 'SUCCESS_SET_CART';
export const START_REMOVE_PRODUCT_CART = 'START_REMOVE_PRODUCT_CART';
export const SUCCESS_REMOVE_PRODUCT_CART = 'SUCCESS_REMOVE_PRODUCT_CART';
export const START_ADD_PRODUCT_QUANTITY = 'START_ADD_PRODUCT_QUANTITY';
export const SUCCESS_ADD_PRODUCT_QUANTITY = 'SUCCESS_ADD_PRODUCT_QUANTITY';
export const START_DISCOUNT_PRODUCT_QUANTITY = 'START_DISCOUNT_PRODUCT_QUANTITY';
export const SUCCESS_DISCOUNT_PRODUCT_QUANTITY = 'SUCCESS_DISCOUNT_PRODUCT_QUANTITY';

export const startGetProducts = payload => ({
    type: START_GET_PRODUCTS,
    ...payload
});

export const startProductSelected = payload => ({
    type: START_GET_PRODUCT,
    ...payload
});

export const startRemoveProductCart = payload => ({
    type: START_REMOVE_PRODUCT_CART,
    ...payload
});

export const startSetCart = payload => ({
    type: START_SET_CART,
    ...payload
});

export const startRemoveSelectedProduct = payload => ({
    type: START_REMOVE_SELECTED_PRODUCT,
    ...payload
});

export const startAddSelectedProduct = payload => ({
    type: START_ADD_PRODUCT_QUANTITY,
    ...payload
});

export const startDiscountSelectedProduct = payload => ({
    type: START_DISCOUNT_PRODUCT_QUANTITY,
    ...payload
});