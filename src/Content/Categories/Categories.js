import React, { Component } from 'react';

import Category from './Category/Category';
import Auxiliary from '../../Auxiliary/Auxiliary';
import * as Images from '../../images/ImagesCategory';

class Categories extends Component {
    state = {
        categories: [
            { name: "beverages", img: Images.beverages }, 
            { name: "burgers",   img: Images.burger },
            { name: "desserts",  img: Images.desserts },
            { name: "sushi",     img: Images.sushi },
            { name: "salads",    img: Images.salads },
            { name: "pizza",     img: Images.pizza },
            { name: "wines",     img: Images.wine }
          ]
    }

    componentDidMount () {
        window.scrollTo(0,0);
    }

    render () { 
    const categoriesPage = this.state.categories.map(item => {
        return <Category key={item.name} title={item.name} img={item.img} />; 
     });

    return (<Auxiliary>
        <h2 className="Title-pg">Categories</h2>
        {categoriesPage}
        </Auxiliary>);
    }
}

export default Categories;