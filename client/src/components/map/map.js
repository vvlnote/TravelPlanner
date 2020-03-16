import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


class Map extends Component {
    render() {
        let lat = this.props.lat;
        let lng = this.props.lng;

        const GoogleMapComponent = withGoogleMap(props => (
            <GoogleMap
                defaultZoom = {13}
                center ={{lat: lat, lng: lng}}
                >
                <Marker position={{lat: lat, lng: lng}} />
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