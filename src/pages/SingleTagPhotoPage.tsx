import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { asyncFetchPhotos } from '../redux/actions';
import {ImageList} from '../components/ImageList';


export const SingleTagPhotoPage = () => {

  const { tag } = useParams<ParamTypesTag>();
  const selectIsOn = (state: IPropsPhotos) => state.photos.fetchedPhotos
  const state = useSelector(selectIsOn)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchPhotos(tag))
  },[tag,dispatch]);


  return (
    <ImageList images={state} />
  );
};