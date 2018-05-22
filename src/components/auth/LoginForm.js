import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';
import * as authActions from '../../reducers/auth/authActions'
import {Form, Input} from 'semantic-ui-react'

const styles = {};

class LoginForm extends React.Component {
  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return (
      <div>
        <p>So you have a Dindi account, great!</p>
        <p>Insert your credential to access your data:</p>
        <Form>
          <Form.Field id='form-input-control-first-name'
                      control={Input} label='User'
                      placeholder='Your email'/>
          <Form.Field id='form-input-control-last-name'
                      control={Input}
                      type="password"
                      autoComplete="password"
                      label='Password'
                      placeholder='Password'/>
        </Form>
      </div>
    );
  }

}

LoginForm.propTypes = {
  username: PropTypes.string,
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

const styledLoginForm = injectStyles(styles)(LoginForm);

export default connect(
  null,
  mapDispatchToProps,
)(styledLoginForm);
