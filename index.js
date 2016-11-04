/**
 * Created by ZhenDu on 2016/9/27.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute,hashHistory} from 'react-router'

import ProductDetail from './ProductDetail'
render((
    <Router history={hashHistory}>
        <Route path="/" component={ProductDetail} />
    </Router>
), document.getElementById('productDetail'))


