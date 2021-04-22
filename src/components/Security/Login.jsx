import React, { useEffect, useState } from "react";
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
import axios from "axios"
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

const [userName,setUserName]=useState("");
const [password,setPassWord]=useState("");
const[loginStatus,setLoginStatus]=useState("false")

  
   
const submit=()=>{

  axios.post( "https://192.168.10.3:7000/api/qsend/v1/auth/token",{
     username:userName,
      password:password,
  }).then ((response)=>{

    if(!response.data.message){
      setLoginStatus(false);
    }else{
        console.log(response.data);
        localStorage.setItem("token",response.data.token)
        setLoginStatus(true)
    }

  })

}
    
const handleSubmit=()=>{
  fetch("http://192.168.10.3:7000/api/qsend/v1/auth/token",{
method:"POST",
body:JSON.stringify({
  username:userName,
  password:password
})
  }.then((response)=>{
    response.json().then((result)=>{
         console.log(result)
    })})
  
  
  )
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
          onChange={(e)=>{setUserName(e.target.value)}}
            
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
              onChange={(e)=>{setPassWord(e.target.value)}}
            margin="normal"
            
            required
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained"  color="primary" style={{ marginRight: 10,marginBottom:5 }} onClick={submit}>
        {/* <Link to ="/payment" style={{ textDecoration: 'none' }}>Login</Link> */}
        Login
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
