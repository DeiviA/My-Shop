import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from './Order/Order';
import Auxiliary from '../../Auxiliary/Auxiliary';
import './Orders.css';

class Orders extends Component {
    state = {
            name: '',
            phone: '',
            city: '',
            street: '',
            isValid: false
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render () {
       const onClickButtonHandler = (event) => {
           event.preventDefault();
            if (this.props.orders.length) {
                alert('Thank you for your order!');
                this.props.submitOrder();
            } else {
                alert('Your order list is empty!');
            }
        }

        const onKeypressInput = (event) => {     
            if (!(event.which >= 48 && event.which <= 57)) event.preventDefault();
          }

        const onChangeInput = (event, alias) => {
            let isValidAll = true
            const oldState = {
                ...this.state
            }

            oldState[alias] = event.target.value;
            for (const key in oldState) {
                if (key !== "isValid") {
                if (!oldState[key] && isValidAll) isValidAll = false
                }
            }
            
            oldState.isValid = isValidAll;
            this.setState({
                ...oldState
            })
        }

    let orders = <p className="Orders-empty-info">your order list is empty</p>;
            if (this.props.orders.length) {
            orders = this.props.orders.map(item => {
                return <Order 
                key={item.name} 
                title={item.name} 
                img={item.img}
                count={item.count}
                price={item.price}
                item={item}
                delete={(item) => this.props.deleteOrder(item)}
                ></Order>;
                });
            }
    const formGroup = (
    <div className="Orders-form-wrapper">
    <p className="Orders-empty-info">order form</p>
    <form className="Orders-form-group">
        <input type="text" placeholder="Your Name"    name="name"   onChange={(event) => onChangeInput(event, "name")}/>
        <input type="text" placeholder="Your phone"   name="phone"  onChange={(event) => onChangeInput(event, "phone")} onKeyPress={(event) => {onKeypressInput(event)}}/>
        <input type="text" placeholder="City/Town"    name="city"   onChange={(event) => onChangeInput(event, "city")}/>
        <input type="text" placeholder="Street"       name="street" onChange={(event) => onChangeInput(event, "street")}/>
        <p>Total price <span className="Form-currency">$</span><span className="Form-price">{this.props.total.toFixed(2)}</span></p>
        <button disabled={!this.state.isValid} onClick={onClickButtonHandler}>order</button>
    </form>
    </div>
    );

        return (
            <Auxiliary>
                <h2 className="Title-pg">Orders</h2>
                <div className="Orders-list">
                    {formGroup}
                </div>
                <div className="Orders-list">
                    {orders}
                </div>
            </Auxiliary>);
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        total: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteOrder: (item) => dispatch({ type: "DELETE_ORDER", item: item }),
        submitOrder: () => dispatch({     type: "SUBMIT_ORDER"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);