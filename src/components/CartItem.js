import React, { Component } from "react";
import {MESSAGE_DELETE_SUCCESS,MESSAGE_UPDATE_SUCCESS} from '../constants/messages';
class CartItem extends Component {
  render() {
    var { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              onClick = {() =>this.onUpdateQuantity(item.product,item.quantity-1)}
            >
              <a href="/#">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              onClick = {() =>this.onUpdateQuantity(item.product,item.quantity+1)}
            >
              <a href="/#">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick = {() => this.onDeleTeProductInCart(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDeleTeProductInCart = (product) => {
    this.props.onDeleTeProductInCart(product);
    this.props.onChangeMessage(MESSAGE_DELETE_SUCCESS);
  };
  onUpdateQuantity = (product,quantity) => {
    if(quantity>0){
      this.props.onUpdateQuantity(product,quantity);
      this.props.onChangeMessage(MESSAGE_UPDATE_SUCCESS);
    }
  };
}

export default CartItem;
