import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';
import * as authActions from '../../reducers/auth/authActions'
import {Form, Input} from 'semantic-ui-react'

const styles = {};

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }


  submit = () => {
    const {username, password} = this.state
    console.log('Form valid, login')
    this.props.actions.login(username, password)
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <p>So you have a Dindi account, excellent!</p>
        <p>Insert your credential to access your data:</p>
        <Form onSubmit={this.submit}>
          <Form.Field id='form-input-control-first-name'
                      control={Input} label='User'
                      required
                      name='username'
                      value={username}
                      onChange={this.handleChange}
                      placeholder='Your username'/>
          <Form.Field id='form-input-control-last-name'
                      control={Input}
                      type="password"
                      required
                      name='password'
                      value={password}
                      onChange={this.handleChange}
                      autoComplete="password"
                      label='Password'
                      placeholder='Password'/>
          <Form.Button content='Login'/>
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
