import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { AppContainer, ItemWrapper } from '../styled/styledFormPage';
import { deleteTag, eventSubmit} from '../redux/actions';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



export const FormPage = () => {

  const history = useHistory();
  const tagsState = useSelector(state => state.tags.lastTags);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  


  const makeUrl = (t) => {
    return Object.values(t).filter(v=>v.length>0).join('+').replace(/\s+/g,'');
  };

  const handleChange = (e) => {
    const {name , value} = e.target;
    setTags({...tags, [name]:value});
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(eventSubmit(tags));
     setTags({tag1:'',tag2:'',tag3:''})
     history.push(`/photos/${makeUrl(tags)}`)
  };

  const handleClick = (t) =>{
    history.push(`/photos/${t}`)
  };

  const handleDelete = (i) =>{
    dispatch(deleteTag(i))
  };

  return (
      <AppContainer>
          <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              name='tag1'
              value={tags.tag1 || ''}
              onChange={handleChange}
            />
              <FormControl
              type="text"
              name='tag2'
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              value={tags.tag2 || ''}
              onChange={handleChange}
            />
              <FormControl
              type="text"
              name='tag3'
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              value={tags.tag3 || ''}
              onChange={handleChange}
            />
            <InputGroup.Prepend>
                <Button variant="outline-secondary" type="submit">Search</Button>
            </InputGroup.Prepend>
          </InputGroup>
          </form>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Last 3 tags :</Card.Header>
              <ListGroup variant="flush">
                {tagsState.map((tag,i) => (
                  <ItemWrapper key={Math.random()}>
                    <ListGroup.Item onClick={()=>handleClick(tag)}>{tag}</ListGroup.Item>
                    <Button variant="secondary" onClick={()=>{handleDelete(i)}}>Delete</Button>
                  </ItemWrapper>
                ))}
              </ListGroup>
          </Card>
      </AppContainer>
  );
};
