import { Container } from '@material-ui/core';
import React, { Component } from 'react';

// importing images!
import doctor from '../../../assets/img/doctor.png';

class DoctorComponent extends Component{
    render() {
        return(
            <div id="doc" style = {{ backgroundColor: '#EEF3F3' }}>
                <Container>
                    <h1 className = "pt-4">
                        Doctors
                    </h1>
                    <div className = "row pt-3 pb-4 scrolling-wrapper flex-row flex-nowrap">
                        <div className = "col-md-6">
                            <div className="card mb-3" style= {{ maxWidth: '540px',borderRadius: '8px' }}>
                                <div className="row g-0">
                                    <div className="col-md-6" style = {{ paddingLeft: '10px',paddingTop: '10px', paddingBottom: '10px' }}>
                                        <img src= { doctor } className="img-fluid doc-img rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Srinivas Reddy</h5>
                                            <p className="card-text"><small class="text-muted">Senior Surgeon</small></p>
                                            <p className="card-text">30yrs Clinical Experience. Best Doctor Award 2020 People’s Choice Award International Council Award</p>
                                            <button className = "btn btn-primary">
                                                Check availability
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-6">
                            <div className="card mb-3" style= {{ maxWidth: '540px', borderRadius: '8px' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 doc" style = {{ paddingLeft: '10px',paddingTop: '10px', paddingBottom: '10px' }}>
                                        <img src= { doctor } className="img-fluid doc-img rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Srinivas Reddy</h5>
                                            <p className="card-text"><small class="text-muted">Senior Surgeon</small></p>
                                            <p className="card-text">30yrs Clinical Experience. Best Doctor Award 2020 People’s Choice Award International Council Award</p>
                                            <button className = "btn btn-primary">
                                                Check availability
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default DoctorComponent;