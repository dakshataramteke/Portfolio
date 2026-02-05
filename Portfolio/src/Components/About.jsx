import selfPhoto from '../assets/images/profile.jpeg';
import Expericence from './Expericence';
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
         <Expericence />
          </div>
        </div>

      <Skill/>
      </div>
    
    </section>
  );
};

export default About;