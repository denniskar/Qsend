import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// Destructuring props
const Confirm = ({ handleNext, handleBack, handleChange, values: { city, date,gender, phone }, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid = city.length > 0 && !formErrors.city && date.length > 0 && phone.length > 0 && !formErrors.phone

  return (
    <>
      <Grid container spacing={2}>
        
      <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Start Date"
            name="date"
            type="date"
          //  defaultValue={date || "2021-12-1"}
            onChange={handleChange}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
       
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Make Payment at the beginning of every month" />        
         </Grid>

      

      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
          Submit 
        </Button>
        
      </div>
    </>
  )
}

export default Confirm
