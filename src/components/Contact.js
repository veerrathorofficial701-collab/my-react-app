import { useState } from "react";

import Banner from "../pages/Banner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", form);
  }

  return (
<>

  <Banner

  title="Ccontact Us"
  description="We help agencies scale with high-quality backlinks."
  buttonText="Start Growing"
  buttonLink="https://google.com"
  
  />
    <section className="contact-sec">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <div className="content">
              <h1>
                Contact <span className="yellow">Us</span>
              </h1>
              <p>
                We’d love to hear from you. Whether you’re exploring partnership opportunities,
                need help with link-building campaigns, or simply have a question about GroLinq,
                our team is here to support you.
              </p>

              <ul>
                <li>
                  <span>1</span>
                  <strong>Complete the Contact Form:</strong> Provide your full name, email, phone
                  number, subject and a brief description of your inquiry.
                </li>

                <li>
                  <span>2</span>
                  <strong>Submit Your Request:</strong> Once you submit the form, you will receive
                  an acknowledgment email.
                </li>

                <li>
                  <span>3</span>
                  <strong>Our Response:</strong> A member of our team will review your request and
                  respond within 24 hours.
                </li>
              </ul>
            </div>
          </div>

    
          <div className="col-md-6">
            <div className="form_block">
              <h2>Get in Touch</h2>
              <p>Simply fill out the form below, and we’ll get back to you as soon as possible.</p>

              {!submitted ? (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12 text-left">
                      <div className="form-group default_btn blue_btn">
                        <button className="btn" type="submit">
                          Submit Your Inquiry
                        </button>
                      </div>
                    </div>

                  </div>
                </form>
              ) : (
                <div className="thank-you">
                  <h3>Thank you! </h3>
                  <p>We’ve received your message and will get back to you shortly.</p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
</>
  
  );
}
