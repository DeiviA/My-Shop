import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Category.css';

class Category extends Component {

    render () {
        return (
            <div className="Category">
            <Link to={{
                pathname: "/categories/" + this.props.title
            }} className="Category-link">
            <div className="Inside-Category-Wrapper">
            <p className="Category-title">{this.props.title}</p>
            <img className="Category-img" src={this.props.img} alt={this.props.title} />
            </div>
            </Link>
            </div>
        );
}
}

export default Category;