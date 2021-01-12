import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { ItemWrapper } from '../styled/styledFormPage';

type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never

export function elemT<T>(array: T): Array<ArrayElem<T>> {
  return array as any
}



export const TagsList = ({handleClick, handleDelete, tagsState}:PropsTypeTagsList) => {
  
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Header>Last tags :</Card.Header>
      <ListGroup variant="flush">
        {elemT(tagsState).map((tag,i) => (
          <ItemWrapper key={Math.random()}>
            <ListGroup.Item onClick={()=>handleClick(tag)}>{tag}</ListGroup.Item>
            <Button variant="secondary" onClick={()=>{handleDelete(i)}}>Delete</Button>
          </ItemWrapper>
        ))}
      </ListGroup>
    </Card>
  )
}