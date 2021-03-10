import { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TopPage } from './pages/TopPage';

type PropTypes = {
  children?: React.ReactNode;
};

/**
 * Routing
 */
const MyRouter = (props: PropTypes) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Redirect from='/index.html' to='/' />
        <Route exact path={['/']} component={TopPage} />
        <Route path='/*' component={TopPage} />
      </Switch>
    </Router>
  );
};

class App extends Component {
  render() {
    return <MyRouter />;
  }
}

export default hot(module)(App);
