import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

const App = () => {
    return (
        <div className="App">

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>


            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={5}/>
            <Accordion title={"This is App Component"}/>
            <Accordion title={"Menu"}/>
        </div>
    );
}


export default App;
