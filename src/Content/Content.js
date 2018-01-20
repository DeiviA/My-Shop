import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Categories from './Categories/Categories';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import './Content.css';

class Content extends Component {

    render () {
        return (
                <div className="Content">
                <Switch>
                  <Route path="/categories/:name" component={Products} />
                  <Route path="/categories" component={Categories} />
                  <Route path="/orders" component={Orders} />
                  <Redirect from="/" to='/categories' />
                </Switch>
                </div>
            );
    }
}

export default Content;