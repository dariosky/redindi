import React from 'react';
import {connect} from 'react-redux';
import injectStyles from 'react-jss';
import {Tab} from 'semantic-ui-react'
import LoginForm from './auth/LoginForm'
import RegisterForm from './auth/RegisterForm'

const styles = {};

class UnAuthenticated extends React.Component {
  render() {
    const panes = [
      {menuItem: 'Login', render: () => <Tab.Pane><LoginForm/></Tab.Pane>},
      {menuItem: 'Signup', render: () => <Tab.Pane><RegisterForm/></Tab.Pane>}
    ]
    return <Tab panes={panes} defaultActiveIndex={0}/>
  }
}

UnAuthenticated.propTypes = {};

// const mapStateToProps = {}

function mapDispatchToProps(dispatch) {
  return {
    actions: undefined
  }
}

const styledUnAuthenticated = injectStyles(styles)(UnAuthenticated);

export default connect(
  null,
  mapDispatchToProps
)(styledUnAuthenticated);
