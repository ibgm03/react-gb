import React, { useEffect, useState } from 'react';
import Text from './Text';
import usePoke from '../hook/usePoke';
import { Row, Col, Container, Card,Button } from 'react-bootstrap';


const PokeCard = ({data}) => {

  const {getPokeData } = usePoke();

  // eslint-disable-next-line
   const [loading, setLoading] = useState(false);
   const [pokes, setPokes] = useState([]);
   const [item, setItem] = useState([]);

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
 
     setLoading(true);
      setPokes([]);
 
     const fetch = async () => {
       const dataPokes = await getPokeData(data.url);
         setPokes({
          name:dataPokes.name,
          img:dataPokes.sprites?.front_default ||dataPokes.sprites?.back_default,
          // img:[dataPokes.sprites.front_default,dataPokes.sprites.front_shiny],
          types:`${dataPokes.types[0].type.name ||''}- ${dataPokes.types[1].type.name ||''}`
         });
         setItem(dataPokes)
       setLoading(false);
     };
 
     fetch();
 
     return () => {
     };
      // eslint-disable-next-line
   }, []);
   const onHandleClick =()=>{

    console.log("detialitem",item)

   }

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Row>
                <Col>
{console.log("ITEM",item)}
          <Card.Title>  
                  <Text
                    size="40"
                    lineHeight="100"
                    color="#fffff"
                    className="justify-content"
                  >{pokes.name ||data.name}</Text>
                </Card.Title>
            <Card.Img variant="top" src={pokes.img} />
              <Card.Body>
            <ul>
                <li>Experience: {item.base_experience}</li>
                <li>Height: {item.height}</li>
                <li>Weight: {item.weight}</li>
                <li>Order: {item.order}</li>
                <li>Types:  {pokes.types}</li>
            </ul>
                </Card.Body>
                </Col>
                </Row>
           </Card>
        </Col>
      </Row>
    </Container>
 
    </>
  )
};

export default PokeCard;
