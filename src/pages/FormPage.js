import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {AppContainer, TagWrapper} from '../styled-components/styledComponents'
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import { addTag, deleteLastTag } from '../redux/actions';
// import {FooterWrapper} from '../styled-components/styledComponents'



export const FormPage =()=>{

  const [value, setValue] = useState('')
 
  const tagsState = useSelector(state => state.tags.lastTags)
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    setValue(e.target.value);
  }


  const handleSubmit =()=>{
    if(tagsState.length === 3){
      dispatch(deleteLastTag())
    }
    if (value.trim() === "") return;
    dispatch(addTag(value))
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
        <h2>Show last 3 tags :</h2>
        <TagWrapper>
        {tagsState.map((tag)=>(
          <h3 key={Math.random()}>{tag}</h3>
        ))}
      </TagWrapper>
      </AppContainer>
    </>
  );
}
