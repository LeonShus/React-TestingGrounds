import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

const App = () => {
    return (
        <div className="container">

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>


            <Rating/>

            <Accordion title={"This is App Component"}/>
            <Accordion title={"Menu"}/>
        </div>
    );
}


export default App;
