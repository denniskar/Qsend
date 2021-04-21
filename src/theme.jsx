import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4682B4"
    },
    secondary: {
      main: "#0f0"
    }
  },
  typography: {
    fontFamily: "Comic Sans MS",
    
    body2: {
      fontFamily: "Times New Roman",
     // fontSize: "1.1rem"
   
    }
  },
  Link:{
    textDecoration:"none"
  },
  shape: {
    borderRadius: 10
  },
  spacing: 4,
  overrides: {
    // MuiOutlinedInput: {
    //   root: {
    //     backgroundColor: "green"
    //   }
    // },
    // MuiInputLabel: {
    //   root: {
    //     backgroundColor: "yellow"
    //   }
    // },
    // MuiTextField: {
    //   root: {}
    // },
   
    MuiButton: {
      root: {
        textDecoration:"none",
        textTransform: "none",
        padding: "10px"
      },
    //   fullWidth: {
    //     maxWidth: "3000px"
    //   }
    }
  },
  props: {
    MuiButton: {
      textDecoration:"none",
      disableRipple: true,
      variant: "contained",
      color: "primary"
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiTextField: {
      variant: "outlined",
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 4
    },
    MuiCard: {
      elevation: 4
    }
  }
});