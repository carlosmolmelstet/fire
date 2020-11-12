import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import { 
  Container,
  Wrapper, } from './styles';

// import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';

import {db} from "../../firebase";



function Edit() {
  const params = useParams();
  const [produtos, setProdutos] = useState([]);
  

  function handleCreate() {
    var produtosRef = db.collection("produtos").doc(`${params.id}`);

      return produtosRef.update({
          name: "produto novo y",
          description: "nova descriçao y",
          price: 99,
          amont: 100
      })
      .then(function() {
          console.log("Document successfully updated!");
      })
      .catch(function(error) {
          console.error("Error updating document: ", error);
      });
  }

  
  return (
      <Container>
          <Navbar />
          <Wrapper>
             <h2>EDITAR PRODUTO</h2>

                    <form>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <Input  label="nome" />
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
                          <Btn onClick={handleCreate} label="EDITAR" />
                        </Link>
                      </div>
                    </div>
                  </form>
                   
          </Wrapper>
      </Container>
  );
}

export default Edit;