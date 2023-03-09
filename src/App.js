import React, { Fragment } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import muiTheme from './config/muiTheme';
import configureStore from './sagas/configureStore';
import RoutersContainer from './containers/routersContainer';

const store = configureStore();

function App() {
  return (
    <Fragment>
      {/*<CssBaseline />*/}
      <ThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <RoutersContainer />
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
