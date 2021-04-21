import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,ThemeProvider} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Login from "./components/Security/Login"
import { Paper } from '@material-ui/core';
import UserHome from "./components/userInformation/UserHome"
import Registration from './components/Security/Registration';
import {Route,BrowserRouter as Router,Link,Switch} from "react-router-dom"
import Payment from './components/Payment';
import Home from './components/Home'
import AuditTrail from './components/auditTrail';
import QuickPayment from './components/quickPament'
import AdminHome from './components/admin/AdminHome'
import { theme } from './theme'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBar: {
    top: 'auto',
    bottom: 0,
  },

  PaymentBar: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10
  },
  svg: {
    verticalAlign: "middle"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3)
    }
  }
}));

 const App=() =>{
  const classes = useStyles();

  return (
   < Router>
   <ThemeProvider theme={theme}>
    <div className={classes.root}>
    
      <AppBar position="static" >

        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Qsend Payment System
          </Typography>
          {/* <Button color="inherit"> <Link to ="/auditTrail">Audit Trail  </Link></Button>
          <Button color="inherit"> <Link to ="/quickPayment">Quick Payment</Link></Button> */}
          <Button color="inherit"> <Link to ="/userhome" style={{ textDecoration: 'none' }} >user Info</Link></Button>
          <Button  color="inherit"> <Link to ="/adminHome" style={{ textDecoration: 'none' }} > Admin Login</Link></Button>
          <Button color="inherit"> <Link to ="/login" style={{ textDecoration: 'none' }}>Logout</Link></Button>
        </Toolbar>
       
      </AppBar>

      
    </div>
      <Switch>
       <Route path="/" exact component={Login}/>
       <Route path="/auditTrail"  component={AuditTrail}/>
       <Route path="/quickPayment"  component={QuickPayment}/>
       <Route path="/login"  component={Login}/>
       <Route path="/registration" exact component={Registration}/>
       <Route path="/payment"  component={Payment}/>
       <Route path="/userhome" component={UserHome}/>
       <Route path="/adminHome" component={AdminHome}/>
       </Switch>


       <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
         
          <div className={classes.grow} />
        
        </Toolbar>
      </AppBar>

       </ThemeProvider>
    </Router>
  );
}
export default App