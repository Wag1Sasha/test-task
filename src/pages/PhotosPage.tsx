import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ImageList } from '../components/ImageList';
import { asyncFetchPhotos } from '../redux/actions';

export const PhotosPage = () => {
  const { url } = useParams<ParamTypesUrl>();
  const selectIsOn = (state: IPropsPhotos) => state.photos.fetchedPhotos;
  const state = useSelector(selectIsOn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchPhotos(url));
  }, [url, dispatch]);

  return <ImageList images={state} />;
};
