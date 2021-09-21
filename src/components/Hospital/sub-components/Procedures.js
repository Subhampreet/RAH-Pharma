import React,{ Component } from 'react';
import Container from '@material-ui/core/Container';

// Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class Procedures extends Component{
    render() {
        return(
            <div className = "blog" style = {{ backgroundColor: 'white',padding:'30px' }}>
                <Container >
                    <h1><b>Procedures</b></h1>
                    <p>A stepwise guide to the procedural flow of  treartment followed by the hospital.   </p>
                    <div className = "row scrolling-wrapper flex-row flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-6 " style = {{ paddingBottom: '20px' }}>
                    <div className = "col text-center text-justify">
                            <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                            Arrival
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col text-center text-justify">
                        <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                        Registration
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col text-center text-justify">
                        <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                        Primary Evaluation
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col text-center text-justify">
                        <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                        Ward Assignment
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col text-center text-justify">
                        <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                        Treatment
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col text-center text-justify">
                        <Card style={{backgroundColor:'black',borderRadius:'10px',alignItems:'center'}}>
                                <CardActionArea>
                                    <CardContent style={{alignItems:'center'}}>
                                        <Typography className = "sub-title-procedure" variant="body2" color="white" component="p">
                                        Bill Clearance
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

export default Procedures;