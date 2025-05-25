import skyconnectimg from "../../../assets/resumepr/tabviewskyconnect.png";
import BackButton from "../../BackButton";

const SkyConnect = () => {
  return (
    <>
       <section>
      <h2 className="mt-5 text-center my-4">Sky Connect</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
            <img
              src={skyconnectimg}
              alt=""
              className="w-100 animate__animated animate__zoomIn"
              style={{ borderRadius: "8px" }}
            />
            <h3 className="card-title mt-5">Sky Connect</h3>
            <p className="card-text">
              Send Email Banner throught emails
            </p>
            <p>
             SkyConnect is an innovative email automation tool designed to streamline communication by sending visually engaging banners directly through email. With SkyConnect, users can easily create and distribute customized email banners to enhance marketing campaigns, announcements, or internal communications. This tool simplifies the process of reaching your audience, ensuring that your messages.
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
                <b> Database : </b>Mongo DB
              </p>
              {/* <p><b>Deployment Tools: </b> Vercel</p> */}
            </div>
            <hr />
            <div className="mt-5 text-light">
            <h5 >Features</h5>
            <p>  User Authentication : Secure sign up and sign in functionality for
              user accounts. </p>
             
              <p></p>
              <p>Get Contacts :
              get all the contacts </p>
             
              <p> Validations :
              There is client & Server Side validations Used </p>
            </div>
            <div className="mt-4">
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/dakshataramteke/SkyConnect"
                  className="text-white"
                  target="_blank"
                >
                  Click Here
                </a>
              </p>
               <p>
                Video :{" "}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7332383204617732097/"
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
    </>
  )
}

export default SkyConnect
