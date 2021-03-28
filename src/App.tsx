import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from './components/elements/Header';
import routes from './router/routes';


function App() {

  const theme = createMuiTheme({
    palette: {
      background: {
        default: '#FFDBC9'
      }
    }
  });

  return (
    <div className="App">
      <Header />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {routes}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
