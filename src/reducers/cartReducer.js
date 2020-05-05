import * as Types from '../constants/actionsType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data :[];
var findIdProductInCart =(cart,product) =>{
    var result =-1;
    for(var i=0;i<cart.length;i++){
        if(cart[i].product.id === product.id){
            result = i;
            break;
        }
    }
    return result;
}
const appReducers = (state = initialState,action) => {
    var {product,quantity} = action;
    var index = -1;
    switch(action.type){
        case Types.ADD_TO_CART : 
                    index = findIdProductInCart(state,product);
                    if(index !== -1){
                        state[index].quantity +=quantity;
                    }
                    else{
                        state.push({
                            product,
                            quantity
                        })
                    }
                    localStorage.setItem('CART',JSON.stringify(state));
                    return [...state];
        case Types.DELETE_PRODUCT_IN_CART :
                    index = findIdProductInCart(state,product);
                    if(index !== -1){
                        state.splice(index,1);
                    }
                    localStorage.setItem('CART',JSON.stringify(state));
                    return [...state];
        case Types.UPDATE_QUANTITY :
                    index = findIdProductInCart(state,product);
                    state[index].quantity = quantity;
                    localStorage.setItem('CART',JSON.stringify(state));
                    return [...state];
        default : return state;
    }
};

export default appReducers;