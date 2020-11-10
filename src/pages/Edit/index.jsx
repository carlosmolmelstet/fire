import React from 'react';

import { 
  Container,
  Wrapper, } from './styles';

// import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';


function Edit() {
  // const [produtos, setProdutos] = useState([]);
  

  // useEffect(()=>{
  //   db.collection('produtos').doc("LOy5COJsnDI9cbdIVCJG").onSnapshot(snapshot=>{
  //     setProdutos(snapshot.docs.map(function(doc){
  //       return {info:doc.data()};
  //     }))
  //   })
  // },[])

  
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
                        <Btn label="EDITAR" />
                      </div>
                    </div>
                  </form>
                   
          </Wrapper>
      </Container>
  );
}

export default Edit;