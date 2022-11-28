import { createTheme } from '@material-ui/core';

const arcBlue = '#212529';
const arcOrange = '#00d1cd';

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    sign: {
      height: '45px',
      textTransform: 'none',
      color: 'white',
    },
  },
});

export default theme;
