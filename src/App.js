import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Additem from './Pages/Home/Additem/Additem';
import HomePage from './Pages/Home/HomePage/HomePage';
import ManageDress from './Pages/Home/ManageDress/ManageDress';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import Myitems from './Pages/Home/MyItems/Myitems';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import Signup from './Pages/Shared/Signup/Signup';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <ToastContainer></ToastContainer>
       <Header></Header> 
      <Routes>
         <Route path='/'element={<HomePage></HomePage>}></Route>
        <Route path='/home'element={<HomePage></HomePage>}></Route> 
        <Route path='dress/:id'element={
          <PrivateRoute>
            <ManageDress></ManageDress>
          </PrivateRoute>
        }></Route>  
        <Route path='/manageinventory' element={
          <PrivateRoute>
            <ManageInventories></ManageInventories>
          </PrivateRoute>
        }></Route>
        <Route path='/additem'element={
          <PrivateRoute>
            <Additem></Additem>
          </PrivateRoute>
        }></Route>
        <Route path='/myitems' element={<PrivateRoute>
          <Myitems></Myitems>
        </PrivateRoute>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/blogs'element={<Blog></Blog>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
        {/* <Fotter></Fotter> */}
    </div>
  );
}

export default App;
