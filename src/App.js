import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Events from './components/Events';
import PresentTeam from './components/PresentTeam';
import Home from './components/Landing';
import Contact from './components/Contact';
import useColorScheme from './components/useColorScheme'

function App() {
  const dark = useColorScheme('dark')
  console.log(dark)
  return (
    <div>
      <div className={ `max-w-[1600px] items-center justify-between mx-auto back`} >
        <BrowserRouter>
          <Header dark={dark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<PresentTeam />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer dark={dark}/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
