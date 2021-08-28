import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>

      </Router>
    </ThemeProvider>
  );
};

export default App;
