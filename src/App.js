import React from 'react';
import {Container} from '@material-ui/core';
import { CssBaseline } from "@material-ui/core"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';


const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg" >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" exact component={Form} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
