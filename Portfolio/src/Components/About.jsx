import selfPhoto from '../assets/images/profile.jpeg';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiVitess } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBracketsAngle } from "react-icons/tb";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { IoIosGitMerge } from "react-icons/io";

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
              <p>I am currently pursuing a Masters Degree in Computer Science and I have completed my Bachelors Degree in Computer Science. I have a good knowledge of frontend as well as backend Development. I specialize in MERN Stack Development. I have successfully completed OJT Training in React Js and also completed some projects. I have completed MERN Stack Development from Apna College with hands-on projects.</p>
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
                  <li>
                      <a href="#">
                     MERN Stack Developer -
                        <span >Sky Vision IT Solutions</span>
                      </a>
                      Nov 2024 - May 2025
                    </li>
                  <li>
                      <a href="#">
                      Web Development -
                        <span >CodSoft</span>
                      </a>
                      Jun 2024 - July 2024
                    </li>
                  <li>
                      <a href="#">
                        Process Associate -
                        <span >DhanInfotech</span>
                      </a>
                      Sept 2023-Nov 2023
                    </li>
                    <li>
                      <a href="#">
                        Teaching Assistance -
                        <span >Disha Computer Institute</span>
                      </a>
                      Jan 2022-Dec 2022
                    </li>
                   
                  </ul>
                </div>
                <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                  <ul className="text-start ps-0 list-unstyled ">
                    <li >
                    
                    <a href='#'>
                        Master in Computer Science -
                        <span className='text-end'>S.C Gulhane Prerna College, Nagpur</span>
                      </a>
                    
                      <a href='#'>
                       CGPA : 7.2
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
                        <span>Dinanath Junior College, Nagpur</span>
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

        {/* Skills  */}
        <div className="row mt-3 skill_Section">
       
          <div className="col-12 col-lg-12 ">
          <h2 className='text-center text-md-start'>Skills</h2>
          <div className="row text-center">
             <div className="col-6 col-md-4 col-lg-2 my-3 ">
             <div className="card p-2">
              <h4><FaHtml5 style={{fontSize:'3.25rem'}}/> </h4>
              <h5 style={{fontSize:'0.875rem'}}>HTML5 </h5>
             </div>
             </div>
             <div className="col-6 col-md-4 col-lg-2 my-3 ">
             <div className="card p-2">
              <h4> <FaCss3  style={{fontSize:'3.25rem'}}/></h4>
              <h5 style={{fontSize:'0.875rem'}}> CSS</h5>
             </div>
             </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><IoLogoJavascript style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>JavaScript</h5>
          </div>
         
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><FaNodeJs style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>Node JS</h5>
          </div>
         
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><RiReactjsFill style={{fontSize:'3.25rem'}}/> <SiVitess style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>React Js/ Vite</h5>
          </div>
         
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><SiMongodb style={{fontSize:'3.25rem'}}/> <SiMysql style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>Mongo DB & MySQL</h5>
          </div>  
        
          </div>

          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><FaGithub style={{fontSize:'3.25rem'}} /></h4>
          <h5 style={{fontSize:'0.875rem'}}>Git & GitHub</h5>
          </div>  
        
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><AiOutlineDeploymentUnit style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>Deployment</h5>
          </div>  
        
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><TbBracketsAngle style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>C & C++</h5>
          </div>
        
          </div>
          </div>
         
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default About;