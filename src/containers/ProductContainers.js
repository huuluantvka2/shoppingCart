import React, { Component } from 'react';
import Product from '../components/Product';
import Products from '../components/Products';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actAddToCart,actChangeMessage} from '../actions/indexActions';
class ProductContainers extends Component {
    render() {
        var {product} = this.props;
        return (
            <Products >
                {this.showProduct(product)}
            </Products>
        );
    }
    showProduct = (product) => {
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if(product.length>0){
            result = product.map((item,index) =>{
                return <Product 
                                item ={item} 
                                key ={index} 
                                index = {index}
                                onAddToCart = {onAddToCart}
                                onChangeMessage = {onChangeMessage}
                />
            })
        }
        return result;
    };
}
ProductContainers.propTypes = {
    product : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            description : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = (state) => {
    return {
        product : state.product,
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message))
        },
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainers);