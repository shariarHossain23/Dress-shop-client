import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Mypost = ({post,handleDelete}) => {
    const {dressName, price, img,supplierName, quantity,_id} = post;
    
    return (
        <Col md={4} className="  gx-5 mx-auto"
        data-aos="flip-left">
        <Card className="manage-card">
          <Card.Img className="dress-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name:{dressName}</Card.Title>
            <Card.Text>
                <p>id:{_id}</p>
              <p>
                Price: <small>${price}</small>
              </p>
              <h4>Supplier name :{supplierName}</h4>
              <p>
                quantity: <small>{quantity}</small>
              </p>
            </Card.Text>
            <div onClick={()=> handleDelete(_id)} className="btn btn-danger ">Delete</div>
            
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Mypost;