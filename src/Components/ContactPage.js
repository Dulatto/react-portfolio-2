import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        debugger
        emailjs
            .sendForm(
                "service_128e84u",
                "template_i6dy4gg",
                form.current,
                "XOQz8gxqGSUyWL5qo"
            )
            .then(

                (result) => {
                    toast.success('Thank you, your message has been sent!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        theme: "light",
                    });

                }

            ).catch((error) => {
                toast.error((error.text))

            })
    };
    return (

        <div className="row contact-page" >

            <div className="col-md-7 my-3 ms-4 p-3 shadow contactForm" >

                <form name="sentMessage" id="contactForm" className="mt-4" ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col me-2">
                            <div className="form-group">
                                <input type="text" name='user_name' className="form-control" placeholder="Name" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="email" name='user_email' id="email" className="form-control" placeholder="Email" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input type="subject" id="subject" name="user_subject" className="form-control" placeholder="Subject" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="5" placeholder="Message" required></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                </form>
            </div>
            <div className="col-md-4 ms-4 px-4 mt-3 address">
                <h4 className="fw-bold skills-header">GET IN TOUCH</h4>
                <div className="section-title">
                    <h6 className="fw-bold skills-header">Location</h6>
                    <p>Montreal, Quebec, Canada</p>
                    <h6 className="fw-bold skills-header">Email</h6>
                    <p>dulat.omarov@gmail.com </p>
                </div>
            </div>
        </div>

    )
}

export default ContactPage;