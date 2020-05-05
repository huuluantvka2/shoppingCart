import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from '../components/Message'
class CartContainers extends Component {
    render() {
        let {message} = this.props;
        return (
            <Message message ={message}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        message : state.message
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainers);