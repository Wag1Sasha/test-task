import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

import { useImageListHook } from '../hooks/useImageListHook';
import { SpinnerLoader } from './SpinnerLoader';
import { ModalWindow } from './ModalWindow';
import { PhotoPageWrapper, ImgContainer } from '../styled/styledPhotosPage';

export const ImageList = ({ images, loaderState }: IPropsImageList) => {
  const { handleClick, handleClose, currPhoto, show } = useImageListHook();
  const imageList = (
    <Container fluid>
      <Row lg={4} xl={5} md={3} sm={2} xs={1}>
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
  );

  return (
    <PhotoPageWrapper>
      {loaderState ? (
        <SpinnerLoader />
      ) : images.length ? (
        imageList
      ) : (
        <Alert variant="dark">No images on this tag</Alert>
      )}
    </PhotoPageWrapper>
  );
};
