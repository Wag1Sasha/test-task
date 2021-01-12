import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

import {ItemWrapper} from '../styled/styledFormPage';

type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never

export function elemT<T>(array: T): Array<ArrayElem<T>> {
  return array as any
}

export const TagsList = ({handleClick,handleDelete,tagsState}:PropsTypeTagsList) => {


  return(
    <Card style={{ width: '18rem' }} >
      <Card.Header>Last tags :</Card.Header>
      <ListGroup variant="flush" >
        {elemT(tagsState).map((tag,i)=>(
          <ItemWrapper key={Math.random()}>
            <ListGroup.Item as="span" action onClick={()=>{handleClick(tag)}}>{tag}</ListGroup.Item >
            <Button as="button" variant="secondary" size="sm" onClick={()=>{handleDelete(i)}}>delete</Button>
          </ItemWrapper>
      ))}
      </ListGroup>
    </Card>
  );
};