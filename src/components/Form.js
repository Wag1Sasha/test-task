import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {AppContainer} from '../styled-components/styledComponents'
import {ImgContainer} from '../styled-components/styledComponents'
// import {FooterWrapper} from '../styled-components/styledComponents'



export const Form =({sortLastTags, lastTags})=>{

  const [value, setValue] = useState('')
  const [data,setData] = useState([])
  


  const handleChange =(e)=>{
    setValue(e.target.value);
  }


  const handleSubmit =()=>{
    if (value.trim() === "") return;
    // sortLastTags()
    // lastTags.push(value)
    fetch(`https://pixabay.com/api/?key=19776687-7c6cc257a41e8830f998f821c&q=${value}`)
    .then(res =>res.json())
    .then(data=>setData(data.hits))
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
            <Button variant="outline-secondary" type="submit" onClick={handleSubmit}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </AppContainer>
      {data.map((photo)=>(
        <ImgContainer key={Math.random()}>
          <img src={photo.largeImageURL} width="300px" height="300px" alt='search'></img>
        </ImgContainer>
      ))}
      {/* <FooterWrapper>
      {lastTags.map(tag=>(
        <h3 key={Math.random()}>{tag}</h3>
          ))}
      </FooterWrapper> */}
    </>
  );
}
