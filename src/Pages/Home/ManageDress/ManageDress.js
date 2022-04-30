import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTItle/PageTitle";

const ManageDress = () => {
  const { id } = useParams();
  const [dress, setDress] = useState([]);
  const [reload, setReload] = useState(false);
  const [newQuantity, setQuantity] = useState(dress.quantity);
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://secure-reaches-83838.herokuapp.com/dress/${id}`
      );
      setDress(data);
      setQuantity(data?.quantity);
    })();
  }, [id, reload]);

  const handleDeliverBtn = () => {
    const quantity = newQuantity - 1;

    axios
      .put(`https://secure-reaches-83838.herokuapp.com/dress/${id}`, {
        quantity,
      })
      .then((response) => {
        setReload(!reload);
      });
  };

  const handleAddItem = async (event) => {
    event.preventDefault();
    const addquantity = event.target.quantity.value;
    const quantity = parseInt(addquantity) + parseInt(dress?.quantity);
    await axios
      .put(`https://secure-reaches-83838.herokuapp.com/dress/${id}`, {
        quantity,
      })
      .then((response) => {
        setReload(!reload);
        event.target.reset()
      });
  };
  return (
    <div>
      <PageTitle title="Manageinventory"></PageTitle>
      <div className="container mt-5">
        <div className="row">
        <div className="col-sm-12 col-md-6 text-center mx-auto" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <img  className="img-fluid mx-auto text-center" src={dress?.img} alt="" />
          </div>
          <div className="col-md-6 mt-2 mx-auto mb-5"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          >
            <h4>Name:{dress?.dressName}</h4>
            <p>Price:${dress?.price}</p>
            <p>
              Description: <small>{dress?.desc}</small>{" "}
            </p>
            <h4>Supplier Name: {dress?.supplierName}</h4>
            <p>
              Quantity: <small>{dress?.quantity}</small>{" "}
            </p>
            <Form onSubmit={handleAddItem}>
              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder=" quantity"
                  required
                />
              </Form.Group>
              <button className="btn btn-secondary px-5 py-2">add</button>
            </Form>
              <button onClick={handleDeliverBtn} className="btn btn-primary px-4 mt-3 py-2">
                Delivered
              </button>
          </div>
        </div>
       <div className="text-center">
       <button className="mt-5 btn btn-link fs-5" onClick={()=> navigate("/manageinventory")}>Manage inventory</button>
      </div>
       </div>
    </div>
  );
};

export default ManageDress;
