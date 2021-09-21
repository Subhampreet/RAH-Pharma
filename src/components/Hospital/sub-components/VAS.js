import React,{ Component } from 'react';
import Container from '@material-ui/core/Container';

// Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// images!
import hours from '../../../assets/img/24hours.png';

class VAS extends Component{
    render() {
        return(
            <div id="VAS" className = "blog" style = {{ backgroundColor: '#F0F0F0',padding:'30px'  }}>
                <Container>
                    <h1><b>Value added services</b></h1>
                    <p>Extra services offered at the hospital to ensure the comfort of health care providers and patients.</p>
                    <div className = "row scrolling-wrapper flex-row flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-5" style = {{ paddingBottom: '20px' }}>
                    <div className = "col">
                            <Card style={{backgroundColor:'#D5EFEF',borderRadius:'10px'}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{display:'inline-block'}}>
                                    <img src = { hours } style={{position:'relative'}} /><span class="spanHeader">24/7 services</span>
                                        </div>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                        <ul>
                                      <li class="liitem">  24 hrs CCTV surveilance</li>
                                      <li class="liitem">  24x7 observation </li>
                                      <li class="liitem">  24hrs open pharmacy</li>
                                        </ul>
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                        <Card style={{backgroundColor:'#D5EFEF',borderRadius:'10px'}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{display:'inline-block'}}>
                                    <img src = { hours } style={{position:'relative'}} /><span class="spanHeader">24/7 services</span>
                                        </div>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                        <ul>
                                      <li class="liitem">  24 hrs CCTV surveilance</li>
                                      <li class="liitem">  24x7 observation </li>
                                      <li class="liitem">  24hrs open pharmacy</li>
                                        </ul>
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                        <Card style={{backgroundColor:'#D5EFEF',borderRadius:'10px'}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{display:'inline-block'}}>
                                    <img src = { hours } style={{position:'relative'}} /><span class="spanHeader">24/7 services</span>
                                        </div>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                        <ul>
                                      <li class="liitem">  24 hrs CCTV surveilance</li>
                                      <li class="liitem">  24x7 observation </li>
                                      <li class="liitem">  24hrs open pharmacy</li>
                                        </ul>
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                        <Card style={{backgroundColor:'#D5EFEF',borderRadius:'10px'}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{display:'inline-block'}}>
                                    <img src = { hours } style={{position:'relative'}} /><span class="spanHeader">24/7 services</span>
                                        </div>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                        <ul>
                                      <li class="liitem">  24 hrs CCTV surveilance</li>
                                      <li class="liitem">  24x7 observation </li>
                                      <li class="liitem">  24hrs open pharmacy</li>
                                        </ul>
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                        <Card style={{backgroundColor:'#D5EFEF',borderRadius:'10px'}}>
                                <CardActionArea>
                                    <CardContent>
                                        <div style={{display:'inline-block'}}>
                                    <img src = { hours } style={{position:'relative'}} /><span class="spanHeader">24/7 services</span>
                                        </div>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                        <ul>
                                      <li class="liitem">  24 hrs CCTV surveilance</li>
                                      <li class="liitem">  24x7 observation </li>
                                      <li class="liitem">  24hrs open pharmacy</li>
                                        </ul>
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default VAS;