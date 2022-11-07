import './App.css';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Movies  from './components/Movies';
import Series  from './components/Series';
import Spinner from './components/Spinner';
import React,{useState, useEffect} from "react";
import FetchData from "./components/FetchData";
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  const [programs, setPrograms] = useState([])
  const fetchData = async () => {
    const fetchedData = await FetchData();
    setPrograms(fetchedData)
  }
  
  useEffect(() => {
    fetchData()
    },[]);
  return (
    <>
    <Routes>
      <Route element={<Home/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Movies' element={<Movies programs={programs}/>} />
      <Route path='/Series' element={<Series programs={programs}/>} />
      <Route path='/Spinner' element={<Spinner/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>

  );
}

export default App;
