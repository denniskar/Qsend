import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import StepForm from "./StepForm"
import Link from "@material-ui/core/Link"
import IconButton from "@material-ui/core/IconButton"
import SvgIcon from "@material-ui/core/SvgIcon"


const useStyles = makeStyles(theme => ({
  Payment: {
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

const Payment = () => {
  const classes = useStyles()
  return (
    <div className="Payment">
      <CssBaseline />
    
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <StepForm />
        </Paper>
       
      </main>
    </div>
  )
}

export default Payment
