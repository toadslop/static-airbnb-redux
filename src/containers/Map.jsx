/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 }
    const style = {
      height: "100vh"
    };
    const { selectedFlat } = this.props;

    if (selectedFlat) {
      marker = (
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50% '
          }}
          lat={selectedFlat.lat}
          lng={selectedFlat.lng}
        />
      );
      center = {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng
      };
    }
    console.log("marker");
    console.log(marker);
    return (
      <div className="col-sm-5" style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  }}
          center={center}
          defaultZoom={15}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(Map);
