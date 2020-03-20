import { ADD_TO_CART } from "./ProductTypes";

export const addedToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}