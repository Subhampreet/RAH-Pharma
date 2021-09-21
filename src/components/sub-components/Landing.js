import { Container, styled } from '@material-ui/core';
import React from 'react';
import "./style.css";
import Paper from 'material-ui/Paper';
import Hero from '../../assets/img/hero.png'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
    paperContainer: {
        backgroundSize: 'cover',
     backgroundPosition: 'center',
     width: `calc(100vw + 48px)`,
    }
};

const Landing = () => {
    return(
        <>
        <MuiThemeProvider>
        <div class="register-photo">
    <div class="form-container">
        <div class="image-holder"></div>
        <form method="post">
        <div class="form-group">
                                        <div class="d-grid">
                                            <label for="exampleInputEmail1"><a style={{fontWeight:'bold',fontSize:"30px"}}>All round healthcare Information</a><br/><a style={{fontWeight:'bold',fontSize:"30px",justifyContent:'flex-start'}}> for everyone</a>
                                            </label>
                                                <label id="emailHelp" class="form-text text-muted" style={{fontWeight:'normal',fontSize:"15px",lineHeight:'25px'}}>With the use of digital diagnostic equipments and systems we provide international standard emergency and multidisciplinary comprehensive care
                                                </label>
                                                <div class="input-group mb-3">
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                                    style={{padding:'10px',marginTop:'25px',marginBottom:'25px'}}
                                                    placeholder="Location | Search Our Area"/>
                                                </div>
                                                <div class="input-group mb-3">
                                                    <input type="email" class="form-control" id="exampleInputPassword1" 
                                                    style={{padding:'10px',marginTop:'15px',marginBottom:'25px'}}
                                                    placeholder="Search | Clinics, Doctors, hospitals etc."/>
                                                </div>
                                        </div>
                                    </div>


                <div class="form-group">
    
                </div>
  <div class="d-grid  ">
  <button type="submit" 
  style={{padding:'10px',marginBottom:'25px',backgroundColor:'#00afb5',fontWeight:'bold',borderColor:'#00afb5'}}
  class="btn btn-primary">Search</button>
  </div>
        </form>
    </div>
</div>
        
        
</MuiThemeProvider>
        </>
    )
}

export default Landing;

