import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import trushBin from '../../../Images/trash-2 9.png';
import PageTitle from "../../Shared/PageTItle/PageTitle";
import "./Manage.css";

const ManageInventories = () => {
  const [dresses, setDresses] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  console.log(limit);

  useEffect(() => {
    axios
      .get(`https://secure-reaches-83838.herokuapp.com/dresspage?limit=${limit}&page=${page}`)
      .then((response) => {
        console.log(response);
        setDresses(response.data);
      });
  }, [limit, page]);
  const handleDelete = (id) => {
    const procced = window.confirm("Do you want to delete?");
    if (procced) {
      axios
        .delete(`https://secure-reaches-83838.herokuapp.com/dress/${id}`)
        .then((response) => {
          toast.success("Successfully deleted");
          if (response.data.deletedCount > 0) {
            const remaining = dresses.filter((dress) => dress._id !== id);
            setDresses(remaining);
          }
        });
    }
  };
  return (
    <div>
      <PageTitle title={"manageitem"}></PageTitle>
      <h3 className="text-center mt-4">Manage inventory</h3>
     <div className="table-responsive">
     <table class="table  align-middle table-striped table-hover">
        <thead>
          <tr className="align-bottom">
            <th scope="col">Supplier Name</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          dresses.map(dress => {
            return   <tr>
            <th scope="row">{dress?.supplierName}</th>
            <td>{dress?.dressName}</td>
            <td>${dress?.price}</td>
            <td>{dress?.quantity}</td>
            <td class="align-top">
            <div onClick={()=>handleDelete(dress?._id)} className="trush">
            <img width={30} height={30}  src={trushBin} alt="" />
            </div>
            </td>
          </tr>
          })
        }
        </tbody>
      </table>
     </div>

      <div>
        <div className="d-flex justify-content-end mt-4">
          {[...Array(5).keys()].map((key) => (
            <div
              onClick={() => setPage(key)}
              className={`border mx-2 border-black px-2 py-1 ${
                page === key ? "bg" : ""
              }`}
            >
              {key + 1}
            </div>
          ))}
          <select onChange={(e) => setLimit(e.target.value)}>
            <option value="5" selected>
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div onClick={() => navigate("/additem")} className="text-center mt-5">
          <button className="inventory-btn">Add-item</button>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
