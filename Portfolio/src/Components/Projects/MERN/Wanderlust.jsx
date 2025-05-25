import wanderlustimg from "../../../assets/resumepr/airbnb.png";
import BackButton from "../../BackButton";

const Wanderlust = () => {
  return (
    <section>
      <h2 className="mt-5 text-center my-4">Wanderlust Travelling Website</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
            <img
              src={wanderlustimg}
              alt=""
              className="w-100 animate__animated animate__zoomIn"
              style={{ borderRadius: "8px" }}
            />
            <h3 className="card-title mt-5">Wanderlust Travelling Website</h3>
            <p className="card-text">
              Travelling website who loves to travel over the world
            </p>
            <p>
              Wanderlust is a full-stack web application designed for travel
              enthusiasts to share their experiences. Users can sign up and sign
              in to create, edit, and delete their travel posts, complete with
              images stored on Cloudinary. The platform also allows users to
              rate and review each others posts, fostering a community of
              explorers.
            </p>

            <div className="mt-5">
            <p>Complete MERN Project</p>
              <p>
                {" "}
                <b>Frontend Technologies : </b> HTML5 , CSS3, Bootstrap5 ,
                Responsiveness & React JS{" "}
              </p>
              <p>
                {" "}
                <b>Backend Technologies : </b> Node Js , Express Js{" "}
              </p>
              <p>
                {" "}
                <b> Database : </b>Mongo DB, Cloudinary
              </p>
              {/* <p><b>Deployment Tools: </b> Vercel</p> */}
            </div>
            <hr />
            <div className="mt-5 text-light">
            <h5 >Features</h5>
            <p>  User Authentication : Secure sign up and sign in functionality for
              user accounts. </p>
              <p>Image Management : Upload and display travel images
              using Cloudinary for efficient storage. </p>
              <p>CRUD Functionality: Users
              can add, edit, and delete their travel posts. </p>
              <p>Image Display :
              Showcase images associated with each travel post.</p>
              <p> Rating System :
              Users can rate and review posts to enhance community engagement.</p>
              <p> Validations :
              There is client & Server Side validations Used </p>
            </div>
            <div className="mt-4">
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/dakshataramteke/AirBnb-Wanderlust"
                  className="text-white"
                  target="_blank"
                >
                  Click Here
                </a>
              </p>
              {/* <p>Live : <a href="https://food-website-eta-swart.vercel.app/" className='text-white' target='_blank'>Click Here</a></p> */}
            </div>
            <BackButton />
          </div>
          {/* <!-- end col --> */}
        </div>
      </div>
    </section>
  );
};

export default Wanderlust;
