import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Headphone from "./Components/Projects/Headphone";
// import Spotify from "./Components/Projects/Spotify";
import DrAqua from "./Components/Projects/DrAqua";
import Foodie from "./Components/Projects/Foodie";
import HotelM from "./Components/Projects/HotelM";
import 'animate.css';
import "./App.css";
import Books from "./Components/Projects/Backend/Books";
import Wanderlust from "./Components/Projects/MERN/Wanderlust";
import SkyConnect from "./Components/Projects/MERN/SkyConnect";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />}>
       
           </Route>
           <Route path="/headphone" element={<Headphone/>}/>
           {/* <Route path="/spotify" element={<Spotify/>}/> */}
           <Route path="/draqua" element={<DrAqua/>}/>
           <Route path="/foodie" element={<Foodie/>}/>
           <Route path="/hotelbooking" element={<HotelM/>}/>
           <Route path="/books" element={<Books/>}/>  
           <Route path="/skyconnect" element={<SkyConnect/>}/> 
           <Route path="/wanderlust" element={<Wanderlust/>}/> 
          

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;