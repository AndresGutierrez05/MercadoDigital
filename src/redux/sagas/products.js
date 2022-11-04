import { put, takeLatest } from 'redux-saga/effects';
import { START_GET_PRODUCTS, SUCCESS_GET_PRODUCTS, START_GET_PRODUCT, START_REMOVE_PRODUCT_CART, START_REMOVE_SELECTED_PRODUCT, START_ADD_PRODUCT_QUANTITY, START_DISCOUNT_PRODUCT_QUANTITY, START_SET_CART, 
   SUCCESS_GET_PRODUCT, SUCCESS_SET_CART, SUCCESS_REMOVE_PRODUCT_CART, SUCCESS_REMOVE_SELECTED_PRODUCT, SUCCESS_ADD_PRODUCT_QUANTITY, SUCCESS_DISCOUNT_PRODUCT_QUANTITY  } from '../actions/products';
import productsJSON from "../../data/products.json";

function* getProducts() {
   try {
      yield put({type: SUCCESS_GET_PRODUCTS, payload: productsJSON});
   } catch (e) {
      yield put({type: SUCCESS_GET_PRODUCTS, message: e.message});
   }
}

function* setProductSelected(action){
   try {
      yield put({type: SUCCESS_GET_PRODUCT, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_GET_PRODUCT, message: e.message});
   }
}

function* setCart(action) {
   try {
      yield put({type: SUCCESS_SET_CART, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_SET_CART, message: e.message});
   }
}

function* removeProductCart(action) {
   try {
      yield put({type: SUCCESS_REMOVE_PRODUCT_CART, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_REMOVE_PRODUCT_CART, message: e.message});
   }
}

function* removeSelectedProduct(action) {
   try {
      yield put({type: SUCCESS_REMOVE_SELECTED_PRODUCT, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_REMOVE_SELECTED_PRODUCT, message: e.message});
   }
}

function* addProductQuantity(action) {
   try {
      yield put({type: SUCCESS_ADD_PRODUCT_QUANTITY, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_ADD_PRODUCT_QUANTITY, message: e.message});
   }
}

function* discountProductQuantity(action) {
   try {
      yield put({type: SUCCESS_DISCOUNT_PRODUCT_QUANTITY, payload: action});
   } catch (e) {
      yield put({type: SUCCESS_DISCOUNT_PRODUCT_QUANTITY, message: e.message});
   }
}


// Watchers
export default function* products() {
  yield takeLatest(START_GET_PRODUCTS, getProducts);
  yield takeLatest(START_GET_PRODUCT, setProductSelected);
  yield takeLatest(START_SET_CART, setCart);
  yield takeLatest(START_REMOVE_PRODUCT_CART, removeProductCart);
  yield takeLatest(START_REMOVE_SELECTED_PRODUCT, removeSelectedProduct);
  yield takeLatest(START_ADD_PRODUCT_QUANTITY, addProductQuantity);
  yield takeLatest(START_DISCOUNT_PRODUCT_QUANTITY, discountProductQuantity);
}