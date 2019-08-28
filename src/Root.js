import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Help from './components/Help';
import SuccessStep from './components/SuccessStep';

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/step1" component={Step1} />
                <Route path="/step2" component={Step2} />
                <Route path="/help" component={Help} />
                <Route path="/success" component={SuccessStep} />
            </Switch>
        </Router>
    </Provider>
);

export default Root;