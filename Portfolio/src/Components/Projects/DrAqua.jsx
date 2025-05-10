

import BackButton from '../BackButton';
import DrAquagalaxy from '../../assets/resumepr/Draquagalaxy.png'
const DrAqua = () => {
  return (
    <>
      <section>
        <h2 className="mt-5 text-center my-4">Dr Aqua Galaxy Ro Filter</h2>
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
            <img src={DrAquagalaxy} alt="" className='w-100 animate__animated animate__zoomIn' style={{borderRadius:'8px'}} />
             
            </div>
           <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8 text-justify">
           <h3 className="card-title mt-5">RO Filter</h3>
              <p className="card-text">
                I worked on a project to design and develop a RO Filter using HTML, CSS and Bootstrap5 & React JS also Indexed on Google.
              </p>
              <p className='card-text'> You can search on Google &nbsp; &nbsp; <a href='https://draquagalaxy.in/' className='text-white'>draquagalaxy.in</a> </p>
             
              <div className='mt-3'>
               <p> <b> Technologies : </b> HTML5 , CSS3, Bootstrap5 , Responsiveness & JavaScript , React Js </p>
               <p><b>Domain Name : </b>www.draquagalaxy.in</p>
               <p><b>Deployment & Host : </b> Hostinger</p>
              </div>
              <hr/>
              <div className='mt-4'>
              <p>GitHub : <a href="https://github.com/dakshataramteke/DrAquaGalaxy" className='text-white' target='_blank'>Click Here</a></p>
              <p>Live & Host : <a href="https://draquagalaxy.in/" className='text-white' target='_blank'>Click Here</a></p>
              </div>
              <BackButton/>
           </div>
          
            {/* <!-- end col --> */}
        </div>
        </div>
      </section>
    </>
  )
}

export default DrAqua
