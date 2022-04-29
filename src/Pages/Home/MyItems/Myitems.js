import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTItle/PageTitle";
import Mypost from "../Mypost/Mypost";

const Myitems = () => {
    const [posts,myPosts] = useState([])
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    const email = user.email;
    const url = `https://secure-reaches-83838.herokuapp.com/userpost?email=${email}`;
    const getItem = async () => {
     try {
      const { data } = await axiosPrivate.get(url);
      myPosts(data)
       
     } catch (error) {
       if(error.response.status === 401 ||error.response.status === 403){
        signOut(auth)
        navigate('/login')
       }
     }
    };
    getItem();
  }, [user]);
  const handleDelete = id => {
    const procced = window.confirm("Do you want to delete?")
    if(procced){
      axios.delete(`https://secure-reaches-83838.herokuapp.com/dress/${id}`)
      .then(response => {
        toast.success("successfully deleted")
        if(response.data.deletedCount > 0){
          const remaining = posts.filter(post => post._id !== id)
          myPosts(remaining)
        }
      })
    }
  }
  return (
    <div>
        <PageTitle title='mypost'></PageTitle>
      <div>
          <Container>
          <Row>
          {
              posts.map(post => <Mypost key={post._id} post={post}
              handleDelete={handleDelete}></Mypost>)
          }
          </Row>
    </Container>
      </div>
    </div>
  );
};

export default Myitems;
