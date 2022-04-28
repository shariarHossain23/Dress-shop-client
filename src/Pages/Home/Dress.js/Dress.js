import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Dress.css";

const Dress = ({ dress }) => {
  const { dressName, price, img, desc, supplierName, quantity } = dress;
  return (
    <Col md={4} className="  gx-5 mx-auto">
      <Card className="dress-card" >
        <Card.Img className="dress-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name:{dressName}</Card.Title>
          <Card.Text>
            <p>
              Price: <small>{price}</small>
            </p>
            <p>About: <small>{desc.slice(30)}</small> </p>
            <h4>Supplier name :{supplierName}</h4>
            <p>
              quantity: <small>{quantity}</small>
            </p>
          </Card.Text>
          <div>
              <button className="card-btn">Manage</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dress;
