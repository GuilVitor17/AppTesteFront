import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CepImg from '../components/img/cep.jpg'
import PaliImg from '../components/img/pali.jpg'
import TrocoImg from '../components/img/troco.jpg'
import VeiculoImg from '../components/img/veiculos.jpg'
import { Link } from 'react-router-dom';



function AppOptions() {


  return (
    <div className="App">

      <div className='testes'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={PaliImg} />
        <Card.Body>
          <Card.Title>Teste 1 - palíndromos</Card.Title>
          <Card.Text>
          Números palíndromos são aqueles que escritos da direita para
           esquerda ou da esquerda para direita tem o mesmo valor
          </Card.Text>
          <Link to={'/polidromos'}><Button variant="primary">Ver Sistema</Button></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={TrocoImg} />
        <Card.Body>
          <Card.Title>Teste 2 - Caixa Troco</Card.Title>
          <Card.Text>
           Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais.
           Considerando que alguém está pagando uma compra.

          </Card.Text>
          <Link to={'/caixatroco'}><Button variant="primary">Ver Sistema</Button></Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={VeiculoImg} />
        <Card.Body>
          <Card.Title>Teste 3 - Veiculos </Card.Title>
          <Card.Text>
          	Precisamos controlar melhor os dados de alguns veículos
            que ficam na nossa garagem

          </Card.Text>
         <Link to={'/veiculos'}><Button variant="primary">Ver Sistema</Button></Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CepImg} />
        <Card.Body>
          <Card.Title>Teste 4 - Ceps</Card.Title>
          <Card.Text>
          Deve ser informado pelo usuário 5 CEP’s, 
          a aplicação deve consumir a api VIACep 
          </Card.Text>
          <Link to={'/appceps'}><Button variant="primary">Ver Sistema</Button></Link>
        </Card.Body>
      </Card>
      </div>



    </div>
  );
}

export default AppOptions;
