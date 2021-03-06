import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';
import SingleChart from './SingleChart';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';




/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Navbar = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div className="navbar">
      <AppBar
        style={{ backgroundColor: '#000000' }}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={
          <IconMenu
            iconButtonElement={
              <IconButton><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#E91E63'>
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
              </IconButton>}>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/" style={{color: '#E30B5C'}}>Home</Link></MenuItem>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/login" style={{color: '#E30B5C'}}>Login</Link></MenuItem>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/signup" style={{color: '#E30B5C'}}>Sign Up</Link></MenuItem>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/bubble-chart" style={{color: '#E30B5C'}}>Calories</Link></MenuItem>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/daily-progress" style={{color: '#E30B5C'}}>Daily Progress</Link></MenuItem>
          <MenuItem style={{ backgroundColor: '#000000' }}><Link to="/scan" style={{color: '#E30B5C'}}>Scan Product</Link></MenuItem>
          </IconMenu>
        }/>
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
