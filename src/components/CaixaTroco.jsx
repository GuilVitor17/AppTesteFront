import React, { useState } from 'react';
import './global-styles.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';




function Troco() {
 
  //pegando valores de troco de usuarios 
  const [valorCompra, setValorCompra] = useState(0);
  const [valorPago, setValorPago] = useState(0);
  const [troco, setTroco] = useState(0);
  const [notas100, setNotas100] = useState(0);
  const [notas10, setNotas10] = useState(0);
  const [notas1, setNotas1] = useState(0);
   

 //calculalar valor quando clicar   
  const calcularTroco = async () => {
    const trocoCalculado = valorPago - valorCompra;

    if (trocoCalculado < 0) {
      alert('O valor pago é insuficiente.');
      return;
    }

    setTroco(trocoCalculado);
    
    const notas100Calculadas = Math.floor(trocoCalculado / 100);
    const restante100 = trocoCalculado % 100;
    setNotas100(notas100Calculadas);

    const notas10Calculadas = Math.floor(restante100 / 10);
    const restante10 = restante100 % 10;
    setNotas10(notas10Calculadas);

    const notas1Calculadas = restante10;
    setNotas1(notas1Calculadas);

   
  };

  

  return (
    <div className='form'>
      <div> 
      <h1>Calculadora de Troco</h1>
      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Valor da Compra</InputGroup.Text>
            <Form.Control
              type="number"
              value={valorCompra}
              onChange={(e) => setValorCompra(Number(e.target.value))}
            />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Valor Pago</InputGroup.Text>
            <Form.Control
               type="number"
               value={valorPago}
               onChange={(e) => setValorPago(Number(e.target.value))}
            />
      </InputGroup>
      <br />
      <Button size='lg' variant="success" onClick={calcularTroco}>Calcular Troco</Button>
      </div>
      <div className='list'>
      

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Notas de R$ 100</th>
          <th>Notas de R$ 10</th>
          <th>Notas de R$ 1</th>
          <th>Troco</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{notas100}</td>
          <td>{notas10}</td>
          <td>{notas1}</td>
          <td>{troco}</td>
        </tr>
        
      </tbody>
    </Table>
      
      
      
      
      </div>
      
    </div>
  );
}

export default Troco;