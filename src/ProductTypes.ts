import { IProduct } from "./ProductData";

export enum ProductsActionTypes {
    GETALL = "PRODUCTS/GETALL",
    LOADING = "PRODUCTS/LOADING"
}

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL
    products: IProduct[]
}
export interface IProductsLoadingAction {
    type: ProductsActionTypes.LOADING
    product: IProduct
}

export type ProductsActions = IProductsGetAllAction | IProductsLoadingAction

export interface IProductsState {
    readonly products: IProduct
    readonly productsLoading: boolean
}