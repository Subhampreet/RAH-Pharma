import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

// Import images!
import logo from '../../../assets/img/rating.png';
import star from '../../../assets/img/star.png';
import blankstar from '../../../assets/img/blankstar.png';

function RatingandReview(){
    const [index, setIndex] = useState(0);
        
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <div className = "testimonialNew" style = {{ backgroundColor: '#005D60' }}>
            <div className = "container">
                <p className = "testimonial-heading" style = {{ color: '#ffffff', paddingTop: '40px', marginLeft: '10px',fontSize:'24px' }}><b>Rating and Reviews:</b></p>
                
                            <div className = "row">
                                <div className = "col-md-6">
                                <div className = "row" style={{marginBottom:'16px'}}>
                                   
                                    <div className = "col-md-3" >
                                            <a style={{color:'white',fontWeight:'bolder',fontSize:'56px'}}>
                                                4.4
                                            </a>
                                          
                                    </div>
                                    <div className = "col-md-3" style={{marginLeft:'-40px',marginTop:'29px'}}>
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { blankstar } style={{position:'relative',padding:"1px"}} />
                                    <br/>       
                                    </div>
                                    <div class="progress" style={{height:'8px',width:'270px',position:'absolute',marginTop:'110px',marginLeft:'15px'}}>
                                    <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div> 
                                <a style={{position:'absolute',marginTop:'102px',marginLeft:'285px',color:'white',fontWeight:'bold'}}>Hygene</a>                              
                                <div class="progress" style={{height:'8px',width:'270px',position:'absolute',marginTop:'145px',marginLeft:'15px'}}>
                                    <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div> 
                                <a style={{position:'absolute',marginTop:'137px',marginLeft:'285px',color:'white',fontWeight:'bold'}}>Blood Banks</a> 

                                
                                <div class="progress" style={{height:'8px',width:'270px',position:'absolute',marginTop:'180px',marginLeft:'15px'}}>
                                    <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div> 
                                <a style={{position:'absolute',marginTop:'172px',marginLeft:'285px',color:'white',fontWeight:'bold'}}>Services</a>                              
                                <div class="progress" style={{height:'8px',width:'270px',position:'absolute',marginTop:'215px',marginLeft:'15px'}}>
                                    <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div> 
                                <a style={{position:'absolute',marginTop:'207px',marginLeft:'285px',color:'white',fontWeight:'bold'}}>Doctors</a>                              
                                </div>
                                </div>
                                
                                <div className = "col-md-6">
                                <Carousel activeIndex={index} onSelect={handleSelect} style = {{ paddingTop: '10px', paddingBottom: '60px' }}>
                    <Carousel.Item>
                                <div className = "row" style={{marginBottom:'16px'}}>
                                    <div className = "col-md-3" style={{marginTop:'13px'}}>
                                        <img src = { logo } style={{position:'relative'}} />
                                    </div>
                                    <div className = "col-md-3" style={{marginLeft:'-90px',marginTop:'13px'}}>
                                            <a style={{color:'white',fontWeight:'bolder'}}>
                                                Jane Cooper                                                          
                                            </a>
                                            <br/>
                                            <a style={{color:'white',fontSize:'14px'}}>
                                            CEO, ABC Company
                                            </a>
                                    </div>
                                    <div className = "col-md-3" style={{marginTop:'18px'}}>
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { blankstar } style={{position:'relative',padding:"1px"}} />
                                    <br/>       
                                    </div>
                                </div>
                                <Card style={{ display:'relative',marginBottom:'82px',borderRadius:'10px',marginTop:'20px' }}>
                                    <Card.Body>
                                        <Card.Title >
                                        Incredible Experience
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    I had an incredible experience with the timely supervision provided by the website, they made such a big difference within our reach.                                                 </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className = "row" style={{marginBottom:'16px'}}>
                                    <div className = "col-md-3" style={{marginTop:'13px'}}>
                                        <img src = { logo } style={{position:'relative'}} />
                                    </div>
                                    <div className = "col-md-3" style={{marginLeft:'-90px',marginTop:'13px'}}>
                                            <a style={{color:'white',fontWeight:'bolder'}}>
                                                Jane Cooper                                                          
                                            </a>
                                            <br/>
                                            <a style={{color:'white',fontSize:'14px'}}>
                                            CEO, ABC Company
                                            </a>
                                    </div>
                                    <div className = "col-md-3" style={{marginTop:'18px'}}>
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { star } style={{position:'relative',padding:"1px"}} />
                                    <img src = { blankstar } style={{position:'relative',padding:"1px"}} />
                                    <br/>       
                                    </div>
                                </div>
                                <Card style={{ display:'relative',marginBottom:'82px',borderRadius:'10px',marginTop:'20px' }}>
                                    <Card.Body>
                                        <Card.Title >
                                        Incredible Experience
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    I had an incredible experience with the timely supervision provided by the website, they made such a big difference within our reach.                                                 </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Carousel.Item>
                </Carousel>
                                </div>
                                
                            </div>
                   
            </div>
        </div>
    );
}

export default RatingandReview;

