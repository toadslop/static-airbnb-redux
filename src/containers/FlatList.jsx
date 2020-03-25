import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';
import Flat from './Flat';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      name: "Charm at the Steps of Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      price: 164,
      priceCurrency: "EUR"
    }]
  }

  componentWillMount() {
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

export default connect()(FlatList);
