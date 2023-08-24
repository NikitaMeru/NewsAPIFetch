// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './component/NavigationBar';
import { Home } from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopHeadLines } from './component/TopHeadLines';
import { AllNews } from './component/AllNews';


function App() {
  return (
    
    <BrowserRouter>
      <NavigationBar></NavigationBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/top-headlines" element={<TopHeadLines></TopHeadLines>}></Route>
        <Route path='/all-news' element={<AllNews></AllNews>}></Route>
      </Routes>

      {/* <Routes>
        
      </Routes> */}

    </BrowserRouter>
  );
}

export default App;
