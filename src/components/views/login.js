import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from "../../actions/auth"

const Login = (props) => {
    const {from} = props.location.state || {from: {pathname: "/"}};

    console.log(props.auth);

    if (props.auth.logged) {
        return <Redirect to={from}/>;
    }

    return (
        <div>
            <p>You need to be logged to see: {from.pathname}</p>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login({}))
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)