import React, { Component } from 'react';
import { Container } from '@material-ui/core';

class FacilitiesComponent extends Component{
    render() {
        return(
            <Container style = {{ marginTop: '70px' }}>
                <h1>
                    Facilities
                </h1>
                <div className = "row" style = {{ paddingTop: '30px' }}>
                    <div className = "col-md-3">
                        <h6>
                            HYGIENE
                        </h6>
                        <ul>
                            <li>General ward bed - Rs 500/day</li>
                            <li>ICU bed - RS 1000/day</li>
                            <li>All blood types available</li>
                            <li>24x7 blood donation service</li>
                            <li>Organ storage for transplantation</li>
                        </ul>
                    </div>
                    <div className = "col-md-3">
                        <h6>
                            TRANSPORT
                        </h6>
                        <ul>
                            <li>All blood types available</li>
                            <li>24x7 blood donation service</li>
                            <li>Organ storage for transplantation</li>
                            <li>Quick and easy purchase</li>
                            <li>24x7 pharmacy service</li>
                        </ul>
                    </div>
                    <div className = "col-md-3">
                        <h6>
                            OPD SERVICES
                        </h6>
                        <ul>
                            <li>All blood types available</li>
                            <li>24x7 blood donation service</li>
                            <li>Organ storage for transplantation</li>
                            <li>Quick and easy purchase</li>
                            <li>24x7 pharmacy service</li>
                        </ul>
                    </div>
                    <div className = "col-md-3">
                        <h6>
                            OTHER FACILITIES
                        </h6>
                        <ul>
                            <li>All blood types available</li>
                            <li>24x7 blood donation service</li>
                            <li>Organ storage for transplantation</li>
                            <li>Quick and easy purchase</li>
                            <li>24x7 pharmacy service</li>
                        </ul>
                    </div>
                </div>
            </Container>
        );
    }
}

export default FacilitiesComponent;