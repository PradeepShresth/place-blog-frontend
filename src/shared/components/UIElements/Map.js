import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicmVzaHJhcGRpcCIsImEiOiJja2E2bjR0NTgwOGpyMnJsNzMwbHR3YnB0In0.gBQ9gner0ZOWEsRSPYSPRQ';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: props.lng,
        lat: props.lat,
        zoom: 16
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
    }
    render () {
        return (
            <div className={`map ${this.props.className}`} style={this.props.style}>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}

export default Map;