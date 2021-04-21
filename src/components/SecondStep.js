import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"

// Destructuring props
const SecondStep = ({ handleNext, handleBack, handleChange, values: { city, date,gender, phone }, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid = city.length > 0 && !formErrors.city && date.length > 0 && phone.length > 0 && !formErrors.phone

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label=" Amount "
            name="city"
             variant="outlined"
          
            value={city || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.city}
            helperText={formErrors.city}
            required
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Select Client</InputLabel>
            <Select   variant="outlined" value={gender} onChange={handleChange} name="gender">
              <MenuItem value={"Male"}>Washa Sacco</MenuItem>
              <MenuItem value={"Female"}>solution sacco</MenuItem>
            </Select>
          </FormControl>
        </Grid>


           <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>payment for</InputLabel>
            <Select   variant="outlined" value={gender} onChange={handleChange} name="gender">
              <MenuItem value={"Male"}>Loan</MenuItem>
              <MenuItem value={"Female"}>Saving Scheme</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
      
           <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>"Schemes"</InputLabel>
            <Select   variant="outlined" value={gender} onChange={handleChange} name="gender">
              <MenuItem value={"Male"}>normal loan </MenuItem>
              <MenuItem value={"Female"}>development Loan</MenuItem>
            </Select>
          </FormControl>
        </Grid>


      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
          Submit 
        </Button>
        <Button variant="contained"  color="primary" onClick={ handleNext }>
          Make Scheduled payment
        </Button>
      </div>
    </>
  )
}

export default SecondStep
