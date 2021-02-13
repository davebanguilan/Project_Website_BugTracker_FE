import React from 'react';
import {Container} from '@material-ui/core';
import { CssBaseline } from "@material-ui/core"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'


const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg" >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
