import React from 'react';
import emailjs from 'emailjs-com';

function ContactPage(props) {
    return (

        <div className="row contact-page" >

            <div className="col-md-7 my-3 ms-4 p-3 shadow contactForm" >

                <form name="sentMessage" id="contactForm" className="mt-4">
                    <div className="row">
                        <div className="col me-2">
                            <div className="form-group">
                                <input type="name" name='name' className="form-control" placeholder="Name" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="email" name='email' id="email" className="form-control" placeholder="Email" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input type="subject" id="subject" name="subject" className="form-control" placeholder="Subject" required="required" />
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