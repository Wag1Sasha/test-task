import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';

import {deleteTag,eventSubmit,dragNDrop} from '../redux/ducks/TagsDucks';
import {asyncFetchPhotos}  from '../redux/ducks/PhotosDucks';
import { TagsContainer } from '../styled/styledPhotosPage';
import '../vendors/react-tags-input.css';
import { ImageList } from '../components/ImageList';

export const FormPage = () => {
  const dispatch = useDispatch();
  const tags = (state: TagsState) => state.tags.tags;
  const tagsState = useSelector(tags);
  const images = (state: IPropsPhotos) => state.photos.fetchedPhotos;
  const imagesState = useSelector(images);

  const handleDelete = (index: number) => {
    dispatch(deleteTag(index));
  };

  const handleAddition = (tag: TagPropsType) => {
    dispatch(eventSubmit(tag));
    dispatch(asyncFetchPhotos(tag.text));
  };

  const dragNDropHandler = ({ tag, currPos, newPos }: any): void => {
    const newTags = tagsState.slice();
    tag = newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, ...tag);
    dispatch(dragNDrop(newTags));
  };

  return (
    <>
      <TagsContainer>
        <ReactTags
          tags={tagsState}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={dragNDropHandler}
        />
      </TagsContainer>
      <ImageList images={imagesState} />
    </>
  );
};
