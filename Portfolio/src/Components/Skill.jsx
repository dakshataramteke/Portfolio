import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBracketsAngle } from "react-icons/tb";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Skill = () => {
  return (
    <>
        {/* Skills  */}
        <div className="row mt-3 skill_Section">
       
          <div className="col-12 col-lg-12 ">
          <h2 className='text-center text-md-start'>My Skills</h2>
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
          <h4><RiReactjsFill style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>React Js</h5>
          </div>
         
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><FaNodeJs style={{fontSize:'3.25rem'}}/> </h4>
          <h5 style={{fontSize:'0.875rem'}}>Node Js</h5>
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
    </>
  )
}

export default Skill
