import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Navbar, Login, Signup, UserHome, SingleChart, Frontpage } from './components'
import {me} from './store'
import DailyProgress  from './components/DailyProgress';
import { BarcodeFood } from './components/BarcodeFood';
import BottomNav from './components/BottomNav';
import BubbleChart from './components/bubble/BubbleChart';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
          <div>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {/*
                isLoggedIn &&
                  <Switch>
                    { Routes placed here are only available after logging in }
                    <Route path="/home" component={UserHome} />
                  </Switch>
              */}
              {/* Displays our Login component as a fallback */}
              <Route path="/bubble-chart" component={BubbleChart} />
              <Route path="/daily-progress" component={DailyProgress} />
              <Route exact path='/' component={Frontpage} />
              <Route exact path='/scan' component={BarcodeFood} />
              {/*<Route component={Login} />*/}
            </Switch>
          </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
