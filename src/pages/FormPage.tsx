import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { deleteTag, eventSubmit} from '../redux/actions';

import {TagsList} from '../components/TagsList'
import { AppContainer } from '../styled/styledFormPage';
import {Form} from '../components/Form'



export const FormPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const selectIsOn = (state: TagsState) => state.tags.lastTags
  const tagsState = useSelector(selectIsOn)
  const [tags, setTags] = useState({
    tag1:'',
    tag2:'',
    tag3:''
  });
  
  const makeUrl = (allTags: ITagsProps): string => {
    return Object.values(allTags).filter(v=>v.length>0).join('+').replace(/\s+/g,'');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setTags({...tags, [name]:value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     dispatch(eventSubmit(tags));
     setTags({tag1:'',tag2:'',tag3:''})
     history.push(`/photos/${makeUrl(tags)}`)
  };

  const handleClick = (tag: string | undefined) =>{
    history.push(`/photos/${tag}`)
  };

  const handleDelete = (i: number) =>{
    dispatch(deleteTag(i))
  };

  return (
    <div>
      <AppContainer>
          <Form handleChange={handleChange} handleSubmit={handleSubmit} tags={tags} />
          <TagsList handleClick={handleClick} handleDelete={handleDelete} tagsState={tagsState} />
      </AppContainer>
      </div>
  );
};
