import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Skills from './routes/Skills';
import Rese from './routes/Works/Rese';
import Share from './routes/Works/Share';



function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Works/rese" element={<Rese />} />
        <Route path="/Works/share" element={<Share />} />
      </Routes>
      <Footer className='fixed-bottom' />
    </div>
  );
}

export default App;
