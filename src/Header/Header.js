import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import * as categoryImg from '../images/ImagesCategory';

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <div className="Header-item Logo-wrapper">
                <p><Link to="/">menu</Link></p>
                </div>
                <div className="Header-item Central-wrapper">
                <img className="Central-logo" src={categoryImg.logo} alt="logo"/>
                </div>
                <div className="Header-item">
                <Link to="/orders">
                    <div className="Menu-wrapper">
                    <span className="Shopping-bag"><i className="fa fa-shopping-bag"></i></span>
                    <span>${this.props.totalPrice.toFixed(2)}</span>
                    </div>
                </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Header);