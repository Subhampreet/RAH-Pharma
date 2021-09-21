import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <h1 className='text-center' style={{fontWeight:'bold',alignSelf:'center',fontSize:'30px',alignItems:'center',alignContent:'center',padding:'10px',marginTop:'20px'}}>Choose Your Department</h1>
      </Typography>
      <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>   
            </Grid>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>   
        </Grid>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>           </Grid>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>           </Grid>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>           </Grid>
        <Grid item xs={1}>
        <a style={{alignSelf:'center'}} href="#">                       
    <img src = { logo } alt = { logo } style = {{ width: '100px',height:'100px' }}/>
    </a>    
    <br/>
    <h6  style={{fontWeight:'bold',alignSelf:'center',alignItems:'center',alignContent:'center',padding:'10px'}}>
    Cardiology    
    </h6>           </Grid>
      </Grid>
      <Divider className={classes.divider} />
      
    </div>
  );
}
