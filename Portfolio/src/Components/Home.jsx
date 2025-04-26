// import React from 'react';
// import resume from '../assets/DakshataRamteke.pdf'; // Adjust the path as necessary
// import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center text-md-start">
              <h1>Dakshata Ramteke</h1>
              <h6>I m a fresher <span style={{color:'#fff'}}> MERN Developer / React JS Developer</span></h6>
              <div className="mt-4"></div>
              
              {/* <Link
                  to={'../assets/DakshataRamteke.pdf'}
                  onClick={() => alert('Downloaded Resume')} 
                  target="_blank" 
                  className="main_btn" 
                  // download
              >
                  Download CV
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;