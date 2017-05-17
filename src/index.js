import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
   <Router history={ hashHistory }>
  	<Route path="/" component={App}>
  		<IndexRoute component={About} />
  		<Route path="/portfolio" component={Portfolio} />
  		<Route path="/resume" component={Resume} />
  		<Route path="/contact" component={Contact} />
  	</Route>
  	<Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
