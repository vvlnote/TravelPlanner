import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  Map  from '../components/map/map';
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng
} from 'react-places-autocomplete';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Alert
} from 'reactstrap';

class TestPage extends Component {
    state = {
        address: '',
        lat: null,
        lng: null
    }

    onChange = (value) => {
        this.setState({
            ...this.state,
            address: value
        })
    }
    
    onHandleSelect = (address) => {
        this.setState({
            ...this.state,
            address: address
        })
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            this.setState({
                ...this.state,
                lat: latLng.lat,
                lng: latLng.lng
            })
        })

    }
    render() {
        return (
            <div>
                <h1>Welcome to Map Test page</h1>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.onChange}
                    onSelect={this.onHandleSelecct}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <Label>Latitude: {this.state.lat}</Label>
                        <br/>
                        <Label>Longitude: {this.state.lng}</Label>
                        <br/>

                        <Input {...getInputProps({
                            placeholder: "Type a place or address ...",
                        })} />

                    <div>
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active? "#fff591" : "#fff"
                            };
                            return (<div {...getSuggestionItemProps(suggestion, {style})}> 
                                {suggestion.description} 
                                </div>
                                );
                        })}
                    </div>
                </div>
                )}    
                </PlacesAutocomplete>
                <Map lat={0} lng={0}/>
            </div>
        );
    }
}

export default TestPage;