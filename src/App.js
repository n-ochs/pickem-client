import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
          <Switch>

            <Route exact path='/' >
              <Home />
            </Route>

            <Route path='/signup' >
              <SignUp />
            </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
