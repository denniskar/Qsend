import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

// Destructuring props
const Success = ({ handleNext, handleChange, values: { firstName, date,lastName, email, gender }, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email &&
    gender.length > 0

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            variant="outlined"
            margin="normal"
            value={firstName || ""}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
             variant="outlined"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Card Number"
            name="lastName"
             variant="outlined"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>


          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="CSV"
            name="lastName"
             variant="outlined"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>

         <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Card Expiry Date"
            name="date"
            type="date"
            defaultValue={date || "2021-12-31"}
            onChange={handleChange}
            margin="normal"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Card Name Holder"
            name="lastName"
             variant="outlined"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>
       
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained"  color="primary" onClick={ handleNext }>
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default Success