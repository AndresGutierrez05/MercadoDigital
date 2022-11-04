import { all } from "redux-saga/effects";
import products from "./products.js";

export default function* rootSaga(){
    yield all([
        products()
    ]);
}