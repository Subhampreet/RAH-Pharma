import { Container, styled } from '@material-ui/core';
import React from 'react';
import "./style.css";
import logo from '../../assets/img/logo.png';
import Cardiology from '../../assets/img/cardio.png';
import Odontology from '../../assets/img/Odontology.png';
import Gynaecology from '../../assets/img/Gynaecology.png';
import Pulmology from '../../assets/img/Pulmology.png';
import Paediatric from '../../assets/img/Paediatric.png';
import Dermatology from '../../assets/img/Dermatology.png';
import Neurology from '../../assets/img/Neurology.png';

import Grid from '@material-ui/core/Grid';



const Department = () => {
    return(
        <>
<div class="container-fluid text-center">
<h1 className='text-center' style={{fontWeight:'bold',alignSelf:'center',fontSize:'24px',alignItems:'center',alignContent:'center',padding:'10px',marginTop:'20px',fontWeight:'600'}}>Choose Your Department</h1>

  <div class="row scrolling-wrapper flex-row flex-nowrap" style={{alignSelf:'center'}}>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Cardiology } alt = { Cardiology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Odontology } alt = { Odontology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Odontology    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Gynaecology } alt = { Gynaecology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Gynaecology    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Pulmology } alt = { Pulmology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Pulmology    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Paediatric } alt = { Paediatric } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Paediatric    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Dermatology } alt = { Dermatology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Dermatology    
    </h6>   
                        
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Neurology } alt = { Neurology } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Neurology    
    </h6>   
                        
    </div>
  </div>
</div>
        </>
    )
}

export default Department;

