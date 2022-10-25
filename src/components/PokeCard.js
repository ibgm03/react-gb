import React from 'react';
import Text from './Text';
import { Row, Col, Container, Card,Button } from 'react-bootstrap';


const PokeCard = ({data}) => {

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
             <Card.Title>  
              <Text
                size="50"
                lineHeight="100"
                color="#fffff"
                className="justify-content"
              >{data.name}</Text>
              </Card.Title>
          <Card.Text>
          {data.url}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card >
      <Row> 
        <Col xs="12" lg="9"   style={{ backgroundColor: 'red' }}>
          <Container className="h-100 mh-100 m-0 d-flex align-items-start flex-column justify-content-around" >
            <Row >
              <Col >
              </Col>
            </Row>
            <Row >
              <Col >
          {data.url}
              </Col>
            </Row>
          </Container>
        </Col>
   
      </Row>
    </Card>
      </Col>
      </Row></Container>
 
    </>
  )
};

export default PokeCard;
