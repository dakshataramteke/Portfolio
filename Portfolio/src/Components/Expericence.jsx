import React from 'react'

const Expericence = () => {
  return (
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
  )
}

export default Expericence