import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

import {ItemWrapper,LastTagsWrapper} from '../styled/styledFormPage';


export const TagsList = ({handleClick,handleDelete,tagsState}: PropsTypeTagsList) => {

  return(
   <LastTagsWrapper>
     <Card>
        <Card.Header>Last tags :</Card.Header>
        <ListGroup variant="flush" >
          {tagsState.map((tag,index)=>(
            <ItemWrapper key={index}>
              <ListGroup.Item as="span" action onClick={()=>{handleClick(tag)}}>{tag}</ListGroup.Item >
              <Button as="button" variant="secondary" size="sm" onClick={()=>{handleDelete(index)}}>delete</Button>
            </ItemWrapper>
       ))}
        </ListGroup>
      </Card>
    </LastTagsWrapper> 
  );
};