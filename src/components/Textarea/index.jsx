import React from 'react';

import { Container } from './styles';

function Textarea(props) {
  return (
      <Container>
          <h5 className="label">{props.label}</h5>
          <textarea  name={props.name} type="text"/>
      </Container>
  );
}

export default Textarea;