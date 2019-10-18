import React from 'react';
import LoginPage from "./LoginPage";
import SheepManagementPage from "./SheepManagementPage";
import connect from "react-redux/lib/connect/connect";

export const App = props => {
  const {loggedIn} = props;
  return (
    <div className="App">
      {loggedIn
        ? <SheepManagementPage id="sheep-management-page" />
        : <LoginPage id="login-page" />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.ui.loggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(App)

