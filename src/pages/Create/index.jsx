import React from 'react';

import { 
  Container,
  Wrapper, } from './styles';

import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';


function Home() {
  return (
      <Container>
          <Navbar />
          <Wrapper>
             <h2>ADICIONAR PRODUTO</h2>
            <form>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Input label="nome" />
                </div>
                <div className="col-12 col-sm-4">
                  <Input label="preço" />
                </div>
                <div className="col-12 col-sm-4">
                  <Input label="qtd" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                 <Textarea label="descrição" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <Input label="Imagem" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <Btn label="Imagem" />
                </div>
              </div>
            </form>
          </Wrapper>
      </Container>
  );
}

export default Home;