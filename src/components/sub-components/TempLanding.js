import React, { Component } from 'react';
import Hero from '../../assets/img/hero.png'; 
import './style.css';

class TempLanding extends Component{
    render() {
        return(
            <div className = "row">
                <div className = "col-md-6">
                    <img src = { Hero } alt = { Hero } className = "img-fluid"/>
                </div>
                <div className = "col-md-6" style = {{ paddingTop: '60px' }}>
                    <div className = "card" style = {{ width: '70%', marginLeft: '30px' }}>
                        <h2 style = {{ paddingTop: '60px', paddingLeft: '20px' }}><b>All round healthcare information for everyone</b></h2>
                        <p className = "text-muted" style = {{ paddingLeft: '20px' }}>
                            With the use of digital diagnostic equipments and systems we provide international<br/>standard emergency and multidisciplinary comprehensive care
                        </p>
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

export default TempLanding;