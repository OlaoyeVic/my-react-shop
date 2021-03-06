import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./ProductsReducer";
import { IProductsState } from "./ProductTypes";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "./BasketTypes";

export interface IApplicationState {
    products: IProductsState
    basket: IBasketState
}

const rootReducer = combineReducers<IApplicationState>({
    basket: basketReducer,
    products: productsReducer
})

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
    return store
}