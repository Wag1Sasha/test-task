import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

import { useFormHook } from '../hooks/useFormHook';
import { ImageList } from '../components/ImageList';
import { TagsContainer } from '../styled/styledPhotosPage';
import '../vendors/react-tags-input.css';

export const FormPage = () => {
  const { tagsState, imagesState, handleDelete, handleAddition, dragNDropHandler, loaderState } = useFormHook();
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
      <ImageList images={imagesState} loaderState={loaderState} />
    </>
  );
};
