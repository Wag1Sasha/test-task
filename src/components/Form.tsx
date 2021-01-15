import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface IFormProps {
  handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void,
  handleSubmit:(e: React.FormEvent<HTMLFormElement>)=>void,
  tags:ITagsProps
}


export const Form =({handleChange,handleSubmit,tags}:IFormProps)=>{

  return(
    <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
              type="text"
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              name='tag1'
              value={tags.tag1 || ''}
              onChange={handleChange}
              />
              <FormControl
              type="text"
              name='tag2'
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              value={tags.tag2 || ''}
              onChange={handleChange}
              />
              <FormControl
              type="text"
              name='tag3'
              placeholder="type tags..."
              aria-describedby="basic-addon2"
              value={tags.tag3 || ''}
              onChange={handleChange}
              />
              <InputGroup.Prepend>
                <Button variant="outline-secondary" type="submit">Search</Button>
              </InputGroup.Prepend>
            </InputGroup>
          </form>
  )
}