import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as Messages from '../constants/messages';
import CartResult from '../components/CartResult';
import {actDeleteProductInCart,actChangeMessage,actUpdateQuantity} from '../actions/indexActions'
class CartContainers extends Component {
    render() {
        var {cart} = this.props;
        return (
            <Cart >
                {this.showCart(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }
    showCart = (cart) => {
        var result = <tr>
            <td>{Messages.MESSAGE_EMPTY}</td>
        </tr>;
        var {onDeleTeProductInCart,onChangeMessage,onUpdateQuantity} = this.props;
        if(cart.length >0){
            result = cart.map((item,index) =>{
                return <CartItem 
                        key ={index} 
                        item ={item}
                        onDeleTeProductInCart = {onDeleTeProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateQuantity = {onUpdateQuantity}
                />
            })
        }
        return result;
    };
    showCartResult = (cart) => {
        var result = null;
        if(cart.length >0){
            result = <CartResult cart ={cart}/>
        }
        return result;
    };
}
CartContainers.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                description : PropTypes.string.isRequired,
                rating : PropTypes.number.isRequired    
            }),
            quantity : PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = (state) => {
    return {
        cart : state.cart,
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleTeProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message))
        },
        onUpdateQuantity : (product,quantity) => {
            dispatch(actUpdateQuantity(product,quantity))
        },
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainers);