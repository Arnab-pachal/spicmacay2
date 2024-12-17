import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Events from './components/Events.jsx';
import PresentTeam from './components/PresentTeam.jsx';
import Home from './components/Landing.jsx';
import Contact from './components/Contact.jsx';
import Video from './components/video.jsx';
import Login from './components/login.jsx';
import useColorScheme from './components/useColorScheme.js';


function App() {
  const dark = useColorScheme('dark');

  return (
    <div className={`max-w-[1600px] items-center justify-between mx-auto ${dark ? 'dark-theme' : 'light-theme'}`}>
      <BrowserRouter>
        <Header dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video" element={<Video />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<PresentTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
        <Footer dark={dark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
