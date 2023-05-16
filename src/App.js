import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Sns from './routes/Sns';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sns" element={<Sns />} />
      </Routes>
      <Footer className='fixed-bottom' />
    </div>
  );
}

export default App;
