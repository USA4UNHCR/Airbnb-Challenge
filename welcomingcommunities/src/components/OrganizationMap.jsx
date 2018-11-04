import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
import InfoWindow from 'google-map-react';
import Marker from './Marker';

class OrganizationMap extends Component {

  constructor() {
    super();

    this.state = {
      center : {
        lat: 39,
        lng: -95
      },
      zoom : 4,
      markers : [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      showInfoIndex: null,
      windowPosition: null,
    };

    this.updateData = this.updateData.bind(this);
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
  }


  componentWillMount() {
   var csvFilePath = require("./../data/Voluntary-Agencies-geocode.csv");
   var Papa = require("papaparse/papaparse.min.js");
   Papa.parse(csvFilePath, {
     header: true,
     download: true,
     skipEmptyLines: true,
     complete: this.updateData
   });
 }

  updateData(result) {
    const data = result.data;
    this.setState({markers: data});
  }

  // onMarkerClick = (props, marker, e) => {
  //   console.log('clicked!');
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   })
  // }
  //
  // toggleInfoWindow = (loc) => {
  //   console.log(loc);
  //   // clicking 'x' in the info window will pass null, so if we detect that, reset the position in state
  //   if (loc === null || loc === undefined) {
  //     this.setState({ windowPosition: null })
  //     return
  //   }
  //   // otherwise get coords of clicked marker and set to state
  //   let markerLoc = { lat: loc.latitude, lng: loc.longitude }
  //   this.setState({ windowPosition: markerLoc })
  // }

  render() {
    if (this.state.showingInfoWindow) {
      console.log('clicked!');
    }
    return (
      <div>
        <center>
        <div style={{ height: '600px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA4JJnLtj6h1C1hd2DoOeGeKoK7erNDJXY'}}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
          {
            this.state.markers.map( (each) =>
              <Marker
                key={each.id}
                text={each['LOCAL AFFILIATE']}
                lat={each.latitude}
                lng={each.longitude}
                onClick={this.toggleInfoWindow}
              />
            )
          }
          </GoogleMapReact>
        </div>
        </center>
      </div>

    );
  }
}

export default OrganizationMap;
