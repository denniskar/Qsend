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
import logo from "../assets/logo.png"

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
  }))

const QuickPayment = () => {
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
            QuickPayment Form
              
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
              <img src={logo} alt="Logo"  style={{ maxWidth:"200px"}} />
            </Typography>
          </Box>
    <Grid  className={classes.paper}container spacing={2}>
      
         
         <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Select Client</InputLabel>
            <Select   variant="outlined" name="gender">
              <MenuItem>Washa Sacco</MenuItem>
              <MenuItem >solution sacco</MenuItem>
            </Select>
          </FormControl>
        </Grid>


           <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>payment for</InputLabel>
            <Select   variant="outlined" name="gender">
              <MenuItem>Loan</MenuItem>
              <MenuItem >Saving Scheme</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
      
           <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>"Type"</InputLabel>
            <Select   variant="outlined" name="gender">
              <MenuItem>normal loan </MenuItem>
              <MenuItem >development Loan</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label=" Amount "
            name="city"
             variant="outlined"
          
            defaultValue="Amount"
            // margin="normal"
            // onChange={handleChange}
            // error={!!formErrors.city}
            // helperText={formErrors.city}
            // required
          />
        </Grid>

      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained"  color="primary" style={{ marginRight: 10 }}>
          make Payment
        </Button>
      </div>
      </Paper>
      </div>
    </>
  )
}
export default QuickPayment
