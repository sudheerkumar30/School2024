
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5', 
    height: '100vh',
    display: 'flex',
    flexDirection: 'row-reverse',  
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '0 20px', 
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgContainer: {
    width: '50%', 
  },
  button: {
    marginTop: '20px',
  },
});

const Homepage = ({ onLogin }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>  

        <h1>Welcome to Xceediq a School Management System</h1>

        <Button variant="contained" color="primary" onClick={onLogin} className={classes.button}>
          Login
        </Button>

      </div>

      <div>
        <img className={classes.imgContainer} src="sms.png" alt=""/>
        
      </div>
    </div>
  );
};

export default Homepage;