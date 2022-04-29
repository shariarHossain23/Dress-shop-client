import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseDresses from "../../../CustomHook/UseDresses";
import ManageInventoryData from "../ManageInventoryData/ManageInventoryData";

const ManageInventories = () => {
  const [dresses] = UseDresses();
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-center mt-4">Manage inventory</h3>
      <div>
        <Container className="mt-5">
          <Row>
            {dresses.map((dress) => (
              <ManageInventoryData
                key={dress._id}
                dress={dress}
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
