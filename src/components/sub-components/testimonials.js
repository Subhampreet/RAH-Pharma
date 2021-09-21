import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

// Import images!
import logo from '../../assets/img/logo.png';

function Testimonials(){
    const [index, setIndex] = useState(0);
        
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <div className = "testimonial" style = {{ backgroundColor: '#005D60' }}>
            <div className = "container">
                <p className = "testimonial-heading" style = {{ color: '#ffffff', paddingTop: '40px', marginLeft: '10px' }}><b>Our Patients' Reviews</b></p>
                <Carousel activeIndex={index} onSelect={handleSelect} style = {{ paddingTop: '10px', paddingBottom: '60px' }}>
                    <Carousel.Item>
                            <div className = "row">
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                            </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "container text-center">
                            <div className = "row">
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "container text-center">
                            <div className = "row">
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div className = "col-md-6">
                                <Card style={{ display:'inline-block' }}>
                                    <Card.Body>
                                        <Card.Title className = "text-center">
                                            <Avatar alt= { logo } src= { logo } style = {{ display: 'inline-block' }}/>
                                        </Card.Title>
                                        <Card.Subtitle className = "mb-4 text-muted text-center">
                                            CEO, ABC Company
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <blockquote className = "blockquote mb-0">
                                                <p>
                                                    {' '}
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                                                </p>
                                            </blockquote>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonials;

