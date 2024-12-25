import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './main_page/MainPage';
import Proj from './proj/Proj';
import Hobbies from './hobbies/Hobbies';
import ExpAwards from './exp_awards/ExpAwards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Projects' element={<Proj />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/ExpAwards' element={<ExpAwards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
