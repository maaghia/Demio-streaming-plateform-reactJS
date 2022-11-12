import './App.css';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Movies  from './components/Movies';
import Series  from './components/Series';
import Spinner from './components/Spinner';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
 
  return (
    <>
    <Routes>
      <Route element={<Home/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Movies' element={<Movies/>} />
      <Route path='/Series' element={<Series/>} />
      <Route path='/Spinner' element={<Spinner/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>

  );
}

export default App;
