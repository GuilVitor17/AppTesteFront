import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


function VeiculoForm() {
  const [veiculo, setVeiculo] = useState({
    modelo: '',
    anoFabricacao: 0,
    quantidadePortas: 0,
    marca: '',
  });

  const [listCarros, setListarcarros] = useState([''])

  const cadastrarVeiculo = async () => {
    try {
      const response = await fetch('http://localhost:3001/cadastrar-veiculo', { // OBs: o ideal seria colcar em uma avriavel de ambiente, mas como é teste.. deixei dessa forma.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(veiculo),
      });

      if (response.ok) {
        alert('Veículo cadastrado com sucesso!');
        setVeiculo({
          modelo: '',
          anoFabricacao: 0,
          quantidadePortas: 0,
          marca: '',
        });
      } else {
        alert('Erro ao cadastrar veículo.');
      }
    } catch (error) {
      alert('Erro ao cadastrar veículo.');
    }
  };


  useEffect(() =>{
     const loadcarros = async () =>{
       
      try {
        await axios.get('http://localhost:3001/veiculos') // OBs: o ideal seria colcar em uma avriavel de ambiente, mas como é teste.. deixei dessa forma.
      .then((res) =>{
        console.log(res)
        setListarcarros(res.data.ListarCarros)
      })

      } catch (error) {

        console.log(error)
        
      }
      
     }

     loadcarros()
  },[])

  return (
    <div className='form'>
      <div>

      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Modelo</InputGroup.Text>
            <Form.Control
              type="text"
              value={veiculo.modelo}
              onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })}
            />
      </InputGroup>
        
      </div>
      <div>
      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Ano Fabricação</InputGroup.Text>
            <Form.Control
               type="number"
               value={veiculo.anoFabricacao}
               onChange={(e) =>
                 setVeiculo({ ...veiculo, anoFabricacao: Number(e.target.value) })
               }
            />
      </InputGroup>
        
      </div>
      <div>

      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Portas</InputGroup.Text>
            <Form.Control
               type="number"
               value={veiculo.quantidadePortas}
               onChange={(e) =>
                 setVeiculo({
                   ...veiculo,
                   quantidadePortas: Number(e.target.value),
                 })
               }
            />
      </InputGroup>
        
      </div>
      <div>
      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
            <Form.Control
              type="text"
              value={veiculo.marca}
              onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })}
            />
      </InputGroup>
        
      <Button size='lg' variant="success" onClick={cadastrarVeiculo}>Cadastrar</Button>

      </div>


      <div className='list'>
        {listCarros.map((list,Index) =>

        <div key={Index}>
         <ListGroup>

         <ListGroup.Item>Ano de Fabricacao: {list.anoFabricacao}</ListGroup.Item>
         <ListGroup.Item>Marca: {list.marca}</ListGroup.Item>
         <ListGroup.Item>Modelo: {list.modelo}</ListGroup.Item>
         <ListGroup.Item>Quantidade de Portas: {list.quantidadePortas}</ListGroup.Item>

         </ListGroup>
         <br />
         <br />

        </div>

         
        
        )}
      </div>
    </div>
  );
}

export default VeiculoForm;
