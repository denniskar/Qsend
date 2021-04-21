import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Route,BrowserRouter as Router,Link,Switch} from "react-router-dom"
import Button from '@material-ui/core/Button';
import Login from '../Security/Login'
import AuditTrail from '../auditTrail';
import QuickPayment from '../quickPament'
import UserDetails from './UserDetails';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:"#4682B4",
    padding: theme.spacing(3),
  },
}));

export default function UserHome() {
  const classes = useStyles();

  return (
     < Router>
    <div className={classes.root}>
      <CssBaseline />
   
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
       <Button color="inherit"> <Link to ="/userdetails" style={{ textDecoration: 'none' ,marginLeft: 20,paddingRight:25  }}>profile Info</Link></Button>
        
        </List>
        <Divider />
        <List>
       <Button color="inherit"> <Link to ="/auditTrail" style={{ textDecoration: 'none',marginLeft: 20,paddingRight:30 }}> Audit Trail  </Link></Button>
         
        </List>
        <Divider />
        <List>
        <Button color="inherit"> <Link to ="/quickPayment" style={{ textDecoration: 'none' ,marginLeft: 20,paddingRight:25 }}>Quick Payment</Link></Button>
        </List>
      </Drawer>
    
    </div>

       <Switch>
       {/* <Route path="/" exact component={Home}/>
       <Route path="/auditTrail"  component={AuditTrail}/>
       <Route path="/quickPayment"  component={QuickPayment}/> */}
       <Route path="/userdetails"  component={UserDetails}/>
         <Route path="/auditTrail"  component={AuditTrail}/>
       <Route path="/quickPayment"  component={QuickPayment}/>
       </Switch>
  
  </Router>
  );
}
