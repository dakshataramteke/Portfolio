import Spotifyimg from '../../assets/resumepr/project1.jpeg';
import BackButton from '../BackButton';

const Spotify = () => {
  return (
     <section>
           <h2 className="mt-5 text-center my-4">Spotify UI Clone</h2>
           <div className="container">
             <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                 <div className="card">
                   <img src={Spotifyimg} alt="Headphone" className="card-img-top" />
                 </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-8">
               {/* <img src={Headphonres} alt="" className='w-100' style={{borderRadius:'8px'}} /> */}
                 <h3 className="card-title mt-5">Spotify UI Clone</h3>
                 <p className="card-text">
                   I worked on a Single Page to design and develop a Spotify Clone using HTML, CSS. The system was designed to provide a comfortable listening experience for users, ensuring they can focus on their work without any interruptions.
                 </p>
                 
                 <div className='mt-5'>
                  <p> <b> Technologies : </b> HTML5 , CSS3 </p>
         
                 </div>
                 <hr/>
                 <div className='mt-4'>
                 <p>GitHub : <a href="https://github.com/dakshataramteke/Spotify-Clone" className='text-white' target='_blank'>Click Here</a></p>
                 <p>Live : <a href="https://spotify-clone-xi-lilac.vercel.app/" className='text-white' target='_blank'>Click Here</a></p>
                 </div>
                 <BackButton/>
               </div>
               {/* <!-- end col --> */}
           </div>
           </div>
         </section>
  )
}

export default Spotify
