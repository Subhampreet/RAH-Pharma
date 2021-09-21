import React,{ Component } from 'react';
import Container from '@material-ui/core/Container';

// Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// images!
import blog1 from '../../assets/img/blog1.jpg';

class BlogComponent extends Component{
    render() {
        return(
            <div className = "blog" style = {{ backgroundColor: '#F0F0F0',padding:'30px' }}>
                <Container>
                    <h1><b>Blogs and Newsletters</b></h1>
                    <p>Get access to recent health related tips and precautions along with healthcare<br/>articles and medical journals.Everything at one place.</p>
                    <div className = "row scrolling-wrapper flex-row flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-5" style = {{ paddingBottom: '20px' }}>
                    <div className = "col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component = "img"
                                    alt = "Why sweat is a human superpower"
                                    height = "140"
                                    image = { blog1 }
                                    title = "Why sweat is a human superpower"/>
                                    <CardContent>
                                        <h6 className = "text-muted">Dr. Rithu Chaterjee</h6>
                                        <Typography className = "title"  gutterBottom variant="h5" component="h2">
                                            Why Sweat is a human superpower
                                        </Typography>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit dolor et dolor tempor, at commodo enim suscipit.
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component = "img"
                                    alt = "Why sweat is a human superpower"
                                    height = "140"
                                    image = { blog1 }
                                    title = "Why sweat is a human superpower"/>
                                    <CardContent>
                                        <h6 className = "text-muted">Dr. Rithu Chaterjee</h6>
                                        <Typography className = "title"  gutterBottom variant="h5" component="h2">
                                            Why Sweat is a human superpower
                                        </Typography>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit dolor et dolor tempor, at commodo enim suscipit.
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component = "img"
                                    alt = "Why sweat is a human superpower"
                                    height = "140"
                                    image = { blog1 }
                                    title = "Why sweat is a human superpower"/>
                                    <CardContent>
                                        <h6 className = "text-muted">Dr. Rithu Chaterjee</h6>
                                        <Typography className = "title"  gutterBottom variant="h5" component="h2">
                                            Why Sweat is a human superpower
                                        </Typography>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit dolor et dolor tempor, at commodo enim suscipit.
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component = "img"
                                    alt = "Why sweat is a human superpower"
                                    height = "140"
                                    image = { blog1 }
                                    title = "Why sweat is a human superpower"/>
                                    <CardContent>
                                        <h6 className = "text-muted">Dr. Rithu Chaterjee</h6>
                                        <Typography className = "title"  gutterBottom variant="h5" component="h2">
                                            Why Sweat is a human superpower
                                        </Typography>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit dolor et dolor tempor, at commodo enim suscipit.
                                        </Typography> 
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className = "col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component = "img"
                                    alt = "Why sweat is a human superpower"
                                    height = "140"
                                    image = { blog1 }
                                    title = "Why sweat is a human superpower"/>
                                    <CardContent>
                                        <h6 className = "text-muted">Dr. Rithu Chaterjee</h6>
                                        <Typography className = "title"  gutterBottom variant="h5" component="h2">
                                            Why Sweat is a human superpower
                                        </Typography>
                                        <Typography className = "sub-title" variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit dolor et dolor tempor, at commodo enim suscipit.
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

export default BlogComponent;