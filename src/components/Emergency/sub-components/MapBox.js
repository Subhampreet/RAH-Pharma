import React, { Component } from 'react';
import Rectangle from '../../../assets/img/Rectangle.png';

function MapBox() {
    return (
        <div className="MapBox">
            <div className="container">
                <div className="left">
                    <img src={ Rectangle } alt = { Rectangle } />
                </div>

                <div className="right">
                    <h2>Services near you</h2>
                    <div className="body">
                        <div className="mapbox-item-main">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// class MapBox extends Component{
//     render() {
//         return(
//             <div className = "row">
//                 <div className = "col-md-6">
//                     <img src = { Rectangle } alt = { Rectangle } className = "img-fluid" style = {{ paddingLeft: '60px', paddingTop: '40px', margin: '40px', width: '504px', height: '495px'}}/>
//                 </div>
//                 <div className = "col-md-6" style = {{ paddingTop: '60px',paddingBottom: '60px'  }}>
//                 <h2 style = {{ paddingTop: '60px', paddingLeft: '20px' }}><b>Services near you</b></h2>
//                     <div className = "card" style = {{ width: '70%', marginLeft: '30px' }}>
                        
//                         <form style = {{ paddingLeft: '20px', paddingBottom: '20px' }}>
//                             <div className = "mb-3">
//                                 <input type = "text" className = "form-control" placeholder = "Location | Search Our Area"/>
//                             </div>
//                             <div className = "mb-3">
//                                 <input type = "text" className = "form-control" placeholder = "Search | Clinics, Doctors, hospitals etc."/>
//                             </div>
//                             <button type = "submit" className = "btn landing-btn ">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default MapBox;