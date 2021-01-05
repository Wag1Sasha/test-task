import React from 'react'
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {AppContainer} from './styled-components/styledComponents'
import { NavBar } from './components/NavBar';




function App() {
  return (
    <>
      <NavBar />
      <AppContainer>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="type tags..."
          aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </AppContainer>
    </>
  );
}

export default App;
