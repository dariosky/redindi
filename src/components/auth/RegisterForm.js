import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import injectStyles from 'react-jss';
import * as authActions from '../../reducers/auth/authActions'
import {Form, Input} from 'semantic-ui-react'

const styles = {};

class RegisterForm extends React.Component {
  state = {username: '', password: '', confirmPassword: ''}
  submit = () => {

  }
  handleChange = (e, {name, value}) => {
    console.log(name, value)
    this.setState({[name]: value})
  }

  render() {
    const {username, password, confirmPassword} = this.state
    return (
      <div>
        <p>Dindi is great!</p>
        <p>To track your personal finances however you have
          to define "personal", creating an account.</p>
        <p>It's only matter of choosing a valid email and choose
          a strong password</p>
        <Form onSubmit={this.submit}>
          <Form.Field id='form-input-control-username'
                      control={Input} label='User'
                      value={username}
                      onChange={this.handleChange}
                      placeholder='Your email'/>
          <Form.Field id='form-input-control-password'
                      control={Input}
                      value={password}
                      type="password"
                      autoComplete="new-password"
                      onChange={this.handleChange}
                      label='Password'
                      placeholder='Choose a new password'/>

          <Form.Field id='form-input-control-password'
                      control={Input}
                      value={confirmPassword}
                      type="password"
                      autoComplete="confirm-password"
                      onChange={this.handleChange}
                      label='Confirm'
                      placeholder='Repeat your password'/>
        </Form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

const styledLoginForm = injectStyles(styles)(RegisterForm);

export default connect(
  null,
  mapDispatchToProps,
)(styledLoginForm);
