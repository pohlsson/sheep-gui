import React from 'react';
import connect from "react-redux/lib/connect/connect";

export class SheepManagementPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {name, happiness} = this.props;
    return (
      <div>
        <p>Name: {name}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.sheep.name,
  happiness: state.sheep.happiness,
});

export default connect(
  mapStateToProps,
  null
)(SheepManagementPage)