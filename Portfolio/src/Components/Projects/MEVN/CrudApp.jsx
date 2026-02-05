// import skyconnectimg from "../../../assets/resumepr/tabviewskyconnect.png";
import BackButton from "../../BackButton";

const SkyConnect = () => {
  return (
    <>
       <section>
      <h2 className="mt-5 text-center my-4">Crud Application</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 offset-md-2 col-md-6 col-lg-8">
            {/* <img
              src={skyconnectimg}
              alt=""
              className="w-100 animate__animated animate__zoomIn"
              style={{ borderRadius: "8px" }}
            /> */}
            <h3 className="card-title mt-5">Crud Application</h3>
            <p className="card-text">
             Create Read Update Delete
            </p>
            <p>
            In Crud Application it is for registration, show all users data We also edit a user and Delete the user functionality.
            </p>

            <div className="mt-5">
            <p>Complete MEVN Project</p>
              <p>
                {" "}
                <b>Frontend Technologies : </b> HTML5 , CSS3, Tailwind Css ,
                Responsiveness & Vue Js{" "}
              </p>
              <p>
                {" "}
                <b>Backend Technologies : </b> Node Js , Express Js{" "}
              </p>
              <p>
                {" "}
                <b> Database : </b>Postgresql
              </p>
              {/* <p><b>Deployment Tools: </b> Vercel</p> */}
            </div>
            <hr />
            <div className="mt-5 text-light">
            <h5 >Features</h5>
            <p>  Search : Search functionality to find
              users . </p>
             
              <p></p>
              <p>Get Users :
              get all the Users </p>
             
              {/* <p> Validations :
              There is client & Server Side validations Used </p> */}
            </div>
            <div className="mt-4">
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/dakshataramteke/Crud-Application-with-Vue"
                  className="text-white"
                  target="_blank"
                >
                  Click Here
                </a>
              </p>
               {/* <p>
                Video :{" "}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7332383204617732097/"
                  className="text-white"
                  target="_blank"
                >
                  Click Here
                </a>
              </p> */}
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
