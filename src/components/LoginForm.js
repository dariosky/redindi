import React from 'react';
import {connect} from 'react-redux';
import injectStyles from 'react-jss';

const styles = {};

class LoginForm extends React.Component {

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
    console.log("Query login")
  }

  componentWillReceiveProps(newProps) {
  }

  render() {
    const {classes} = this.props
    return (
      <div>

      </div>
    );
  }

}


function mapStateToProps({}) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: undefined,
  }
}

const styledLoginForm = injectStyles(styles)(LoginForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledLoginForm);
