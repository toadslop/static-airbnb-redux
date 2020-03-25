import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';
import Flat from './Flat';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
    // TODO dispatch an action to update the Redux State tree
  }

  render() {
    const style = {
      height: "100vh"
    };
    const { flats } = this.props;
    return (
      <div className="col-sm-7 flat-list" style={style}>
        {flats.map((flat) => { return <Flat flat={flat} key={flat.name} />; })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
