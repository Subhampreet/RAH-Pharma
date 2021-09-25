import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png';
import SearchIcon from '@material-ui/icons/Search';

class NavView extends Component{
    render() {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src = { logo } alt = { logo } style = {{ width: '60px' }}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active" style={{marginLeft:'100px'}}>
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Hospitals</a>
                                </li>
                                <li class="nav-item" style={{marginLeft:'10px'}}>
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Consultance</a> 
                                </li>
                                <li class="nav-item" style={{marginLeft:'10px'}}>
                                
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Blood Banks</a> 
                                
                                </li>
                                <li class="nav-item" style={{marginLeft:'10px'}}>
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Diagnostics</a> 
                                </li>
                                <li class="nav-item" style={{marginLeft:'10px'}}>
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Ambulance</a> 
                                </li>
                                <li class="nav-item" style={{marginLeft:'10px'}}>
                                <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'14px'}}>Emergency</a> 
                                </li>

                            </ul>
                            <form className="d-flex">
                            <SearchIcon
    
    style={{
      alignSelf: 'center',
      color:"black"
    ,marginRight:'35px',
marginLeft:'220px'}}
    />
                                <button className="btn btn-dark" type="submit">Login/Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavView;