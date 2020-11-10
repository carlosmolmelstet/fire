import React from 'react';

import { 
  Container,
  Wrapper, } from './styles';

import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';


function Create(e) {
  function handleCreate() {
    db.collection("produtos").add({
      name: "teste",
      description: "teste descri",
      price: 16,
      amont: 165
  })
  }



      
  
  

   
    
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
                  <Link to="/">
                    <Btn onClick={handleCreate}  label="ADICIONAR" />
                  </Link>
                </div>
              </div>
            </form>
          </Wrapper>
      </Container>
  );
}

export default Create;