import React from 'react';
import connect from "react-redux/lib/connect/connect";
import {getSheep} from "../actions/apiActions";

export class SheepManagementPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.getSheepTimer = setInterval(() => this.props.onGetSheep({username: this.props.username}), 10000);
  }

  componentWillUnmount() {
    this.getSheepTimer = null;
  }

  render() {
    const {name, happiness} = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Happiness: {happiness}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.sheep.name,
  happiness: state.sheep.happiness,
  username: state.ui.username,
});

const mapDispatchToProps = dispatch => ({
  onGetSheep: payload => {
    dispatch(getSheep(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheepManagementPage)