import React from 'react'
import ReactOJT from "../../../Certificates/OJT React Js.jpg";
import SkyVisionInternship from '../../../Certificates/Internship.jpg'
const InternExp = () => {
  return (
    <div>
               <div className="row">
            <h3>Experience (InternShip)</h3>
            <div className="col-md-8">
              <h5>Full Stack Developer</h5>
              <p>Claim Genius Pvt Ltd, Nagpur </p>
              <p className="text-justify">
                 I am working on hands-on projects AI inspection solutions covers the entire vehicle lifecycle, including insurance
underwriting, claims, lease rental, transportation, salvage, and recycling.
              </p>
              {/* <a href=""></a> */}
            </div>
            <div className="col-md-4">
              <h5>Aug 2025 - Present</h5>
              {/* <a href={SkyVisionInternship} target="_blank" className="text-white">
                Certificate
              </a> */}
            </div>
          </div>
          <div className="row">
            <h3>Experience (InternShip)</h3>
            <div className="col-md-8">
              <h5>MERN Stack Developer</h5>
              <p>Sky Vision IT Solution, Nagpur </p>
              <p className="text-justify">
                I am working hands-on projects on web development using the MERN
                stack, which comprises MongoDB, Express.js, React.js, and
                Node.js. This experience not only enhanced my technical skills
                but also provided me with valuable insights into the software
                development lifecycle and collaborative teamwork.
              </p>
              {/* <a href=""></a> */}
            </div>
            <div className="col-md-4">
              <h5>Nov 24 - May 2025</h5>
              <a href={SkyVisionInternship} target="_blank" className="text-white">
                Certificate
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <h3>InternShip</h3>
            <div className="col-md-8">
              <h5>React JS (OJT)</h5>
              <p>RSE IT Solution, Nagpur </p>
              <p className="text-justify">
                I completed hands-on OJT in React.js for industrial-level
                projects, such as a student website. I built dynamic, responsive
                web applications and gained experience in state management
                component-based architecture.
              </p>
              {/* <a href=""></a> */}
            </div>
            <div className="col-md-4">
              <h5>Mar 24 - May 24</h5>
              <a href={ReactOJT} target="_blank" className="text-white">
                Certificate
              </a>
            </div>
          </div>
    </div>
  )
}

export default InternExp