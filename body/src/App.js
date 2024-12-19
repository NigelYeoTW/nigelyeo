import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './main_page/MainPage';
import Hobbies from './hobbies/Hobbies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Hobbies' element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
