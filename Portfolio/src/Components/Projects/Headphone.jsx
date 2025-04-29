
import BackButton from '../BackButton';
import Headphonres from '../../assets/resumepr/Headphonres.png'
const Headphone = () => {
  return (
    <>
      <section>
        <h2 className="mt-5 text-center my-4">Headphone</h2>
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
            <img src={Headphonres} alt="" className='w-100 animate__animated animate__zoomIn' style={{borderRadius:'8px'}} />
             
            </div>
           <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8 text-justify">
           <h3 className="card-title mt-5">Headphone Project</h3>
              <p className="card-text">
                I worked on a project to design and develop a wireless headphone system using HTML, CSS and Bootstrap. The system was designed to provide a comfortable listening experience for users, ensuring they can focus on their work without any interruptions.
              </p>
             
              <div className='mt-5'>
               <p> <b> Technologies : </b> HTML5 , CSS3, Bootstrap5 , Responsiveness & JavaScript </p>
               <p><b>Deployment Tools : </b> Netlify</p>
              </div>
              <hr/>
              <div className='mt-4'>
              <p>GitHub : <a href="https://github.com/dakshataramteke/ECommerce-HeadPhones" className='text-white' target='_blank'>Click Here</a></p>
              <p>Live : <a href="https://headphonesmusic.netlify.app/" className='text-white' target='_blank'>Click Here</a></p>
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

export default Headphone
