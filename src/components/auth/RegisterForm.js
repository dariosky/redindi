import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import injectStyles from 'react-jss';
import * as authActions from '../../reducers/auth/authActions'
import {Form, Input, Message} from 'semantic-ui-react'
import _ from 'lodash'
import {filterObject} from '../../utils/filterObject'

const styles = {};

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: '', confirmPassword: '',
    errors: {}
  }

  static getDerivedStateFromProps(props, state) {
    return {
      errors: {
        ...props.errors,
        ...state.errors,
      }
    }
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
    const errorRules = {
      username: [
        username.length < 5 && 'Choose a longer username (min 5 chars)',
        !username.includes('@') && 'Type a valid email address'
      ],
      password: [
        password.length < 5 && 'Choose a longer password (min 5 chars)',
        password !== confirmPassword && 'Password and confirm don\'t match'],
      confirmPassword: [
        confirmPassword.length === 0 && 'Please retype your password'
      ]
    }
    console.log('rules', errorRules)
    // get only the errors
    const errors = filterObject(errorRules,
      (name, errors) => (errors.filter(item => item !== false)).length)
    console.info(errors)
    this.setState({errors})
    return _.isEmpty(errors)
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: null
      }
    })
  }

  render() {
    const {
      username, password, confirmPassword,
      errors
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
                      control={Input} label='Username'
                      autoComplete="username"
                      required
                      type='email'
                      value={username}
                      name='username'
                      error={(username && username.length < 5) ||
                      !!errors.username}
                      onChange={this.handleChange}
                      placeholder='Your email address'/>
          {errors.username && <Message
            error
            size="tiny"
            visible
            list={errors.username}
          />}
          <Form.Field id='new-password'
                      required
                      name='password'
                      control={Input}
                      value={password}
                      type="password"
                      error={
                        !!((password && confirmPassword && (password !== confirmPassword))
                          || !!errors.password)}
                      autoComplete="new-password"
                      onChange={this.handleChange}
                      label='Password'
                      placeholder='Choose a new password'/>
          {errors.password && <Message
            error
            size="tiny"
            visible
            list={errors.password}
          />}
          <Form.Field id='confirm-password'
                      required
                      name='confirmPassword'
                      control={Input}
                      error={!!((password && confirmPassword && (password !== confirmPassword))
                        || !!errors.confirmPassword)}
                      value={confirmPassword}
                      type="password"
                      autoComplete="new-password"
                      onChange={this.handleChange}
                      label='Confirm Password'
                      placeholder='Repeat your password'/>
          {errors.confirmPassword && <Message
            error
            size="tiny"
            visible
            list={errors.confirmPassword}
          />}
          <Form.Button content='Register'/>
          {errors.form && <Message
            error
            size="tiny"
            visible
            list={errors.form}
          />}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.auth.register || {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

const styledLoginForm = injectStyles(styles)(RegisterForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledLoginForm);
