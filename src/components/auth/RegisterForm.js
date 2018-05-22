import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import injectStyles from 'react-jss';
import * as authActions from '../../reducers/auth/authActions'
import {Form, Input} from 'semantic-ui-react'
import _ from 'lodash'
import {filterObject} from '../../utils/filterObject'

const styles = {};

class RegisterForm extends React.Component {
  state = {
    username: '', password: '', confirmPassword: '',
    errors: {},
  }

  submit = () => {
    const {username, password} = this.state
    if (this.validateForm()) {
      console.log('Form valid, register')
      this.props.actions.register(username, password)
    }
  }

  validateForm = () => {
    const {username, password, confirmPassword} = this.state
    const errors = {
      username: username.length < 5,
      password: password.length < 5 || password !== confirmPassword,
      confirmPassword: confirmPassword.length < 5 || password !== confirmPassword,
    }
    this.setState(
      {errors},
    )
    return _.isEmpty(
      filterObject(errors, (k, v) => v === true),
    )
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  render() {
    const {
      username, password, confirmPassword,
      errors,
    } = this.state
    return (
      <div>
        <p>Dindi is great!</p>
        <p>To track your personal finances however you have
          to define what does it mean "personal": creating an account.</p>
        <p>It's only matter of choosing a valid email and choose
          a strong password.</p>
        <Form onSubmit={this.submit}>
          <Form.Field id='form-input-control-username'
                      control={Input} label='User'
                      autoComplete="username"
                      required
                      value={username}
                      name='username'
                      error={!!errors.username}
                      onChange={this.handleChange}
                      placeholder='Your email'/>
          <Form.Field id='new-password'
                      required
                      name='password'
                      control={Input}
                      value={password}
                      type="password"
                      error={
                        !!((password && confirmPassword && (password !== confirmPassword))
                          || errors.password)}
                      autoComplete="new-password"
                      onChange={this.handleChange}
                      label='Password'
                      placeholder='Choose a new password'/>

          <Form.Field id='confirm-password'
                      required
                      name='confirmPassword'
                      control={Input}
                      error={!!((password && confirmPassword && (password !== confirmPassword))
                        || errors.confirmPassword)}
                      value={confirmPassword}
                      type="password"
                      autoComplete="confirm-password"
                      onChange={this.handleChange}
                      label='Confirm Password'
                      placeholder='Repeat your password'/>
          <Form.Button content='Register'/>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const errors = state.auth.errors || {}
  return {
    errors: errors.register,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

const styledLoginForm = injectStyles(styles)(RegisterForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledLoginForm);
