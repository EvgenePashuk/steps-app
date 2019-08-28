import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = (
    <Router>
        <Switch>
            <Route path="step1" components={} />
            <Route path="step2" components={} />
            <Route path="step3" components={} />
        </Switch>
    </Router>
)

ReactDOM.render(App, document.getElementById('root'));
