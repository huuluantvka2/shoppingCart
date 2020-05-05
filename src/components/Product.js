import React, { Component } from "react";
import * as Message from '../constants/messages';
class Product extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={item.image} className="img-fluid" alt="" />
            <a href="/#">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/#">{item.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(item.rating)}</li>
            </ul>
            <p className="card-text">{item.discription}</p>
            <div className="card-footer">
              <span className="left">{item.price}$</span>
              <span className="right">
                <button
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  onClick = {() =>this.onAddToCart(item)}
                >
                  <i className="fa fa-shopping-cart" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating = (rating) => {
    var result = [];
    if (rating > 0) {
      for (var i = 1; i <= rating; i++) {
        result.push(<i key={i} className="fa fa-star" />);
      }
      for (var j = 1; j <= 5 - rating; j++) {
        result.push(<i key={i + j} className="fa fa-star-o" />);
      }
    }
    return result;
  };
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MESSAGE_ADD_TO_CART_SUCCESS);
  };
}

export default Product;
