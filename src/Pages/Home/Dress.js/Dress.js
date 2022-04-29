import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dress.css";

const Dress = ({ dress }) => {
  const { dressName, price, img, desc, supplierName, quantity,_id} = dress;
  const navigate = useNavigate()
  return (
    <Col md={4} className="  gx-5 mx-auto" data-aos="fade-right"  data-aos-offset="300"   data-aos-easing="ease-in-sine">
      <Card className="dress-card" >
        <Card.Img className="dress-img img-fluid" variant="top" src={img} />
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
              <button onClick={()=>navigate(`/dress/${_id}`)} className="card-btn">Manage</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dress;
