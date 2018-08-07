import React from 'react';
import {connect} from 'react-redux';
import injectStyles from 'react-jss';
import * as authActions from '../../reducers/auth/authActions'
import {bindActionCreators} from 'redux'
import Loader from 'react-loader'

const styles = {};

class AuthChecker extends React.Component {

  componentDidMount() {
    this.props.actions.authCheck()
  }

  handleLogout = () => {
    const {auth} = this.props
    this.props.actions.logout(auth.user.access_token)
  }

  render() {
    // const {classes} = this.props
    const {auth, UnAuthenticated} = this.props
    if (auth.user === null) return <Loader/>
    if (auth.user === false) return <UnAuthenticated/>
    return <div>
      You're logged in as {auth.user.username} - <button onClick={this.handleLogout}>Logout</button>
      {this.props.children}
    </div>;
  }
}

function mapStateToProps({auth}) {
  return {
    auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}


const styledLoginForm = injectStyles(styles)(AuthChecker);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledLoginForm);
