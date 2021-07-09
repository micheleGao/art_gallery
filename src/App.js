import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

export const DataContext = createContext();
console.log(DataContext);

export default function App() {
  const [images, setImages] = useState([]);
  const apiKey= process.env.REACT_APP_GALLERY_KEY;

  // const apiKey = '20786a6b-b814-4da3-bd58-b0d3a1d65bde';

  let pageNum;
  const getRandomPageNum = () => {
      pageNum = Math.ceil(Math.random() * 100);
  }
  getRandomPageNum();

  const getImages = async () => {
    const url = `https://api.harvardartmuseums.org/image?size=10&page=${pageNum}&apikey=${apiKey}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.records);
      setImages(data.records)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getImages();
  }, [])

  return (
    <DataContext.Provider value={{ images, setImages, getImages }}>
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <main>
          <Switch>
            Hellooo
            <Route path="/gallery" render={() => <Gallery images={images} />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </main>
        <footer><Footer /></footer>
      </div>
    </DataContext.Provider>
  );
}

