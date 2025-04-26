import HeadPhone from '../assets/resumepr/project2.png';
import Foodie from '../assets/resumepr/project3.png';
import Spotify from '../assets/resumepr/project1.jpeg';
import HotelBooking from '../assets/resumepr/project4.png';
import SMS from '../assets/resumepr/backend1.png'; // Corrected the double .png
import Wanderlust from '../assets/resumepr/backend2.png';
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
            </div>
          </div>
          <div className="row">
            <h2 className='text-center text-md-start'>Frontend Projects</h2>
            {[
              { img: HeadPhone, title: 'HeadPhone Products', link: '/headphone' },
              { img: Spotify, title: 'Spotify Clone', link: '/spotify' },
              { img: Foodie, title: 'Foodie Website', link: '/foodie' },
              { img: HotelBooking, title: 'Hotel Booking', link: '/hotelbooking' },
            ].map((project, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card p-0">
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
                  <Link to={project.link}>
                    <h6 className="text-center">{project.title}</h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-3">
            <h2 className='text-center text-md-start'>Full Stack Projects</h2>
            {[
              { img: SMS, title: 'Student Management System', link: '/sms' },
              { img: Wanderlust, title: 'WanderLust', link: '/wanderlust' },
            ].map((project, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card p-0">
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
                  <Link to={project.link}>
                    <h6 className="text-center">{project.title}</h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;