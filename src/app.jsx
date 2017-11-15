import './css/main.scss';
import './css/vendor.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,  browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './routes/App';
import Home from './routes/Home';
import Projects from './routes/Projects';

ReactDOM.render((
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />

      <Route path='contact' getComponent={(nextState, cb) => {
        require.ensure(['jquery'], require => {
          cb(null, require('./routes/Contact').default);
        });
      }} />

      <Route path='projects' component={Projects} />

      <Route path='projects/:projectSlug' getComponent={(nextState, cb) => {
        require.ensure(['react-slick'], require => {
          cb(null, require('./routes/ProjectDetail').default);
        });
      }} />
    </Route>
  </Router>
), document.getElementById('root'));
