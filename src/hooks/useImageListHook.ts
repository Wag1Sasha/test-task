import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useImageListHook = () => {
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

  return {
    handleClick,
    handleClose,
    currPhoto,
    show,
  };
};
