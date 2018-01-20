import React from 'react';

import './Order.css'

const order = (props) => {
    return (
    <div className="Order-item">
        <div className="Order-item-img">
            <img src={props.img} alt={props.title} className="Order-img"/>
        </div>
        <div className="Order-item-details">
            <span>{props.title}</span>
            <span>{props.count} x ${props.price.toFixed(2)}</span>
        </div>
        <div className="Order-item-price">
            <p>${(props.count * props.price).toFixed(2)}</p>
        </div>
        <div className="Order-item-remove" onClick={() => props.delete(props.item)}>x</div>
    </div>
    );
}

export default order;