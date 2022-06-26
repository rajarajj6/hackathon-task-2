import Header from './components/Header';
import Home from './components/Home';
import Rent from './components/Rent';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import CopyRight from './components/CopyRight';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Rent />
      <Services />
      <About />
      <Reviews />
      <Newsletter />
      <CopyRight />
    </div>
  );
}

export default App;