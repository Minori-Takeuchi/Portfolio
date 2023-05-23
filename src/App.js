import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Skills from './routes/Skills';
import WorkDetail from './routes/Works/WorkDetail';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export default App;
