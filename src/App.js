import React,{useState} from 'react'
import { NavBar } from './components/NavBar';
import { FormPage } from './pages/FormPage';
import { PhotosPage } from './pages/PhotosPage';
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
        <NavBar />
          <Switch>
            <Route exact path="/" component={FormPage} />
            <Route path='/photos/:value' component={PhotosPage}/>
          </Switch>
    </>
  );
}


