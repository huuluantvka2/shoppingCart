import {combineReducers} from 'redux';
import product from './productReducer';
import cart from './cartReducer';
import message from './messageReducer';
const appReducers = combineReducers({
    product,
    cart,
    message,
})

export default appReducers;