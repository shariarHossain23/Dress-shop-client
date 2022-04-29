import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseDresses from "../../../CustomHook/UseDresses";
import PageTitle from "../../Shared/PageTItle/PageTitle";
import Dress from "../Dress.js/Dress";

const Dresses = () => {
  const [dresses] = UseDresses();
  const navigate = useNavigate()
  return (
    <div>
      <PageTitle title={"Home"}></PageTitle>
      <h1 className="text-center mt-5">Dress Collection</h1>
      <div>
        <Container>
          <Row className="gx-5">
              {dresses.slice(0, 6).map((dress) => (
                <Dress key={dress._id} dress={dress}></Dress>
              ))}
           
          </Row>
         <div className="text-center">
         <button onClick={()=>navigate('/manageinventory')} className="btn btn-link  mt-4 outline-none fs-5">Manage Inventory</button>
         </div>
        </Container>
      </div>
    </div>
  );
};

export default Dresses;
