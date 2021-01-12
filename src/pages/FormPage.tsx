import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { deleteTag, eventSubmit} from '../redux/actions';

import {TagsList} from '../components/TagsList'
import { AppContainer } from '../styled/styledFormPage';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export const FormPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const selectIsOn = (state:TagsState) => state.tags.lastTags
  const tagsState = useSelector(selectIsOn)
  const [tags, setTags] = useState({
    tag1:'',
    tag2:'',
    tag3:''
  });
  
  const makeUrl = (t:ITagsProps):string => {
    return Object.values(t).filter(v=>v.length>0).join('+').replace(/\s+/g,'');
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setTags({...tags, [name]:value});
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     dispatch(eventSubmit(tags));
     setTags({tag1:'',tag2:'',tag3:''})
     history.push(`/photos/${makeUrl(tags)}`)
  };

  const handleClick = (t:string | undefined) =>{
    history.push(`/photos/${t}`)
  };

  const handleDelete = (i:number) =>{
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
          <TagsList handleClick={handleClick} handleDelete={handleDelete} tagsState={tagsState} />
      </AppContainer>
  );
};
