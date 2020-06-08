
/* global document */
import * as React from 'react';
import {Component} from 'react';
import MapGL from 'react-map-gl';



const MAPBOX_TOKEN = 'pk.eyJ1IjoieXVuZ2lsZG9uZyIsImEiOiJjazdibHh2cG0wMzBlM2ZwOWppMXJ1cXFhIn0.Q-AQlltldjnf3yd1mdDXrA'; // Set your mapbox token here
const mapurl1 = 'http://localhost:8001/styles/klokantech-basic/style.json';
const mapurl2 = 'http://localhost:8001/styles/dark-matter/style.json';
//const mapurl ='mapbox://styles/mapbox/dark-v9';
class M_map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.5,
        longitude: 126.8,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="100%"
        height="100%"
        mapStyle={mapurl2}
        onViewportChange={viewport => this.setState({viewport})}
      />
    );
  }
}

export default M_map;