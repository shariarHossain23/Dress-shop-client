import axios from "axios";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseDresses from "../../../CustomHook/UseDresses";
import PageTitle from "../../Shared/PageTItle/PageTitle";
import ManageInventoryData from "../ManageInventoryData/ManageInventoryData";

const ManageInventories = () => {
  const [dresses,setDresses] = UseDresses();
  const navigate = useNavigate();

  const handleDelete = id => {
    axios.delete(`https://secure-reaches-83838.herokuapp.com/dress/${id}`)
    .then(response => {
      console.log(response.data);
      if(response.data.deletedCount > 0){
        const remaining = dresses.filter(dress => dress._id !== id)
        setDresses(remaining)
      }
    })
  }
  return (
    <div>
      <h3 className="text-center mt-4">Manage inventory</h3>
      <div>
      <PageTitle title={"manageinventory"}></PageTitle>
        <Container className="mt-5">
          <Row>
            {dresses.map((dress) => (
              <ManageInventoryData
                key={dress._id}
                dress={dress}
                handleDelete={handleDelete}
              ></ManageInventoryData>
            ))}
          </Row>
        </Container>
        <div onClick={() => navigate("/additem")} className="text-center mt-5">
          <button  className="inventory-btn">
            Add-item
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
