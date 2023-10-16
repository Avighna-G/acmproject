import './App.css';
import NavBar from './components/NavBar';
import Memberships from './components/Memberships';
import Events from './components/Events';
import Events2223 from './components/Events2223';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Home from './components/Home';
import UpComingEvns from './components/UpComingEvns';
import { Route, Routes, Navigate } from 'react-router-dom';
import { events5 } from './jsonfiles/Events5';
import ScrollUpButton from "react-scroll-up-button";
import Footer from './components/Footer';
import {FaLinkedinIn,FaGithub} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
function App() {
  return (
    <div className="App text-center">
      <NavBar/>
      <div className='w-full h-screen pt-[10vh]'>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}>
          <Route path="/events" element={<Navigate replace to="events22-23"/>}/>
          <Route path="events22-23" element={<Events2223 props={{year:"2022 - 2023", imgspath:'events5', eventsjson:events5}}/>}/>
          <Route path="events21-22" element={<Events2223 props={{year:"2021 - 2022"}}/>}/>
          <Route path="events20-21" element={<Events2223 props={{year:"2020 - 2021"}}/>}/>
          <Route path="events19-20" element={<Events2223 props={{year:"2019 - 2020"}}/>}/>
          <Route path="events18-19" element={<Events2223 props={{year:"2018 - 2019"}}/>}/>
          <Route path="upcoming" element={<UpComingEvns/>}/>
        </Route>
        <Route path="/team" element={<Team/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/memberships" element={<Memberships/>}/>
        </Routes>
        <Footer/>
        <ScrollUpButton style={{width:'30px',height:'30px', borderRadius:'50%' , marginBottom:'10px',backgroundColor:'rgb(1, 1, 56)'}}/>
      </div>
      <div className="z-600 lg:flex fixed top-[70%] flex-col ">
        <ul>
          <li className="flex items-center w-[145px] h-[50px] justify-around bg-blue-600 ml-[-90px] hover:ml-[0px] duration-300">
            <a
              href="https://www.linkedin.com/company/acm-vnrvjiet/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[100px] h-[50px] justify-between text-white pl-[5px]"
            >
              LinkedIn
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="flex items-center w-[120px] h-[50px] justify-between bg-slate-600 ml-[-65px] hover:ml-[0px] duration-300">
            <a
              href="https://github.com/acmvnrvjiet"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[100px] h-[50px] justify-between text-white pl-[5px]"
            >
              GitHub
              <FaGithub size={20} />
            </a>
          </li>
          <li className="flex items-center w-[120px] h-[50px] justify-between bg-red-700 ml-[-65px] hover:ml-[0px] duration-300">
            <a
              href="http://discordapp.com/users/920520844176932925"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[100px] h-[50px] justify-between text-white pl-[5px]"
            >
              Discord
              <BsDiscord size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
