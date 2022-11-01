import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UnderNavbar from './components/UnderNavbar';
import Card from './components/Card';
import Home from './components/Home';

function App() {
  const movies =[
    {
      id: 1,
      image: "",
      title: "Now You See Me",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 2,
      image: "",
      title: "Platform",
      rating: "3/5",
      year: 2019,
    },
    {
      id: 3,
      image: "",
      title: "The Conjuring",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 1,
      image: "",
      title: "Now You See Me",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 2,
      image: "",
      title: "Platform",
      rating: "3/5",
      year: 2019,
    },
    {
      id: 3,
      image: "",
      title: "The Conjuring",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 2,
      image: "",
      title: "Platform",
      rating: "3/5",
      year: 2019,
    },
    {
      id: 3,
      image: "",
      title: "The Conjuring",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 2,
      image: "",
      title: "Platform",
      rating: "3/5",
      year: 2019,
    },
    {
      id: 3,
      image: "",
      title: "The Conjuring",
      rating: "4/5",
      year: 2013,
    },
    
  ]

  const series =[
    {
      id: 1,
      image: "",
      title: "Manifest",
      rating: "4/5",
      seasons: 4,
    },
    {
      id: 2,
      image: "",
      title: "Grey's Anatomy",
      rating: "3/5",
      seasons: 19,
    },
    {
      id: 3,
      image: "",
      title: "Revenge",
      rating: "2/5",
      seasons: 4,
    },
    {
      id: 4,
      image: "",
      title: "Good Doctor",
      rating: "4/5",
      seasons: 6,
    },
    {
      id: 5,
      image: "",
      title: "The Walking Dead",
      rating: "4/5",
      seasons: 16,
    },
    {
      id: 6,
      image: "",
      title: "Breaking Bad",
      rating: "4/5",
      seasons: 3,
    },
    {
      id: 5,
      image: "",
      title: "The Walking Dead",
      rating: "4/5",
      seasons: 16,
    },
    {
      id: 6,
      image: "",
      title: "Breaking Bad",
      rating: "4/5",
      seasons: 3,
    },
    {
      id: 7,
      image: "",
      title: "La Casa De Papel",
      rating: "4/5",
      seasons: 3,
    },
    {
      id: 6,
      image: "",
      title: "Breaking Bad",
      rating: "4/5",
      seasons: 3,
    },
    {
      id: 7,
      image: "",
      title: "La Casa De Papel",
      rating: "4/5",
      seasons: 3,
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
       <div><Navbar/></div> 
       <div> <UnderNavbar/></div>
      </header>
      
      <body>
        <div className='home'>
          <Home/>
        </div>
        <div className='series'>
        {series.map((serie) => {
          return <Card key={serie.id} />;
        })}
        </div>
        <div className='movies'>
        {movies.map((movie) => {
          return <Card key={movie.id} />;
        })}
        </div>
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
