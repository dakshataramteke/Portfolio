import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
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
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/project" element={<ProjectPage />}>
       
           </Route>
           <Route path="/headphone" element={<Headphone/>}/>
           {/* <Route path="/spotify" element={<Spotify/>}/> */}
           <Route path="/draqua" element={<DrAqua/>}/>
           <Route path="/foodie" element={<Foodie/>}/>
           <Route path="/hotelbooking" element={<HotelM/>}/>
           <Route path="/books" element={<Books/>}/>  
           <Route path="/skyconnect" element={<SkyConnect/>}/> 
           <Route path="/wanderlust" element={<Wanderlust/>}/> 
          

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;