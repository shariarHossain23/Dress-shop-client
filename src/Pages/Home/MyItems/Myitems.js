import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTItle/PageTitle";
import Mypost from "../Mypost/Mypost";

const Myitems = () => {
    const [posts,myPosts] = useState([])
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;
    const url = `https://secure-reaches-83838.herokuapp.com/userpost?email=${email}`;
    const getItem = async () => {
      const { data } = await axiosPrivate.get(url);
       myPosts(data)
    };
    getItem();
  }, [user]);
  const handleDelete = id => {
    axios.delete(`https://secure-reaches-83838.herokuapp.com/dress/${id}`)
    .then(response => {
      console.log(response.data);
      if(response.data.deletedCount > 0){
        const remaining = posts.filter(post => post._id !== id)
        myPosts(remaining)
      }
    })
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
