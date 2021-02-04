import React from 'react';
import {Container} from '@material-ui/core';
import { CssBaseline } from "@material-ui/core"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App = () => {
    return (
        <>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" >
            <Home />
        </Container>
        </>
    )
}

export default App;
