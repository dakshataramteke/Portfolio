// import hotelimg from '../../assets/resumepr/project4.png';
import hotelres from '../../assets/resumepr/Hotel.png';
import BackButton from '../BackButton';

const HotelM = () => {
  return (
    <section>
    <h2 className="mt-5 text-center my-4">Hotel Management System</h2>
    <div className="container">
      <div className="row">
        {/* <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img src={hotelimg} alt="Headphone" className="card-img-top" />
          </div>
        </div> */}
        <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
        <img src={hotelres} alt="" className='w-100 animate__animated animate__zoomIn' style={{borderRadius:'8px'}} />
          <h3 className="card-title mt-5">Hotel Management Project </h3>
          <p className="card-text">
            I worked on a project to design and develop a Hotel Management system using HTML, CSS and Bootstrap. The system was designed to provide a comfortable listening experience for users, ensuring they can focus on their work without any interruptions.
          </p>
          
          <div className='mt-5'>
           <p> <b> Technologies : </b> HTML5 , CSS3, Bootstrap5 , Responsiveness & JavaScript </p>
           <p><b>Deployment Tools: </b> Github Pages</p>
          </div>
          <hr/>
          <div className='mt-4'>
          <p>GitHub : <a href="https://github.com/dakshataramteke/Hotel-For-Booking" className='text-white' target='_blank'>Click Here</a></p>
          <p>Live : <a href="https://dakshataramteke.github.io/Hotel-For-Booking/" className='text-white' target='_blank'>Click Here</a></p>
          </div>
          <BackButton/>
        </div>
        {/* <!-- end col --> */}
    </div>
    </div>
  </section>
  )
}

export default HotelM
