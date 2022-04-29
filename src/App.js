import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Additem from './Pages/Home/Additem/Additem';
import HomePage from './Pages/Home/HomePage/HomePage';
import ManageDress from './Pages/Home/ManageDress/ManageDress';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path='/'element={<HomePage></HomePage>}></Route>
        <Route path='dress/:id'element={<ManageDress></ManageDress>}></Route>   {/* private route kora lagbe */}
        <Route path='/manageinventory' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/additem'element={<Additem></Additem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
