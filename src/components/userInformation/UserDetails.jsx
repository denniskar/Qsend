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
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography';
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
        width: 500,
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

const UserDetails = () => {
    const classes = useStyles()
  return (
    <>
    <div className={classes.PaymentBar}>
    <Paper className={classes.layout}>
    <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant="h5" align="center">
              Qsend System
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "8px 0" }}>
            User Profile
              
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "5px 0" }}>
              <img src={logo} alt="Logo"  style={{ maxWidth:"120px"}} />
            </Typography>
          </Box>
    
      <Grid  className={classes.paper}container spacing={2}>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="First Name "
            name="city"
             variant="outlined"
          
            
            margin="normal"
            
            required
          />
        </Grid>
     
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Second Name "
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Other Name "
            name="city"
             variant="outlined"
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Phone Number "
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label=" Email Address"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="country Name"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="state"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Address 1"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />

        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Address 2"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
          
          />

        </Grid>
        
        <Grid item xs={6} sm={6}>
          <TextField
            fullWidth
            label="Password"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>
  

      </Grid>
      <div style={{ display: "flex", marginTop: 5, justifyContent: "flex-end" }}>
        <Button variant="contained"  color="primary" style={{ marginRight: 10,marginBottom:15 }}>
          Edit
        </Button>

        <Button variant="contained"  color="primary" style={{ marginRight: 10,marginBottom:15 }}>
          Cancel
        </Button>
      </div>
      </Paper>
      </div>
    </>
  )
}

export default UserDetails
