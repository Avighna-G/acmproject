import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Memberships from './components/Memberships';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/memberships" element={<Memberships/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
