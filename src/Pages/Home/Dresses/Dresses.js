import React from "react";
import { Container, Row } from "react-bootstrap";
import UseDresses from "../../../CustomHook/UseDresses";
import Dress from "../Dress.js/Dress";

const Dresses = () => {
  const [dresses] = UseDresses();
  return (
    <div>
      <h1 className="text-center mt-5">Dress Collection</h1>
      <div>
        <Container>
          <Row className="gx-5">
              {dresses.slice(0, 6).map((dress) => (
                <Dress key={dress._id} dress={dress}></Dress>
              ))}
           
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dresses;
