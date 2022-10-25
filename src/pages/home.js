import React  ,{useEffect,useState}from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import List from '../components/List'
import usePoke from '../hook/usePoke'
const appi= "https://pokeapi.co/api/v2/pokemon/1/"

const Home = () => {
  const [data, setData]= useState() 
  const {getPoke}= usePoke()


  useEffect(() => {
    const Poke = async () => {
      const h=[]
      const res = await getPoke()
      console.log("RESPONSE--> 1",res)
       const newres = res.map(a=>{
        return a
    })
    console.log("newres--> 2",newres)

      setData(newres)
        console.log("DATA--->",data)
      }
     
   Poke()

  },[])

  return (
    <>    
    <Container>
      <Row>
        <Col>
         {
      /*     data.map(item=>(
                 <Col xs="12" lg="9">
          <Container className="h-100 mh-100 m-0 d-flex align-items-start flex-column justify-content-around" >
            <Row >
              <Col >
          {item.name}
              </Col>
            </Row>
            <Row >
              <Col >
          {item.url}
              </Col>
            </Row>
          </Container>
        </Col>
          )) */


         }
          </Col>
      </Row>
    </Container>
    </>

  
  );
};

export default Home;