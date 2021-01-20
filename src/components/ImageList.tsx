import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ModalWindow } from './ModalWindow';
import { ImgContainer, PhotoPageWrapper } from '../styled/styledPhotosPage';

export const ImageList = ({ images }: IPropsImageList) => {
  const location = useLocation().pathname;
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [currPhoto, setCurrPhoto] = useState('');
  const [currPath, setCurrPath] = useState('');

  const handleShow = () => {
    setCurrPath(location);
    setShow(true);
  };

  const handleClick = (url: string) => {
    handleShow();
    setCurrPhoto(url);
    history.push(`${location}/Photo`);
  };

  const handleClose = () => {
    setShow(false);
    history.push(`${currPath}`);
  };

  return (
    <PhotoPageWrapper>
      {images.map((image, index) => (
        <ImgContainer key={index} onClick={() => handleClick(image.largeImageURL)}>
          <img src={image.largeImageURL} width="300px" height="300px" alt="PhotoCard" />
        </ImgContainer>
      ))}
      <ModalWindow image={currPhoto} show={show} handleClose={handleClose}></ModalWindow>
    </PhotoPageWrapper>
  );
};
