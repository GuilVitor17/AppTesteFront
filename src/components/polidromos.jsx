import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import './global-styles.css'



class PalindromeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      palindromes: [],
    };
  }


  //pegando valore incial e fim 
  handleStartChange = (event) => {
    this.setState({ start: event.target.value });
  };

  handleEndChange = (event) => {
    this.setState({ end: event.target.value });
  };


  //quando eu clicar ele vai ferificar todos o polimetros 
  findPalindromes = () => {
    const { start, end } = this.state;
    const palindromes = [];

    for (let i = parseInt(start); i <= parseInt(end); i++) {
      if (this.isPalindrome(i.toString())) {
        palindromes.push(i);
      }
    }

    this.setState({ palindromes });
  };

  isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };

  render() {
    const { palindromes } = this.state;

    return (
      <div className='form'>
        
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Início do Intervalo</InputGroup.Text>
            <Form.Control
              type="number"
              id="start"
              value={this.state.start}
              onChange={this.handleStartChange}
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Fim do Intervalo</InputGroup.Text>
            <Form.Control
              type="number"
              id="end"
              value={this.state.end}
              onChange={this.handleEndChange}
            />
          </InputGroup>
          <Button size='lg' variant="success" onClick={this.findPalindromes}>Encontrar Palíndromos</Button>

        </div>
        <div className='list'>
          <h3>Números Palíndromos encontrados:</h3>
            {/* listar todos o numeros polidromos */}
          <ListGroup>

            {palindromes.map((num) => (
            <ListGroup.Item key={num}>{num}</ListGroup.Item>
            ))}
          </ListGroup>


        </div>
      </div>
    );
  }
}

export default PalindromeFinder;
