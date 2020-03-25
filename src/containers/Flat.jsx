/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Flat extends Component {
  render() {
    const { flat } = this.props;
    return (
      <div className="card-trip">
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
