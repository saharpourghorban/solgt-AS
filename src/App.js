import Header from "./components/microComponents/Header";
import React from "react";
import './App.css';
import '../src/assets/icons/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";


function App() {
    return (
        <>
            <Header />
            <div className="content">
                <Router>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        </>

    );
}

export default App;
