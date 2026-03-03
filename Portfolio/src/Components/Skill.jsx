import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { BiLogoVuejs } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

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
              <h4><FaHtml5 style={{fontSize:'3.25rem'}}/> <FaCss3  style={{fontSize:'3.25rem'}}/></h4>
              <h5 style={{fontSize:'0.875rem'}}>HTML5 & CSS </h5>
             </div>
             </div>
          
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><IoLogoJavascript style={{fontSize:'3.25rem'}}/> <TbBrandTypescript style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>JavaScript / Typescript</h5>
          </div>
         
          </div>
          <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><RiReactjsFill style={{fontSize:'3.25rem'}}/> <BiLogoVuejs  style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>React Js / Vue Js</h5>
          </div>
         
          </div>

        <div className="col-6 col-md-4 col-lg-2 my-3">
          <div className="card p-2">
          <h4><DiBootstrap style={{fontSize:'3.25rem'}}/> <RiTailwindCssFill  style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>Bootstrap / Tailwind Css</h5>
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
          <h4><DiPostgresql style={{fontSize:'3.25rem'}}/> <SiMysql style={{fontSize:'3.25rem'}}/></h4>
          <h5 style={{fontSize:'0.875rem'}}>Postgresql & MySQL</h5>
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
        
          </div>
         
          </div>
        </div>
    </>
  )
}

export default Skill
