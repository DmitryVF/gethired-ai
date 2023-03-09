import { createMuiTheme } from '@material-ui/core';

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Gilroy-Bold', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
    ]
  },
  palette: {
    // type: 'dark',
    primary: {
      main: '#000'
    }
  },
  props: {
    MuiButton: {
      color: 'primary',
      size: 'large',
      variant: 'contained',
      fullWidth: true
    }
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
        lineHeight: '18px'
      },
    },
    MuiCheckbox: {
      root: {
        color: '#000'
      }
    },
    MuiTypography: {
      h3: {
        fontSize: '2.75rem',
        lineHeight: '40px',
        textAlign: 'center'
      },
      h4: {
        fontSize: '2rem',
        lineHeight: '40px',
        textAlign: 'center'
      },
      h5: {
        fontSize: '22px',
        lineHeight: '26px',
        // extAlign: 'center'
      },
      h6: {
        fontSize: '18px',
        lineHeight: '21px'
      },
      subtitle1: {
        textAlign: 'center',
        fontSize: '0.875rem',
        lineHeight: '20px',
        fontFamily: 'Roboto'
      },
      subtitle2: {
        lineHeight: '18px'
      },
      body2: {
        fontFamily: 'Roboto'
      },
      caption: {
        lineHeight: '15px'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 8,
        textTransform: 'capitalize',
        fontWeight: 'normal'
      },
      containedSizeLarge: {
        padding: '14px 22px',
        fontSize: 14
      },
      outlinedSizeLarge: {
        padding: '14px 22px',
        fontSize: 14
      },
      textSizeLarge: {
        padding: '14px 22px',
        fontSize: 14
      }
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 24,
        marginBottom: 12
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8
      },
      input: {
        padding: '16.5px 14px'
      }
    }
  }
});

export default muiTheme;
