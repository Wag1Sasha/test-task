import React from 'react';
import { ImgContainer, PhotoPageWrapper } from '../styled/styledPhotosPage';




export const ImageList = ({images}:IPropsImageList) => {


  return (
    <PhotoPageWrapper>
      {images.map((image,index) => (
        <ImgContainer key={index}>
          <img src={image.largeImageURL} width="300px" height="300px" alt='search'></img>
        </ImgContainer>
      ))}
    </PhotoPageWrapper>
  );
};