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
        address: ''
    }

    onChange = (address) => {
        this.setState({
            address
        })
    }
    
    onHandleSelect = (e) => {
        e.preventDefault();

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
                        <Input {...getInputProps({
                            placeholder: "Type a place...",
                        })} />

                    <div>
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active? "#41b6e6" : "#fff"
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