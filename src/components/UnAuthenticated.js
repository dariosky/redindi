import React from 'react';
import {connect} from 'react-redux';
import injectStyles from 'react-jss';

const styles = {};

class UnAuthenticated extends React.Component {
  render() {
    const {classes} = this.props
    return <div>
      <p>So you're not logged in?</p>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  }
}

UnAuthenticated.propTypes = {};

// const mapStateToProps = {}

function mapDispatchToProps(dispatch) {
  return {
    actions: undefined,
  }
}

const styledUnAuthenticated = injectStyles(styles)(UnAuthenticated);

export default connect(
  null,
  mapDispatchToProps,
)(styledUnAuthenticated);
