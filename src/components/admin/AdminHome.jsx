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
import RegisterUser from './RegisterUser';
import Client from './Client';
import Transactions from './Transactions';
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

export default function AdminHome() {
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
       <Button color="inherit"> <Link to ="/registerUser" style={{ textDecoration: 'none',marginLeft: 20,paddingRight:25 }}>System Users</Link></Button>
        
        </List>
        <Divider />
        <List>
          <Button color="inherit"> <Link to ="/transactions" style={{ textDecoration: 'none',marginLeft: 20,paddingRight:20  }}>view Transactions</Link></Button>
        </List>
        <Divider />


        <List>
          <Button color="inherit"> <Link to ="/client" style={{ textDecoration: 'none',marginLeft: 20,paddingRight:20  }}>client  Information</Link></Button>
        </List>

      </Drawer>
    
    </div>
       <Switch>
       {/* <Route path="/" exact component={Home}/>
       <Route path="/auditTrail"  component={AuditTrail}/>
       <Route path="/quickPayment"  component={QuickPayment}/> */}
       <Route path="/login"  component={Login}/>
         <Route path="/registerUser"  component={RegisterUser}/>
       <Route path="/transactions"  component={Transactions}/>
       <Route path="/client"  component={Client}/>
       </Switch>
  
  </Router>
  );
}
