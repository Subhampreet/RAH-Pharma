import React, { Component } from 'react';
import { Container } from '@material-ui/core';

// CSS!
import '../../../assets/css/hospital.css';

// Images!
import aiims from '../../../assets/img/aiims.png';
import aiims1 from '../../../assets/img/aiims1.png';
import aiims2 from '../../../assets/img/aiims2.png';
import aiims3 from '../../../assets/img/aiims3.png';
import aiims4 from '../../../assets/img/aiims4.png';

class DetailsComponent extends Component{
    render() {
        return(
            <Container className = "mt-2">
                <div className = "row">
                    <div className = "col-md-6">
                        <img src = { aiims } className = "main-img"/>
                        <div className = "flex-row mt-3 mb-3">
                            <img src = { aiims1 }/>
                            <img src = { aiims2 } style = {{ marginLeft: '5px' }}/>
                            <img src = { aiims3 } style = {{ marginLeft: '5px' }}/>
                            <img src = { aiims4 } className = "third-img" style = {{ marginLeft: '5px' }}/>
                        </div>
                    </div>
                    <div className = "col-md-6">
                        <h1>
                            AIIMS Hospital
                        </h1>
                        <div className = "flex-row">
                            <button type = "submit" className = "btn contact">Contact Us</button>
                            <button type = "submit" className = "btn mail">Mail us at</button>
                        </div>
                        <div className = "list mt-3">
                            <ul>
                                <li>
                                    ICUs and OPDs 24x7
                                </li>
                                <li>
                                    COVID-19 testing available
                                </li>
                                <li>
                                    Speciality in Neurology, Orthopedics.
                                </li>
                            </ul>
                            <h6>Location</h6>
 <iframe width="563" height="114" id="gmap_canvas" style={{borderRadius:'20px'}}
 src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
 frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default DetailsComponent;