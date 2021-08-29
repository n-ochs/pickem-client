import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
