import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { HomeTwoTone, AccountCircleTwoTone } from '@material-ui/icons';
import rocket from '../../media/rocket.jpg'
import './RatingInformation.css'

import { LoadingOverlay, Loader } from 'react-overlay-loader'
import 'react-overlay-loader/styles.css'


export default class RatingInformation extends Component {
    // State declarations
    state = {
        // first_name: "John",
        // last_name: "Doe",
        // address: {
        //     line_1: "123 Drive",
        //     line_2: "3B",
        //     city: "San Francisco",
        //     region: "CA",
        //     postal: "94422",
        // }

        first_name: "",
        last_name: "",
        address: {
            line_1: "",
            line_2: "",
            city: "",
            region: "",
            postal: "",
        }
    }

    // Update state
    handleOnChange = (label, value) => {
        this.setState({[label]: value})
    }

    // Remove extra spaces (beginning & end)
    handleOnBlur = (label, value) => {
        this.setState({[label]: value.trim()})
    }

    // Sends state values to parent
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.parentHandleSubmit(this.state)
    } 

    render(){
        return (
            <LoadingOverlay>
                {/* LOADING SPINNER */}
                <Loader loading={this.props.load} />
                <div id="ratingInformationCard">
                    {/* IMAGE */}
                    <img src={rocket} alt="Rocket"/>

                    {/* FORM */}
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="ratingInformation">
                            <div id="ratingInformationTitle"><AccountCircleTwoTone fontSize="large"/><span>Rating Information</span></div>

                            {/* <h4>Rating Information</h4> */}
                            {/* FIRST NAME */}
                            <TextField
                                required
                                label="First Name" 
                                onChange={(e) => this.handleOnChange("first_name", e.target.value)}
                                onBlur={(e) => this.handleOnBlur("first_name", e.target.value.trim())}
                                value={this.state.first_name}
                            />

                            {/* LAST NAME */}
                            <TextField
                                required
                                label="Last Name"
                                onChange={(e) => this.handleOnChange( "last_name", e.target.value)}
                                onBlur={(e) => this.handleOnBlur("last_name", e.target.value.trim())} 
                                value={this.state.last_name}
                            />
                        </div>
                                
                        {/* ADDRESS INFORMATION */}
                        <div className="addressInformation">
                            <div id="addressTitle"><HomeTwoTone fontSize="large"/><span>Address</span></div>
                            {/* LINE_1 */}
                            
                            <TextField 
                                required
                                label="Line 1" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "line_1": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "line_1": e.target.value.trim()})} 
                                value={this.state.address && this.state.address.line_1}/>
                                

                            {/* LINE_2 */}
                            <TextField
                                label="Line 2" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "line_2": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "line_2": e.target.value.trim()})}
                                value={this.state.address && this.state.address.line_2}
                            />
                            

                            {/* CITY */}
                            <TextField
                                required 
                                label="City" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "city": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "city": e.target.value.trim()})} 
                                value={this.state.address && this.state.address.city}
                            />
                            
                            {/* REGION */}
                            
                            <TextField
                                required
                                label="Region" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "region": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "region": e.target.value.trim()})}
                                value={this.state.address && this.state.address.region}
                            />
                                

                            {/* POSTAL */}
                            <TextField
                                required
                                type="number" 
                                label="Postal" 
                                helperText={this.props.parentErrors.address !== undefined && this.props.parentErrors.address.postal !== undefined ? "Invalid Postal" : null}
                                error={this.props.parentErrors.address !== undefined && this.props.parentErrors.address.postal !== undefined} 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "postal": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "postal": e.target.value.trim()})}
                                value={this.state.address && this.state.address.postal}
                            /> 
                        </div>

                        <br/>

                        {/* SUBMIT BUTTON */}
                        <div id="submitQuoteButton">
                            <Button 
                                variant="outlined" 
                                type="submit"
                                size="large"
                                color="primary"
                            >Get a quote</Button>
                        </div>
                    </form>
                </div>
            </LoadingOverlay>
        )
    }
}

