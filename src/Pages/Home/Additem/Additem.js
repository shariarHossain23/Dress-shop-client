import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTItle/PageTitle";
import "./additem.css";

const Additem = () => {
  const [user] = useAuthState(auth)
  const email = user?.email
  const handleAddItem = (event) => {
    event.preventDefault();
    const dressCollection = {
      dressName: event.target.product.value,
      price: event.target.price.value,
      img: event.target.imgUrl.value,
      desc: event.target.desc.value,
      supplierName: event.target.supplierName.value,
      quantity: event.target.quantity.value,
      email:email
    };
    axiosPrivate.post("http://localhost:5000/dress",dressCollection)
    .then(response => {
        toast.success("product upload successfully")
        event.target.reset()
    })
  };
  return (
    <div>
      <PageTitle title="additem"></PageTitle>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 mx-auto form-group">
              <PageTitle title='additem'></PageTitle>
            <h3 className="mb-4">Add Your Product</h3>
            <Form onSubmit={handleAddItem} className="">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="product" type="text" placeholder="Product Name" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="price" type="number" placeholder="Price" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="imgUrl" type="text" placeholder="img-url" required />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control name="desc" type="text" placeholder="Description" required />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control name="supplierName" type="text" placeholder="supplierName" required />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control name="quantity" type="text" placeholder="Quantity" required />
              </Form.Group>
            <div className="text-center">
            <Button className="inventory-btn" variant="primary" type="submit">
                Submit
              </Button>
            </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additem;
