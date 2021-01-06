import React,{useState} from 'react'
import { NavBar } from './components/NavBar';
import { Form } from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export const App =()=> {

  const [lastTags,setLastTags] = useState([])

  // const sortLastTags =()=>{
  //   if(lastTags.length === 3){
  //      lastTags.splice(1,-1)
  //   }
  // }

  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path="/" />
            <Route path="/photos" />
          </Switch>
      </Router>
      <Form lastTags={lastTags} />
    </>
  );
}


