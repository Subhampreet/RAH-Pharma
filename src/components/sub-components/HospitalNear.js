import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

// Card!
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Typography!
import Typography from '@material-ui/core/Typography';

// Material Icons!
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';

// import images!
import sum from '../../assets/img/sum.jpg';

class HospitalNear extends Component{ 
    render() {
        return(
            <div className = "best-rated" style = {{ backgroundColor: '#F0F0F0' }}>
                <Container style={{padding:'10px'}}> 
                    <h1 style={{padding:'10px'}}><b>Hospitals Near You</b></h1>
                    <p style={{padding:'10px'}}>Fetch details of all hospitals nearby you and select the best services from a wide range of options</p>
                    <div className = "row scrolling-wrapper flex-row flex-nowrap" style = {{ padding: '10px' }}>
                        <div className = "col-md-4" style = {{ marginTop: '10px' }}> 
                            <Card>
                                <CardActionArea>
                                    <CardMedia 
                                    component = "img"
                                    alt = "Sum Hospital"
                                    height = "140"
                                    image = { sum }
                                    title = "Sum Hospital"/>
                                    <CardContent>
                                        <div className = "row">
                                            <div className = "col-md-10">
                                                <Typography class="typography" gutterBottom variant="h5" component="h2">
                                                    Sum Hospital | PRIVATE
                                                </Typography>
                                                <Typography class="typographySmall" variant="body2" color="textSecondary" component="p">
                                                    <ul>
                                                        <li>ICUs and OPDs 24x7</li>
                                                        <li>COVID-19 testing available</li>
                                                        <li>Speciality in Neurology</li>
                                                    </ul>
                                                </Typography>  
                                            </div>
                                            <div className = "col-md-2">
                                                <StarRateRoundedIcon style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass">4</text>

                                            </div>
                                        </div>
                                    </CardContent>
                                    <Container>
                                    <div className = "row" style = {{ paddingBottom: '10px' }}>
                                            <div className = "col-md-6">
                                                <PhoneInTalkRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">+91 934XXXXXXX</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <RoomRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">4 kms</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <HotelRoundedIcon
                                                style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass"> 400</text>

                                            </div>
                                        </div>
                                    </Container>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div className = "col-md-4" style = {{ marginTop: '10px' }}> 
                            <Card>
                                <CardActionArea>
                                    <CardMedia 
                                    component = "img"
                                    alt = "Sum Hospital"
                                    height = "140"
                                    image = { sum }
                                    title = "Sum Hospital"/>
                                    <CardContent>
                                        <div className = "row">
                                            <div className = "col-md-10">
                                                <Typography class="typography" gutterBottom variant="h5" component="h2">
                                                    Sum Hospital | PRIVATE
                                                </Typography>
                                                <Typography class="typographySmall" variant="body2" color="textSecondary" component="p">
                                                    <ul>
                                                        <li>ICUs and OPDs 24x7</li>
                                                        <li>COVID-19 testing available</li>
                                                        <li>Speciality in Neurology</li>
                                                    </ul>
                                                </Typography>  
                                            </div>
                                            <div className = "col-md-2">
                                                <StarRateRoundedIcon style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass">4</text>

                                            </div>
                                        </div>
                                    </CardContent>
                                    <Container>
                                        <div className = "row" style = {{ paddingBottom: '10px' }}>
                                            <div className = "col-md-6">
                                                <PhoneInTalkRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">+91 934XXXXXXX</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <RoomRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">4 kms</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <HotelRoundedIcon
                                                style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass"> 400</text>

                                            </div>
                                        </div>
                                    </Container>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div className = "col-md-4" style = {{ marginTop: '10px' }}> 
                            <Card>
                                <CardActionArea>
                                    <CardMedia 
                                    component = "img"
                                    alt = "Sum Hospital"
                                    height = "140"
                                    image = { sum }
                                    title = "Sum Hospital"/>
                                    <CardContent>
                                        <div className = "row">
                                            <div className = "col-md-10">
                                                <Typography class="typography" gutterBottom variant="h5" component="h2">
                                                    Sum Hospital | PRIVATE
                                                </Typography>
                                                <Typography class="typographySmall" variant="body2" color="textSecondary" component="p">
                                                    <ul>
                                                        <li>ICUs and OPDs 24x7</li>
                                                        <li>COVID-19 testing available</li>
                                                        <li>Speciality in Neurology</li>
                                                    </ul>
                                                </Typography>  
                                            </div>
                                            <div className = "col-md-2">
                                                <StarRateRoundedIcon  style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass">4</text>

                                            </div>
                                        </div>
                                    </CardContent>
                                    <Container>
                                    <div className = "row" style = {{ paddingBottom: '10px' }}>
                                            <div className = "col-md-6">
                                                <PhoneInTalkRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">+91 934XXXXXXX</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <RoomRoundedIcon
                                                style = {{ color: '#00afb5' }}/>
                                                <text class="aclass">4 kms</text>
                                            </div>
                                            <div className = "col-md-3">
                                                <HotelRoundedIcon
                                                style = {{ color: '#00afb5' }}/> 
                                                <text class="aclass"> 400</text>

                                            </div>
                                        </div>
                                    </Container>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default HospitalNear;