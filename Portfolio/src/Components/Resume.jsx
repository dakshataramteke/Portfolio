import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import myresume from "../assets/DakshataRamteke.pdf";
import MernCertificate from "../../../Certificates/MERN Certificate.pdf";

import { Link } from "react-router-dom";
import InternExp from "./InternExp";
const Resume = () => {
  return (
    <>
      <section id="resume" className="resume_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mt-4 text-center">
                <h2>My Resume</h2>
                <hr />
                <h3>Dakshata Indravadan Ramteke</h3>
                <h6>Phone: +91 8484870974 </h6>
                <p>
                  <span>
                    {" "}
                    <a
                      href="mailto:dakshataramteke00@gmail.com"
                      target="_blank"
                      style={{ color: "#fff" }}
                    >
                      <IoMdMail style={{ fontSize: "1.75rem" }} />
                    </a>{" "}
                  </span>{" "}
                  &nbsp; | &nbsp;
                  <span>
                    {" "}
                    <a
                      href="https://github.com/dakshataramteke"
                      target="_blank"
                      style={{ color: "#fff" }}
                    >
                      <FaGithub style={{ fontSize: "1.75rem" }} />
                    </a>{" "}
                  </span>{" "}
                  &nbsp; | &nbsp;
                  <span>
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/dakshata-ramteke-20689126a/"
                      target="_blank"
                      style={{ color: "#fff", fontSize: "1.75rem" }}
                    >
                      <FaLinkedin />
                    </a>{" "}
                  </span>
                </p>{" "}
                <hr />
                <p>
                  I have completed Masters in Computer Science and a
                  strong passion for web development. I am enthusiastic about my
                  skills as a professional. Proficient MERN stack developer with
                  hands-on experience in building responsive web applications
                  using MongoDB, Express.js, React.js, and Node.js. Adept at API
                  integration.
                </p>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <h3>Education</h3>
            <div className="col-md-8">
              <h5>MSC in Computer Science</h5>
              <p>Dr. S.C Gulhane Prerna College of Science </p>
              <h5>BSC in Computer Science</h5>
              <p>Shri Mathuradas Mohta College of Science </p>
            </div>
            <div className="col-md-4">
              <h5>2023 - 2025</h5>
              <p>CGPA: 7.3</p>
              <h5>2017-2021</h5>
              <p>Percentage : 67%</p>
            </div>
          </div>
          <hr />
         <InternExp />
          <hr />

          <div className="row skills_data">
            <h3>Skills</h3>
            <div className="col-md-12">
              <ul>
                <li>
                  <b>Frontend</b> : &nbsp; HTML, &nbsp;CSS, &nbsp;Bootstrap5,
                  &nbsp;JavaScript, &nbsp;React Js, &nbsp;Vue Js Tailwind CSS
                </li>
                <li>
                  <b>Backend</b> : &nbsp; Node Js, &nbsp;Express Js, &nbsp;MVC ,
                  &nbsp;Restful API
                </li>
                <li>
                  <b>Database</b> : &nbsp; MY-SQL, &nbsp;MongoDB, &nbsp;Mongoose
                </li>

                <li>
                  <b>Programming Language</b> : &nbsp;C & C++
                </li>
                <li>
                  <b>Git Control</b> : &nbsp;Git, GitHub & BitBucket
                </li>
                <li>
                  <b>API Tools</b> : &nbsp; Postman API , &nbsp;HoppScoth API
                </li>
                <li>
                  <b>Deployment Tools</b> : &nbsp; Netlify, &nbsp;Vercel,
                  &nbsp;Github Pages
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <div className="row">
            <h3>Training & Certification</h3>
            <div className="col-md-10 d-md-flex justify-content-between">
              <h4>
                Certified course in MERN Stack Developer from Apna College
              </h4>
              {/* <a href="https://github.com/dakshataramteke/Portfolio/blob/main/Certificates/MERN%20Certificate.pdf" target="_blank" className="text-white">Certificate</a> */}
              <a href={MernCertificate} target="_blank" className="text-white">
                Certificate
              </a>
            </div>
          </div>

          <div className="mt-5 mt-md-4 d-flex justify-content-center justify-content-md-start ">
            <Link
              to={myresume}
              target="_blank"
              className="main_btn"
              download={"DakshataRamteke.pdf"}
            >
              Download CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
