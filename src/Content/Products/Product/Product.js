import React from 'react';
import { connect } from 'react-redux';

import './Product.css';
import * as actionsType from '../../../redux/actions';

const product = (props) => {

    const obj = {
        ...props.productObj
    }
    return (
        <div className="Product">
            <div className="Inside-Product-Wrapper">
                <p className="Product-title">{props.title}</p>
                <img className="Product-img" src={props.img} alt={props.title} />
                <div className="Product-footer-wrapper">
                    <div className="Product-footer-left">
                        <div>Price: <span className="Product-price-count">{props.count}</span> x ${props.price.toFixed(2)}</div>
                    </div>
                    <div className="Product-footer-central">|</div>
                    <div className="Product-footer-right">
                        <div>
                            <button className="Product-btn-remove" onClick={() => props.remove(props.category, props.title)}>-</button>
                            <button className="Product-btn-order" onClick={() => props.addToPrice(props.title, props.price, props.count, obj, props.category)}>Order</button>
                            <button className="Product-btn-add" onClick={() => props.add(props.category, props.title)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToPrice:    (productName, cost, count, productObj, category) => dispatch({ type: actionsType.ADD_TO_PRICE, productName: productName, cost: count * cost, productObj: productObj, category: category }),
        removeToPrice: (productName, cost, count) => dispatch({ type: actionsType.REMOVE_TO_PRICE,                    productName: productName, cost: count * cost })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(product);