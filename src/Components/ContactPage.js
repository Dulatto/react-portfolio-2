import React from 'react';

function ContactPage(props) {
    return (

        <div className="row p-3  contact-page" >

            <div className="col-md-8 mt-3" >

                <form name="sentMessage" id="contactForm" novalidate>
                    <div className="row">
                        <div className="col me-2">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input type="subject" id="subject" className="form-control" placeholder="Subject" required="required" />
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
            <div className="col-md-4 px-3 mt-3">
                <h4 className="fw-bold skills-header">GET IN TOUCH</h4>
                <div className="section-title">


                    <h4>Location</h4>
                    <p>New York, United States</p>
                    <h4>Email</h4>
                    <p>dulat.omarov@gmail.com </p>


                </div>

            </div>
        </div>

    )
}

export default ContactPage;