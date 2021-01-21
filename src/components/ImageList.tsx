import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ModalWindow } from './ModalWindow';
import { PhotoPageWrapper, ImgContainer } from '../styled/styledPhotosPage';
import { Col, Container, Row } from 'react-bootstrap';

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
    window.history.pushState({}, '', '/Photo');
  };

  const handleClose = () => {
    setShow(false);
    history.push(`${currPath}`);
  };

  return (
    <PhotoPageWrapper>
      <Container fluid>
        <Row lg={4} xl={5} md={3} xs={1} sm={2}>
          {images.map((image, index) => (
            <Col key={index} onClick={() => handleClick(image.largeImageURL)}>
              <ImgContainer>
                <img src={image.largeImageURL} width="250px" height="250px" alt="PhotoCard" />
              </ImgContainer>
            </Col>
          ))}
          <ModalWindow image={currPhoto} show={show} handleClose={handleClose} />
        </Row>
      </Container>
    </PhotoPageWrapper>
  );
};
