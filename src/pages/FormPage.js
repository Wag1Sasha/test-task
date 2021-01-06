import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {AppContainer} from '../styled-components/styledComponents'
import {Link} from "react-router-dom";
// import {FooterWrapper} from '../styled-components/styledComponents'



export const FormPage =({sortLastTags, lastTags})=>{

  const [value, setValue] = useState('')
 
  


  const handleChange =(e)=>{
    setValue(e.target.value);
  }


  const handleSubmit =()=>{
    if (value.trim() === "") return;
    // sortLastTags()
    // lastTags.push(value)
  
  }

  return (
    <>
      <AppContainer>
        <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="type tags..."
          aria-describedby="basic-addon2"
          value={value}
          onChange={handleChange}
          />
          <InputGroup.Append>
          <Link to={`/photos/${value}`}><Button variant="outline-secondary" onClick={handleSubmit}>Search</Button></Link>
          </InputGroup.Append>
        </InputGroup>
      </AppContainer>
      
      {/* <FooterWrapper>
      {lastTags.map(tag=>(
        <h3 key={Math.random()}>{tag}</h3>
          ))}
      </FooterWrapper> */}
    </>
  );
}
