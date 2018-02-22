import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import PrivateRoute from '../private-route'
import Login from '../views/login'
import Home from '../views/home'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute path="/" component={Home}/>
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root