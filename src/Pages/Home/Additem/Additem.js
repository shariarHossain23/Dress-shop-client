import React from "react";
import './additem.css';

const Additem = () => {
  // dressName, price, img,supplierName, quantity,desc

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 mx-auto form-group">
              <h3 className="mb-4">Add Your Product</h3>
            <form action="">
              <input type="text" name="product" id="" placeholder="ProductName" required />
              <input type="number" name="price" id="" placeholder="price" required />
              <input type="text" name="imgUrl" id="" placeholder="img-url" required />
              <input type="text" name="desc" id="" placeholder="description" required />
              <input type="text" name="supplierName" id="" placeholder="supplier Name" required />
              <input type="text" name="quantity" id="" placeholder="quantity" required />
             <input type="button" className="inventory-btn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additem;
