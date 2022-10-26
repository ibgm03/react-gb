import React, { useEffect, useState } from "react";
import Text from "./Text";
import usePoke from "../hook/usePoke";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const PokeCard = ({ data }) => {
  const { getPokeData } = usePoke();

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [pokes, setPokes] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    setLoading(true);
    setPokes([]);

    const fetch = async () => {
      const dataPokes = await getPokeData(data.url);
      setPokes({
        name: dataPokes.name,
        img: dataPokes.sprites.front_default,
        types: `${dataPokes.types[0].type.name}`,
      });
      setItem(dataPokes);
      setLoading(false);
    };

    fetch();

    return () => {};
    // eslint-disable-next-line
  }, []);
  const onHandleClick = () => {
    console.log("detialitem", item);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pokes.img || ""} />
              <Card.Body>
                <Card.Title>
                  <Text
                    size="40"
                    lineHeight="100"
                    color="#fffff"
                    className="justify-content"
                  >
                    {pokes.name || data.name}
                  </Text>
                </Card.Title>
                <Button
                  variant="primary"
                  onClick={onHandleClick}
                  href="/detail"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PokeCard;
