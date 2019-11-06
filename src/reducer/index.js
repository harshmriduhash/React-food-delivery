import {ADD, REMOVE} from "../action/index";

// https://github.com/reactjs/react-redux/blob/d5bf492ee35ad1be8ffd5fa6be689cd74df3b41e/src/components/createConnect.js#L91
let initialState = {
    inventory: [
        {fooditem: "Pasta Carbonara", price: 12.00},
        {fooditem: "Margherita Pizza", price: 27.00},
        {fooditem: "Mushroom Risotto", price: 16.00},
        {fooditem: "Panzenella", price: 10.00},
        {fooditem: "Bruschetta", price: 10.00},
        {fooditem: "Tiramisu", price: 6.00}
    ],
    cart: [],
    total: [{totalvalue:0}]
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD :
            let alreadyInCart = false;
            if(state.cart.length>0) {
                state.cart = state.cart.map((cartitem) => {
                    console.log(cartitem.fooditem+"\n"+action.item.fooditem);
                    if (cartitem.fooditem===action.item.fooditem) {
                        console.log("hahahah");
                        cartitem.qty+=1;
                        alreadyInCart=true;
                    }
                    return cartitem;
                });

                console.log(state.cart);
            }

            if(!alreadyInCart)
            {
                state.cart.push({
                    fooditem: action.item.fooditem,
                    price: action.item.price,
                    qty: 1
                });
            }
            updateTotal(state);
            //apart from cart state all objects of state remains same
            return {
                ...state,
                [action.cart] : state.cart
            };

        case REMOVE :
            console.log("Food Item to be removed: "+ action.item.fooditem);
            let index=-1;
            state.cart.every((cartItem) => {
                if(cartItem.fooditem===action.item.fooditem)
                {
                    index= state.cart.indexOf(cartItem);
                }
                return index;
            });
            if(index!==-1) {
                state.cart.splice(index,1);
                //delete state.cart[index];
                console.log(state.cart);

            }
            updateTotal(state);
            //apart from cart state all objects of state remains same
            return {
                ...state,
                [action.cart] : state.cart
            };
        default :
            return state;
    }
};

export function updateTotal(state) {
    if(state.cart.length>0) {
        console.log(state.cart);
        console.log(state.cart.length);
        let total=0;
        state.cart.every((cartitem)=>
        {
            total+= (cartitem.price*cartitem.qty);
            return total;
        });
        console.log("total amount: "+total);
        state.total.totalvalue = total;
    }
    else
    {
        state.total.totalvalue = 0;
    }
    return state;
}

export default todos;
