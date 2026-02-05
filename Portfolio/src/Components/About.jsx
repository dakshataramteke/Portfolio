import selfPhoto from '../assets/images/profile.jpeg';
import Skill from './Skill';

const About = () => {
  return (
    <section id="about" className="about_wrapper mt-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src={selfPhoto} alt="about-image" className="img-fluid" style={{borderRadius:'0.325rem'}} />
          </div>
          <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
            <div className="my-lg-0">
            
              <h2>About Me</h2>
              <p>My Name is Dakshata Ramteke, I am originally from Nagpur, I have been passionate about MERN Stack Development/ React JS Developer.</p>
              <p>I am currently doing Internship at Claim Genius Pvt Ltd in Full Stack Development. I hold a Masters Degree in Computer Science and I have completed my Bachelors Degree in Computer Science.I have Completed my 6 month Internship from Sky Vision IT Solutions Pvt Ltd where i gain good knowledge of frontend as well as backend Development. I specialize in MERN Stack Development. I have successfully completed OJT Training in React Js and also completed some projects. I have completed MERN Stack Development from Apna College with hands-on projects.</p>
            </div>
            <div className="pt-4">
              <ul className="nav nav-pills justify-content-center justify-content-lg-around mb-3" id="pills-tab" role="tablist">
                
                <li className="nav-item" role="presentation">
                  <button className="nav-link " id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                </li>
              </ul>
              <div className="tab-content mt-4" id="pills-tabContent">
               
                <div className="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">
                  <ul className="text-start ps-0 list-unstyled">
                    <li >
                   <a href="#">
                     Full Stack Developer -
                        <span > Claim Genius Pvt Ltd</span>
                     </a>
                   
                    Aug 2025 - Present
                    </li>
                  <li >
                   <a href="#">
                     MERN Stack Developer -
                        <span > Sky Vision IT Solutions</span>
                     </a>
                   
                      Nov 2024 - May 2025
                    </li>
                 
                  <li>
                      <a href="#">
                        Process Associate -
                        <span > DhanInfotech</span>
                      </a>
                    
                      Sept 2023 - Nov 2023
                    </li>
                    <li>
                      <a href="#">
                        Teaching Assistance -
                        <span > Disha Computer Institute</span>
                      </a>
                     
                      Jan 2022 - Dec 2022
                    </li>
                   
                  </ul>
                </div>
                <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                  <ul className="text-start ps-0 list-unstyled ">
                    <li >
                    
                    <a href='#'>
                        Master in Computer Science -
                        <span className='text-end'> Dr S.C Gulhane Prerna College, Nagpur</span>
                      </a>
                    
                      <a href='#'>
                       CGPA : 7.3
                        <span className='text-end ms-5'>  2023-2025</span>
                      </a>
                    </li>
                    <hr/>
                    <li>
                      <a href="#">
                        Bachelor in Computer Science -
                        <span > Shri Mathuradas Mohta College of Science , Nagpur</span>
                      </a>
                      <a href="#">
                        67 %
                        <span className='ms-5'>  2017-2021</span>
                      </a>
                    
                    </li>
                    <li>
                      <a href="#">
                        Higher Secondary School - 
                        <span> Dinanath Junior College, Nagpur</span>
                      </a>
                      <a href="#">
                       59.38 % 
                        <span className='ms-5'> 2016-2017</span>
                      </a>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Skill/>
      </div>
    
    </section>
  );
};

export default About;