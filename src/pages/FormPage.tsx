import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import { deleteTag, dragNDrop, eventSubmit } from '../redux/actions';
import { AppContainer } from '../styled/styledFormPage';
import '../styled/react-tags-input.css';

export const FormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectIsOn = (state: TagsState) => state.tags.tags;
  const tagsState = useSelector(selectIsOn);

  const handleDelete = (index: number) => {
    dispatch(deleteTag(index));
  };

  const handleAddition = (tag: TagPropsType) => {
    dispatch(eventSubmit(tag));
    history.push(`/photos/${tag.text}`);
  };

  const dragNDropHandler = ({ tag, currPos, newPos }: any): void => {
    const newTags = tagsState.slice();
    tag = newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, ...tag);
    dispatch(dragNDrop(newTags));
  };

  return (
    <AppContainer>
      <ReactTags
        tags={tagsState}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={dragNDropHandler}
      />
    </AppContainer>
  );
};
