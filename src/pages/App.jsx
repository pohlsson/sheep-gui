import React from 'react';
import LoginPage from "./LoginPage";
import SheepManagementPage from "./SheepManagementPage";
import connect from "react-redux/lib/connect/connect";
import {getSheep} from "../actions/apiActions";

export class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {loggedIn} = this.props;
    return (
      <div className="App">
        {loggedIn
          ? <SheepManagementPage id="sheep-management-page" />
          : <LoginPage id="login-page" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.ui.loggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(App)

