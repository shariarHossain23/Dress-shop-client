import { Card, Col } from "react-bootstrap";
import './manageinventory.css';

const ManageInventoryData = ({ dress,handleDelete }) => {
    const {dressName, price, img,supplierName, quantity,_id} = dress;
  return (
  
    <Col md={4} className="  gx-5 mx-auto"
    data-aos="fade-up-right">
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

export default ManageInventoryData;
