import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={"714f9b4e47344f3eac7dad1272a82169"} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;