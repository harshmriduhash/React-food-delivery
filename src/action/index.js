export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


export function addToCart(item) {
    return {
        type : ADD,
        item                                // this is same as newItem : newItem in ES6
    }
}

export function removeFromCart(item) {
    return {
        type : REMOVE,
        item
    }
}

