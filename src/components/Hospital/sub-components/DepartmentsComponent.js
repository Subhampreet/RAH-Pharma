import React, { Component } from 'react';
import { Container } from '@material-ui/core';

// importing images!
import cardiology from '../../../assets/img/cardiology.png';
import beds from '../../../assets/img/beds.png';
import bloodgroup from '../../../assets/img/blood-group.png';
import ambulance from '../../../assets/img/ambulance-2.png';

class DepartmentsComponent extends Component {
    render() {
        return(
            <div style = {{ backgroundColor: '#FCFCFC' }}>
                <Container> 
                    <h1 className = "pt-4">
                        Departments
                    </h1>
                    <div className = "flex-row pt-4 pb-4">
                        {/* First row */}
                        <div className = "row mt-2">
                            <div className = "col-md-3">
                                <img src = { cardiology }/><span>Cardiology</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { beds }/><span>7000+ Beds</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { bloodgroup }/><span>Blood Banks</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { ambulance }/><span>Ambulance</span>
                            </div>
                        </div><br/>

                        {/* Second row */}
                        <div className = "row">
                            <div className = "col-md-3">
                                <img src = { cardiology }/><span>Cardiology</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { beds }/><span>7000+ Beds</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { bloodgroup }/><span>Blood Banks</span>
                            </div>
                            <div className = "col-md-3">
                                <img src = { ambulance }/><span>Ambulance</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default DepartmentsComponent;