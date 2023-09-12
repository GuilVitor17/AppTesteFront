import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


function AppCeps() {
  const [ceps, setCeps] = useState(Array(5).fill(''));
  const [cepData, setCepData] = useState([]);

  const handleChange = (e, index) => {
    const newCeps = [...ceps];
    newCeps[index] = e.target.value;
    setCeps(newCeps);
  };

  const fetchCepData = async () => {
    const newData = [];
    for (const cep of ceps) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`); // OBs: o ideal seria colcar em uma avriavel de ambiente, mas como é teste.. deixei dessa forma.
        newData.push(response.data);
      } catch (error) {
        newData.push(null);
      }
    }
    setCepData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCepData();
  };

  return (
    <div className='form'>
      <div> 
      <Form onSubmit={handleSubmit}>
        {ceps.map((cep, index) => (
          <div key={index}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={cep}
                onChange={(e) => handleChange(e, index)}
                placeholder={`CEP ${index + 1}`}
              />
              </Form.Group>
          </div>
        ))}
        <Button type="submit">Consultar CEPs</Button>
      </Form>
      </div>
      <div className='list'>
        {cepData.map((data, index) => (
          <div key={index}>
            {data ? (
              <div>
                <ListGroup>
                  <ListGroup.Item>CEP: {data.cep}</ListGroup.Item>
                  <ListGroup.Item>Logradouro: {data.logradouro}</ListGroup.Item>
                  <ListGroup.Item>Bairro: {data.bairro}</ListGroup.Item>
                  <ListGroup.Item>Cidade: {data.localidade}</ListGroup.Item>
                  <ListGroup.Item>Estado: {data.uf}</ListGroup.Item>
                </ListGroup>
                <br />
                <br />
                
              </div>
            ) : (
              <p>Não foi possível encontrar informações para o CEP {ceps[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppCeps;