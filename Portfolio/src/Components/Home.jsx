// import React from 'react';
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";

// import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center text-md-start">
              <h1>Dakshata Ramteke</h1>
              <h6>I'm a Junior <span style={{color:'#fff'}}> MERN Developer / React JS Developer</span></h6>
              <div className="mt-4">
              {/* <NavLink href="https://github.com/dakshataramteke" className="bg-white fs-2 me-3"><FaGithub/></NavLink> */}
              {/* <NavLink href="https://www.linkedin.com/in/dakshata-ramteke-20689126a/" className="bg-white fs-2 me-3"><FaLinkedin/></NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;