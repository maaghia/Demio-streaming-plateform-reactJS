import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UnderNavbar from './components/UnderNavbar';
import Card from './components/Card';

function App() {
  const movies =[
    {
      id: 1,
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ%40%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1670345%2F&tbnid=lUhdJTwR1RggZM&vet=12ahUKEwjr1bbQvYv7AhW8hc4BHVTbArAQMygAegUIARDEAQ..i&docid=4Sy5tX_jKawP1M&w=1315&h=2048&q=now%20you%20see%20me&ved=2ahUKEwjr1bbQvYv7AhW8hc4BHVTbArAQMygAegUIARDEAQ",
      title: "Now You See Me",
      rating: "4/5",
      year: 2013,
    },
    {
      id: 2,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt8228288%2F&psig=AOvVaw35Us6fYXg6jQ5_g6YWU7hV&ust=1667341175668000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPiY4YbAi_sCFQAAAAAdAAAAABAJ",
      title: "Platform",
      rating: "3/5",
      year: 2019,
    },
    {
      id: 3,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1457767%2F&psig=AOvVaw2RFesGIxHyeGOlMCpgAFzw&ust=1667341302497000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjjjsPAi_sCFQAAAAAdAAAAABAE",
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
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <UnderNavbar/>
      </header>
      <body>
        <Card/>
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
