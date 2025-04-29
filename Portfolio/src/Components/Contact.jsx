import  { useState } from 'react';
import Swal from 'sweetalert2';
// import { CLoadingButton } from '@coreui/react-pro'; 
import contact from '../assets/images/cont.png';
import axios from 'axios';

const Contact = () => {
  const [values, setValues] = useState({
    username: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    console.log('Form values:', values);
    try {
      const response = await axios.post('http://localhost:3000/send-email', values);
      console.log('Response:', response.data);

      Swal.fire({
        title: "Successful!",
        text: "Your Message has send successfully",
        icon: "success"
      });
      // Optionally, you can reset the form or show a success message here
      setValues({
        username: '',
        contact: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, you can show an error message here
    }
    
  };

  return (
    <>
      <section id="contact" className="contact_wrapper mt-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="mb-4 col-lg-6 order-2 order-lg-1 text-lg-start text-center">
              <h2 className='text-center'>Contact Us</h2>
              <div className="row call_details">
                <label htmlFor="" className="col-sm-3 col-lg-4">Call us directly:</label>
                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                  <a href="javascript:void(0)">+91 8484870974</a>
                </div>
                <label htmlFor="" className="col-sm-3 col-lg-4">Contact Email:</label>
                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                  <a href="mailto:dakshataramteke00@gmail.com">dakshataramteke00@gmail.com</a>
                </div>
              </div>
              <form onSubmit={SubmitData} className="contact_form">
                <div className="my-4">
                  <input
                    type="text"
                    className="form-control"
                    name='username'
                    placeholder="Your Name"
                    value={values.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control"
                    name='contact'
                    placeholder="Your Contact Number"
                    value={values.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    name='email'
                    placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    cols="40"
                    rows="4"
                    className="form-control"
                    placeholder="Write a Message"
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="main_btn">           
                  <a href="mailto:dakshataramteke00@gmail.com" style={{color: 'black'}}>  Send Message</a>

              </button>
                {/* <CLoadingButton type="submit" className="main_btn" timeout={2000}>Send Message</CLoadingButton> */}

              </form>
            </div>
            <div className="col-lg-5 order-1 mb-4 order-lg-1 mb-lg-0 ps-md-5">
              <img src={contact} alt="about-image" className="img-fluid" style={{ height: '400px', width: '400px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;