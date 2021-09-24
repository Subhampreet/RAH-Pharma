import React, { Component } from 'react';
import Rectangle from '../../../assets/img/Rectangle.png';

class MapBox extends Component{
    render() {
        return(
            <div className = "row">
                <div className = "col-md-6">
                    <img src = { Rectangle } alt = { Rectangle } className = "img-fluid" style = {{ paddingLeft: '60px', paddingTop: '40px', margin: '40px', width: '504px', height: '495px'}}/>
                </div>
                <div className = "col-md-6" style = {{ paddingTop: '60px',paddingBottom: '60px'  }}>
                <h2 style = {{ paddingTop: '60px', paddingLeft: '20px' }}><b>Services near you</b></h2>
                    <div className = "card" style = {{ width: '70%', marginLeft: '30px' }}>
                        
                        <form style = {{ paddingLeft: '20px', paddingBottom: '20px' }}>
                            <div className = "mb-3">
                                <input type = "text" className = "form-control" placeholder = "Location | Search Our Area"/>
                            </div>
                            <div className = "mb-3">
                                <input type = "text" className = "form-control" placeholder = "Search | Clinics, Doctors, hospitals etc."/>
                            </div>
                            <button type = "submit" className = "btn landing-btn ">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapBox;