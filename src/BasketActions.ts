import { BasketActionTypes, IBasketAdd } from "./BasketTypes";
import { IProduct } from "./ProductData";

export const addToBasket = (product: IProduct): IBasketAdd => ({
    product,
    type: BasketActionTypes.ADD
})