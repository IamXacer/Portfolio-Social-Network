import React from 'react';
import './App.css';
import {BrowserRouter, Route, Router} from "react-router-dom";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";


export const App = () => {

    return (
        < div className='app-wrapper'>
            <Header/>
            <Navbar/>
           <Profile/>
        </div>

    )
}



export default App;
