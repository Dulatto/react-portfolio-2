import React from 'react';

function ContactPage(props) {
    return (
        <div>
            <div className="row" id="backs2">
                <h2>Contact Me</h2>
                <div className="col-md-8" id="backs2">

                    <form name="sentMessage" id="contactForm" novalidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
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
                        <button type="submit" className="btn btn-default btn-lg">Send Message</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="section-title">


                        <h3>Mobile Number</h3>
                        <p>+15146774537</p>
                        <h3>Email</h3>
                        <p>dulat.omarov@gmail.com </p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage;