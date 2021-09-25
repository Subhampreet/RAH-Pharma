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

export default MapBox;