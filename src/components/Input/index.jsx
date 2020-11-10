import React from 'react';

import { Container } from './styles';

function Input(props) {
  return (
      <Container>
          <h5 className="label">{props.label}</h5>
          <input value={props.value} type="text"/>
      </Container>
  );
}

export default Input;