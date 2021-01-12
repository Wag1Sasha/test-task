import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { asyncFetchPhotos } from '../redux/actions';
import { ImgContainer, PhotoPageWrapper } from '../styled/styledPhotosPage';


export const SingleTagPhotoPage = () => {

  const { tag } = useParams<ParamTypesTag>();
  const selectIsOn = (state: IPropsPhotos) => state.photos.fetchedPhotos
  const state = useSelector(selectIsOn)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchPhotos(tag))
  },[tag,dispatch]);


  return (
    <PhotoPageWrapper>
      {state.map((photo) => (
        <ImgContainer key={Math.random()}>
          <img src={photo.largeImageURL} width="300px" height="300px" alt='search'></img>
        </ImgContainer>
      ))}
    </PhotoPageWrapper>
  );
};