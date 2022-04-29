import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ManageDress = () => {
  const { id } = useParams();
  const [dress, setDress] = useState([]);
  const [reload,setReload]= useState(false)
  const [newQuantity, setQuantity] = useState(dress.quantity);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://secure-reaches-83838.herokuapp.com/dress/${id}`);
      setDress(data);
      setQuantity(data?.quantity);
    })();
  }, [id,reload]);

  const handleDeliverBtn = () => {
    const quantity = newQuantity - 1;
    
    axios
      .put(`https://secure-reaches-83838.herokuapp.com/dress/${id}`, { quantity })
      .then((response) => {
        console.log(response);
        setReload(!reload)
      });
  };
  

  const handleAddItem = async (event) => {
    event.preventDefault();
    const addquantity = event.target.quantity.value;
    const quantity = parseInt(addquantity) + parseInt(dress?.quantity);
    await axios
      .put(`https://secure-reaches-83838.herokuapp.com/dress/${id}`, { quantity })
      .then((response) => {
        console.log(response.config.data);
        setReload(!reload)
      });
  };
  return (
    <div>
      {/* daynamic rote manage inventory kora lagbe */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Card style={{ width: "30rem" }}>
              <Card.Img className="dress-img" variant="top" src={dress?.img} />
              <Card.Body>
                <Card.Title>Name:{dress?.dressName}</Card.Title>
                <Card.Text>
                  <p>Price:{dress?.price}</p>
                  <p>
                    About: <small>{dress?.desc}</small>{" "}
                  </p>
                  <h4>Supplier Name:{dress?.supplierName}</h4>
                  <p>Quantity:{dress?.quantity}</p>
                </Card.Text>
              </Card.Body>
              <div className="mt-5 ms-4 ">
                <Form onSubmit={handleAddItem}>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Control
                      type="number"
                      name="quantity"
                      placeholder=" quantity"
                      required
                    />
                  </Form.Group>
                  <button className="btn btn-secondary px-5">add</button>
                </Form>
              </div>
              <div className="mt-4 mb-5 ms-4 ">
                <button  onClick={handleDeliverBtn} className="card-btn ">
                  Delivered
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDress;
