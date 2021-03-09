import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TopPage } from './pages/TopPage';

type PropTypes = {
  children?: React.ReactNode;
};

/**
 * ルーティング設定
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

class App extends React.Component {
  render() {
    return <MyRouter />;
  }
}

export default hot(module)(App);
