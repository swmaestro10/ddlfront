import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LearnPage from './learn/learnPage';
import SignUp from './signup/signup';
import SignIn from './signin/signin';
import MainPage from './main/mainPage';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/learn/:id" component={LearnPage} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/main" component={MainPage} />
                        <Route path="/" component={MainPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;