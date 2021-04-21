import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, RootRef } from "@material-ui/core"
import {Route,BrowserRouter as Router,Link} from "react-router-dom"        
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import logo from "../../assets/clogo.jpg"
const useStyles = makeStyles(theme => ({
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
        width: 400,
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
  }))



const Login = () => {

   const handleSubmit=(values)=>{
     console.log(values);
   }
  
    const classes = useStyles()
  return (
    <>
    <div className={classes.PaymentBar}>
    <Paper className={classes.layout}>
    <Box style={{ margin: "30px 0 50px" }}>

            <Typography variant="h5" align="center">
              Qsend System
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
            Registration Form
              
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
              <img src={logo} alt="Logo"  style={{ maxWidth:"200px"}} />
            </Typography>
           
          </Box>
    
          <form>
      <Grid  className={classes.paper}container spacing={2}>
        
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="UserName "
            name="city"
             variant="outlined"
          
            
            margin="normal"
            
            required
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label=" PassWord "
            name="city"
             variant="outlined"
              type="password"
           
            margin="normal"
            
            required
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained"  color="primary" style={{ marginRight: 10,marginBottom:5 }} onSubmit={handleSubmit}>
        <Link to ="/payment" style={{ textDecoration: 'none' }}>Login</Link>
        </Button>
        <Button  variant="contained" size="small" style={{ marginRight: 10,marginBottom:5 }}>
        <Link to ="/registration" style={{ textDecoration: 'none' }}>Register</Link>
        </Button>
     <p><Link to ="" style={{ textDecoration: 'none' }}>forgot password?</Link></p>
      </div>
      </form>
      </Paper>
      </div>
    </>
  )
}

export default Login
