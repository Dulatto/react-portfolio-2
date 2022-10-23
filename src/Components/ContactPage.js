import React from 'react';

function ContactPage(props) {
    return (

        <div className="row p-3 mt-3 contact-page" >

            <div className="col-md-9" >

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
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                </form>
            </div>
            <div className="col-md-3 px-3">
                <h2>GET IN TOUCH</h2>
                <div className="section-title">


                    <h3>Location</h3>
                    <p>New York, United States</p>
                    <h3>Email</h3>
                    <p>dulat.omarov@gmail.com </p>


                </div>

            </div>
        </div>

    )
}

export default ContactPage;