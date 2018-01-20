import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import Product from './Product/Product';
import Auxiliary from '../../Auxiliary/Auxiliary';
import * as actionsType from '../../redux/actions';
import './Products.css';

class Products extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render () {
        const productName = this.props.match.params.name;
        const productPage = this.props[productName].map(item => {
        return (<Product 
            key={item.name} 
            title={item.name} 
            img={item.img} 
            price={item.price} 
            count={item.count} 
            add={this.props.counterHandlerAdd} 
            remove={this.props.counterHandlerRemove} 
            category={productName}
            productObj={item}/>); 
         });

        return (<Auxiliary>
            {/* <div className="Products-title-wrapper">
                <Link to="/categories">
                <div className="Products-title-back Btn-back">
                    <p>back</p>
                </div>
                </Link>
                <h2 className="Products-title-h2">{productName}</h2>
                <div className="Products-title-back"></div>
            </div> */}
            <h2 className="Title-pg">{productName}</h2>
            {productPage}
            </Auxiliary>);
    }
}

const mapStateToProps = state => {
    return {
        beverages: state.beverages,
        burgers: state.burgers,
        desserts: state.desserts,
        sushi: state.sushi,
        salads: state.salads,
        pizza: state.pizza,
        wines: state.wines
    }
}

const mapDispatchToProps = dispatch => {
    return {
        counterHandlerAdd:    (category, name) => dispatch({ type: actionsType.ADD_TO_COUNT,    category: category, name: name }),
        counterHandlerRemove: (category, name) => dispatch({ type: actionsType.REMOVE_TO_COUNT, category: category, name: name  })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);