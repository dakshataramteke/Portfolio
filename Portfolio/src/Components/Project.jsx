
import HeadPhone from '../assets/resumepr/project2.png';
import Foodie from '../assets/resumepr/project3.png';
import DrAqua from '../assets/resumepr/project5.png';
import HotelBooking from '../assets/resumepr/project4.png';
import Wanderlust from '../assets/resumepr/wanderlust.png';
import Books from '../assets/resumepr/bookrest.png';
import skyconnect from '../assets/resumepr/skyconnect.png';
import { Link } from 'react-router-dom'; // Import Link

const Project = () => {
  return (
    <>
      <section id="projects" className="project_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-4">
              <span className="subtitle">My Complete Projects</span>
              <h2>My Latest Project</h2>
              <p>I have created several projects on Frontend as well as backend</p>
              <p className='mt-1'>Click on Cards to see about Projects</p>
            </div>
          </div>
          <div className="row">
            <h2 className='text-center text-md-start'>Frontend Projects</h2>
            {[
              { img: HeadPhone, title: 'HeadPhone Products', link: '/headphone' },
              { img: DrAqua, title: 'Dr Aqua Galaxy', link: '/draqua' },
              { img: Foodie, title: 'Foodie Website', link: '/foodie' },
              { img: HotelBooking, title: 'Hotel Booking', link: '/hotelbooking' },
            ].map((project, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <Link to={project.link} className="card p-0" style={{ textDecoration: 'none' }}>
                  <span
                    className="project-image" // Add a class for styling
                    style={{
                      backgroundImage: `url(${project.img})`,
                      display: 'block',
                      width: '100%',
                      height: '350px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></span>
                  <h6 className="text-center">{project.title}</h6>
                </Link>
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <h2 className='text-center text-md-start'>Backend Projects</h2>
            {[
              { img: Books, title: 'Rest API Books', link: '/books'},
             
  
            ].map((project, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <Link to={project.link} className="card p-0" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      backgroundImage: `url(${project.img})`,
                      display: 'block',
                      width: '100%',
                      height: '350px', 
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></span>
                  <h6 className="text-center">{project.title}</h6>
                </Link>
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <h2 className='text-center text-md-start'>Full Stack Projects</h2>
            {[
              { img: skyconnect, title: 'Sky Connect ', link: '/skyconnect'},
               { img: Wanderlust, title: 'WanderLust', link: '/wanderlust' },
            ].map((project, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <Link to={project.link} className="card p-0" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      backgroundImage: `url(${project.img})`,
                      display: 'block',
                      width: '100%',
                      height: '350px', 
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></span>
                  <h6 className="text-center">{project.title}</h6>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;