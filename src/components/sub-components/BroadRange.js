import { Container, styled } from '@material-ui/core';
import React from 'react';
import "./style.css";
import logo from '../../assets/img/logo.png';
import hours from '../../assets/img/24hours.png';
import blood from '../../assets/img/blood.png';
import Calendar from '../../assets/img/Calendar.png';
import HandPalm from '../../assets/img/HandPalm.png';
import emo from '../../assets/img/emotion-line.png';
import ambu from '../../assets/img/ambulance.png';



const BroadRange = () => {
    return(
        <>
<div class="container text-center">
<h2 className='text-center' style={{fontWeight:'bold',alignSelf:'center',fontSize:'48px',alignItems:'center',alignContent:'center',padding:'10px',marginTop:'20px',fontWeight:'800'}}>Broad Range of Info</h2>
<h5 className='text-center' style={{fontWeight:'bold',alignSelf:'center',fontSize:'18px',alignItems:'center',alignContent:'center',padding:'10px',marginTop:'0px',fontWeight:'500'}}>All the details and features to rely upon during crucial times</h5>
  <div class="row " style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
    <div class="col-sm" >
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { hours } alt = { hours } style = {{ height:'60px',width:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    24*7 Services    
    </h5>        
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    24hrs access to Informartion service
        </p>               
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { Calendar } alt = { Calendar } style = {{ width: '60px',height:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    Verified    
    </h5>     
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    100% verified information
            </p>              
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { blood } alt = { blood } style = {{ width: '60px',height:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    Blood Banks    
    </h5>  
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    Check availaibility of desired blood type
        </p>         
    </div>
  </div>

  <div class="row " style={{alignSelf:'center'}}>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { emo } alt = { emo } style = {{ height:'60px',width:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    Patient Friendly    
    </h5>   
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    Designed to deliver optimum medical support
    </p>                 
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { ambu } alt = { ambu } style = {{ width: '60px',height:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    Ambulance    
    </h5>      
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    Check for ambulance and pick up duration
            </p>             
    </div>
    <div class="col-sm">
    <a style={{alignSelf:'center'}} href="#">                       
    <img src = { HandPalm } alt = { HandPalm } style = {{ width: '60px',height:'60px' }}/>
    </a>    
    <br/>
    <h5  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'24px',fontWeight:'600'}}>
    Volunteers    
    </h5>      
    <p  style={{alignSelf:'center',alignItems:'center',alignContent:'center',fontSize:'16px',fontWeight:'400'}}>
    Easily contact a volunteer or choose to be one            </p>      
    </div>
  </div>
</div>
        </>
    )
}

export default BroadRange;

