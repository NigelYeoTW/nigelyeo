import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './main_page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
