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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
        width: 1400,
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


  function createData(name, calories, fat, carbs, protein,amount,success) {
    return { name, calories, fat, carbs, protein,amount,success};
  }
  
  const rows = [
    createData('1/1/2020', "Washa Sacco", "loan", "Development loan","James",7000,"success"),
    createData('1/2/2020', "Solution Sacco", "loan","Normal Loan","James",5000,"success"),
    createData('1/7/2020', "Washa Sacco", "loan", "development","James",3000,"success"),
    createData('1/8/2020', "Washa Sacco", "Schemes", "Member Deposits","James",200,"success"),
    createData('1/12/2020', "Solution Sacco", "Schemes","Share Capital","James",9000,"success"),
    createData('1/1/2020', "Washa Sacco", "Schemes","insurance fund", "James",3444,"success"),
    createData('1/2/2020', "Solution Sacco", "Schemes", "insurance fund", "James",4333,"success"),
    createData('1/7/2020', "Washa Sacco", "Schemes", "insurance fund", "James",878,"success"),
    createData('1/8/2020', "Washa Sacco", "Schemes", "insurance fund", "James",783,"success"),
    createData('1/12/2020', "Washa Sacco", "Schemes", "insurance fund", "James",83938,"success"),
  ];



const Client = () => {
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
            Register User
              
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "5px 0" }}>
              <img src={logo} alt="Logo"  style={{ maxWidth:"120px"}} />
            </Typography>
          </Box>
    
      <Grid  className={classes.paper}container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Client Name "
            name="city"
             variant="outlined"
          
            
            margin="normal"
            
            required
          />
        </Grid>
     
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Client Id "
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Address"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Business Registration No "
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Phone Number"
            name="city"
             variant="outlined"
          
           
            margin="normal"
            
            required
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Country </InputLabel>
            <Select   variant="outlined"  name="gender">
              <MenuItem>USA</MenuItem>
              <MenuItem >Uganda</MenuItem>
              <MenuItem >Germany</MenuItem>
              <MenuItem >France</MenuItem>
            </Select>
          </FormControl>
        </Grid>
     
   
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Email"
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
          Delete
        </Button>
        <Button variant="contained"  color="primary" style={{ marginRight: 10,marginBottom:15 }}>
          Create user
        </Button>
      </div>

      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="right">Sacco</TableCell>
            <TableCell align="right">Paid For </TableCell>
            <TableCell align="right">Type </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.success}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </Paper>
      </div>
    </>
  )
}

export default Client
