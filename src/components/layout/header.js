import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from "../../actions/auth"

const Header = (props) => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/post'>Post</Link>
            {
                props.auth.logged ?
                    <button onClick={props.logout}>Logout</button>
                :
                    <Link to='/login'>Login</Link>
            }
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)