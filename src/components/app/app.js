import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss'

import AsideBar from "../aside-bar";
import MainContent from "../main-content";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <AsideBar />
            <MainContent />
        </Router>
    )
}

export default App;

