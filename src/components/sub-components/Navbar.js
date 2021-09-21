import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../assets/img/logo.png';
import "./style.css";

const NavBar = () => {
    return(
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-white" >
<img style={{height:"50px", width:"130px",alignSelf:'center',marginLeft:'125px'}} src={logo} alt='logo' />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" style={{marginLeft:'100px'}}>
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Hospitals</a>
      <a class="nav-link" style={{fontSize:'10px',marginTop:'-12px'}}>Nearby Hospitals</a>
      </li>
      <li class="nav-item" style={{marginLeft:'10px'}}>
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Consultance</a> 
      <a class="nav-link" href="#" style={{fontSize:'10px',marginTop:'-12px'}}>Consult Doctors</a>
      </li>
      <li class="nav-item" style={{marginLeft:'10px'}}>
     
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Blood Banks</a> 
      <a class="nav-link" href="#" style={{fontSize:'10px',marginTop:'-12px'}}>Support the needy</a>
    
      </li>
      <li class="nav-item" style={{marginLeft:'10px'}}>
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Diagnostics</a> 
      <a class="nav-link" href="#" style={{fontSize:'10px',marginTop:'-12px'}}>Book and Checkup</a>
      </li>
      <li class="nav-item" style={{marginLeft:'10px'}}>
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Ambulance</a> 
      <a class="nav-link" href="#" style={{fontSize:'10px',marginTop:'-12px'}}>One Dial Service</a>
      </li>
      <li class="nav-item" style={{marginLeft:'10px'}}>
      <a class="nav-link" href="#" style={{fontWeight:'bold',fontSize:'12px'}}>Emergency</a> 
      <a class="nav-link" href="#" style={{fontSize:'10px',marginTop:'-12px'}}>At your Service</a>
      </li>
      
    </ul>
    <SearchIcon
    
        style={{
          alignSelf: 'center',
          color:"black"
        ,marginRight:'35px',
    marginLeft:'220px'}}
        />
    <button type="button" class="btn btn-dark">Login / SignUp</button>
    
  </div>
</nav>

       

        </>
    )
}

export default NavBar;

