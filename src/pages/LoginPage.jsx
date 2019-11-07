import React from 'react';
import connect from "react-redux/lib/connect/connect";
import {logIn} from "actions/apiActions";

export class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameInputValue: '',
      passwordInputValue: '',
    }
  }

  render() {
    const {onLogin} = this.props;
    const {usernameInputValue, passwordInputValue} = this.state;
    return (
      <div>
        <input
          className="login-page_username-input"
          value={usernameInputValue}
          onChange={event => this.setState({usernameInputValue: event.target.value})}
        />
        <input
          className="login-page_password-input"
          value={passwordInputValue}
          onChange={event => this.setState({passwordInputValue: event.target.value})}
        />
        <button
          className="login-page_button"
          onClick={() => onLogin({username: usernameInputValue, password: passwordInputValue})}
        >
          Log in
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: payload => {
    dispatch(logIn(payload))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)