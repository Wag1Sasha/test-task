import React from 'react'
import { NavBar } from './components/NavBar';
import { FormPage } from './pages/FormPage';
import { PhotosPage } from './pages/PhotosPage';
import {
  Switch,
  Route,
} from "react-router-dom";



export const App =()=> {

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


