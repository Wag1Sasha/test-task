import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

export const SpinnerLoader = () => (
  <Button variant="dark" disabled>
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
    Loading...
  </Button>
);
