import React, { Component } from 'react';
import banner from '../../../assets/img/banner.png';
import "../styles.css";
import Typography from '@material-ui/core/Typography';
import search from '../../../assets/img/Group 7289.png';


function SearchBar() {
    return (
        <div className="SearchBar">
            <img src={banner} alt = { banner } style = {{ width: '100%' }} />
            <diV className="body">
                <h1> Help us Redefine Emergency aid<br/>and healthcare, with RAH</h1>

                <div className="search-body">
                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-button">
                        <h4>Search</h4>
                        <img />
                    </div>
                </div>


                <h2>Get Ambulance according to your preferred location</h2>
            </diV>
        </div>
    )
}
export default SearchBar;