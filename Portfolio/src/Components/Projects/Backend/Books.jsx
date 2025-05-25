import books from '../../../assets/resumepr/books.png'
import BackButton from '../../BackButton';

const Foodie = () => {
  return (
 <section>
         <h2 className="mt-5 text-center my-4">Books Collections</h2>
         <div className="container">
           <div className="row">
             
             <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
             <img src={books} alt="" className='w-100 animate__animated animate__zoomIn' style={{borderRadius:'8px'}} />
               <h3 className="card-title mt-5">Books Collections</h3>
               <p className="card-text">
                Book lover who loves to Read a books
               </p>
               <p>It allows users to manage a collection of books. Users can add new books, edit existing ones, and delete books from the collection also with showing the image.</p>
            
               <div className='mt-5'>
                <p> <b>Frontend Technologies : </b> HTML5 , CSS3, Bootstrap5 , Responsiveness  </p>
                <p> <b>Backend Technologies : </b>  Node Js & Express Js </p>
                <p> <b>Database  : </b> MongoDB</p>
                {/* <p><b>Deployment Tools: </b> Vercel</p> */}
               </div>
               <hr/>
               <div className='mt-4'>
               <p>GitHub : <a href="https://github.com/dakshataramteke/Crud-Books" className='text-white' target='_blank'>Click Here</a></p>
               {/* <p>Live : <a href="https://food-website-eta-swart.vercel.app/" className='text-white' target='_blank'>Click Here</a></p> */}
               </div>
               <BackButton/>
             </div>
             {/* <!-- end col --> */}
         </div>
         </div>
       </section>
  )
}

export default Foodie
