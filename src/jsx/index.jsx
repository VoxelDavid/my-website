import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,  browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './routes/App';
import Home from './routes/Home';

ReactDOM.render((
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />

      <Route path='contact' getComponent={(nextState, cb) => {
        require.ensure(['jquery'], require => {
          cb(null, require('./routes/Contact').default);
        });
      }} />

      <Route path='projects/:projectSlug' getComponent={(nextState, cb) => {
        require.ensure(['react-slick'], require => {
          cb(null, require('./routes/Project').default);
        });
      }} />
    </Route>
  </Router>
), document.getElementById('root'));
