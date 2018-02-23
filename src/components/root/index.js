import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import PrivateRoute from '../private-route'
import Header from '../layout/header'
import Login from '../views/login/login'
import Home from '../views/home/home'
import Post from '../views/post/post'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div className='content'>
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <PrivateRoute path="/post" component={Post}/>
                    <PrivateRoute path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root