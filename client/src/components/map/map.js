import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    render() {
        const GoogleMapComponent = withGoogleMap(props => (
            <GoogleMap
                defaultZoom = {13}
                center ={{lat: 37.338207, lng: -121.886330}}
                >
                </GoogleMap>
            
        ));
        return(
            <div>
                <GoogleMapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    containerElement={ <div style={{height: '50vh', width:'30vw', marginLeft: '20px'}} />}
                    mapElement={<div style={{height:'100%'}}/>}
                    />
            </div>
        );
    }
};

export default Map;