import React, { Component } from 'react'
import { TextField, Grid,  } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';

export default class RatingInformation extends Component {
    // State declarations
    state = {
        first_name: "John",
        last_name: "Doe",
        address: {
            line_1: "123 Drive",
            line_2: "3B",
            city: "San Francisco",
            region: "CA",
            postal: 94422,
        }
    }

    // Update state
    handleOnChange = (label, value) => {
        console.log(this.props.parentErrors)
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
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <h5>Rating Information</h5>
                    {/* FIRST NAME */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-with-icon-grid" 
                                label="First Name" 
                                onChange={(e) => this.handleOnChange("first_name", e.target.value)}
                                onBlur={(e) => this.handleOnBlur("first_name", e.target.value.trim())}
                                value={this.state.first_name}
                            />
                        </Grid>
                    </Grid>

                    {/* LAST NAME */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-with-icon-grid" 
                                label="Last Name"
                                onChange={(e) => this.handleOnChange( "last_name", e.target.value)}
                                onBlur={(e) => this.handleOnBlur("last_name", e.target.value.trim())} 
                                value={this.state.last_name}
                            />
                        </Grid>
                    </Grid>
                </div>
                
                <div>
                    <h5>Address</h5>
                    {/* LINE_1 */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField 
                                required
                                id="input-with-icon-grid"
                                label="Line 1" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "line_1": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "line_1": e.target.value.trim()})} 
                                value={this.state.address && this.state.address.line_1}/>
                        </Grid>
                    </Grid>

                    {/* LINE_2 */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="input-with-icon-grid" 
                                label="Line 2" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "line_2": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "line_2": e.target.value.trim()})}
                                value={this.state.address && this.state.address.line_2}
                            />
                        </Grid>
                    </Grid>

                    {/* CITY */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-with-icon-grid" 
                                label="City" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "city": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "city": e.target.value.trim()})} 
                                value={this.state.address && this.state.address.city}
                            />
                        </Grid>
                    </Grid>

                    {/* REGION */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-with-icon-grid" 
                                label="Region" 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "region": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "region": e.target.value.trim()})}
                                value={this.state.address && this.state.address.region}
                            />
                        </Grid>
                    </Grid>

                    {/* POSTAL */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="input-with-icon-grid" 
                                type="number" 
                                label="Postal" 
                                helperText={this.props.parentErrors.address !== undefined && this.props.parentErrors.address.postal !== undefined ? "Invalid Postal" : null}
                                error={this.props.parentErrors.address !== undefined && this.props.parentErrors.address.postal !== undefined} 
                                onChange={(e) => this.handleOnChange("address", {...this.state.address, "postal": e.target.value})}
                                onBlur={(e) => this.handleOnChange("address", {...this.state.address, "postal": e.target.value.trim()})}
                                value={this.state.address && this.state.address.postal}
                            />
                        </Grid>
                    </Grid>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

