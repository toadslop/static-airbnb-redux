/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from "../actions";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    let classes = "card-trip";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }
    const { flat } = this.props;
    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={flat.imageUrl} alt="flat" />
        <div className="card-trip-infos">
          <div>
            <h2>{flat.name}</h2>
            <p>Short description here!</p>
          </div>
          <h2 className="card-trip-pricing">
            {flat.price}
            {flat.priceCurrency}
          </h2>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
