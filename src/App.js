
import './App.css';
import NavBar from './components/NavBar';
import Memberships from './components/Memberships';
import Events from './components/Events';
import Events1819 from './components/Events1819';
import Events1920 from './components/Events1920';
import Events2021 from './components/Events2021';
import Events2122 from './components/Events2122';
import Events2223 from './components/Events2223';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Home from './components/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App overflow-x-hidden text-center">
      <NavBar/>
      <div className='w-full h-screen'>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}>
          <Route path="" element={<Events2223/>}/>
          <Route path="events21-22" element={<Events2122/>}/>
          <Route path="events20-21" element={<Events2021/>}/>
          <Route path="events19-20" element={<Events1920/>}/>
          <Route path="events18-19" element={<Events1819/>}/>
        </Route>
        <Route path="/team" element={<Team/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/memberships" element={<Memberships/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
