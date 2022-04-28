import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage/HomePage';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
