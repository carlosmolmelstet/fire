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

  const initialValue = {
    name: '',
    description: '',
    price: '',
    amont: '',
    image: ''
  }
  

  const [values, setValues] = useState(initialValue)

  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,

    })
  }
  

  function handleCreate() {
    var produtosRef = db.collection("produtos").doc(`${params.id}`);

      return produtosRef.update({
        name: values.name,
        description: values.description,
        price: values.price,
        amont: values.amont,
        image: values.image
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
                        <Input onChange={handleInputChange} name="name" value={values.name} placeholder="Nome" label="nome" />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input onChange={handleInputChange} name="price" value={values.price} placeholder="Proço" label="preço" />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input onChange={handleInputChange} name="amont" value={values.amont} placeholder="Quantidade" label="qtd" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                       <Textarea onChange={handleInputChange} name="description" value={values.description} placeholder="Descrição" label="descrição" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <Input  onChange={handleInputChange} name="image" value={values.image} placeholder="Link da Imagem" label="Imagem" />
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