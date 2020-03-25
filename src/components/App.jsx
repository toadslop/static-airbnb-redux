/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FlatList from '../containers/FlatList';
import Map from '../containers/Map';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <FlatList />
        <Map />
      </div>
    )
  }
}
