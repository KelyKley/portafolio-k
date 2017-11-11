import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import { Provider } from 'redux-zero/react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
         <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
            }
         </Switch>
      </HashRouter>
   </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

