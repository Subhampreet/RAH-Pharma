import React, { Component } from 'react';
import banner from '../../../assets/img/banner.png';
import "../styles.css";
import Typography from '@material-ui/core/Typography';
import search from '../../../assets/img/Group 7289.png';


class SearchBar extends Component{
    render(){
        return(
            <>
            <header>
            <div className = "head-text">
                <a className="banner" href="#">
                            <img src = { banner } alt = { banner } style = {{ width: '100%' }}/>
                </a>
                <div>
                <Typography class="text-on-image" gutterBottom variant="h5" component="h5"> Help us Redefine Emergency aid<br/>and healthcare, with RAH
                <a class="search" href="#">
                            <img src = { search } alt = { search } style = {{ width: '100%',top: '100px',left:'30px' }}/>
                </a>
                </Typography>
                </div>
            </div>
            </header>
            </>
        )
    }
}
export default SearchBar;