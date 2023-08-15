import Image from "next/image";
import React from "react";
import { Footer } from "@/app/_components";

export const metadata = {
  title: "Contact - Bedjoekopi",
  description: "Contact us for your order or any questions",
};

const Contact = () => {
  return (
    // dynamic content
    <div id="sb-dynamic-content" className="sb-transition-fade">
      {/* banner */}
      <section className="sb-banner sb-banner-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className="sb-main-title">
                  <span className="sb-suptitle sb-mb-30">Contact</span>
                  <h1 className="sb-mb-30">
                    Get in <span>Touch with Starbelly</span>
                  </h1>
                  <p className="sb-text sb-text-lg sb-mb-30">
                    Consectetur numquam poro nemo veniam
                    <br />
                    eligendi rem adipisci quo modi.
                  </p>
                  <ul className="sb-breadcrumbs">
                    <li>
                      <a href="home-1.html">Home</a>
                    </li>
                    <li>
                      <a href="menu-1.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main title end */}
            </div>
            <div className="col-lg-5">
              <div className="sb-contact-form-frame">
                <div className="sb-illustration-9">
                  <img
                    src="img/illustrations/envelope-1.png"
                    alt="envelope"
                    className="sb-envelope-1"
                  />
                  <img
                    src="img/illustrations/envelope-2.png"
                    alt="envelope"
                    className="sb-envelope-2"
                  />
                  <div className="sb-cirkle-1"></div>
                  <div className="sb-cirkle-2"></div>
                  <div className="sb-cirkle-3"></div>
                </div>
                <div className="sb-form-content">
                  <div className="sb-main-content">
                    <h3 className="sb-mb-30">Send Message</h3>
                    <form id="form">
                      <div className="sb-group-input">
                        <input type="text" name="name" required />
                        <span className="sb-bar"></span>
                        <label>Name</label>
                      </div>
                      <div className="sb-group-input">
                        <input type="email" name="email" required />
                        <span className="sb-bar"></span>
                        <label>Email</label>
                      </div>
                      <div className="sb-group-input">
                        <textarea name="text" required></textarea>
                        <span className="sb-bar"></span>
                        <label>Message</label>
                      </div>
                      <p className="sb-text sb-text-xs sb-mb-30">
                        *We promise not to disclose your <br />
                        personal information to third parties.
                      </p>
                      {/* <!-- button --> */}
                      <button className="sb-btn sb-cf-submit sb-show-success">
                        <span className="sb-icon">
                          <img src="img/ui/icons/arrow.svg" alt="icon" />
                        </span>
                        <span>Send</span>
                      </button>
                      {/* <!-- button end --> */}
                    </form>
                  </div>
                  <div className="sb-success-result">
                    <img
                      src="img/ui/success.jpg"
                      alt="success"
                      className="sb-mb-15"
                    />
                    <div className="sb-success-title sb-mb-15">Success!</div>
                    <p className="sb-text sb-mb-15">
                      Your message has been sent <br />
                      successfully
                    </p>
                    {/* <!-- button --> */}
                    <a href="home-1.html" className="sb-btn sb-btn-2">
                      <span className="sb-icon">
                        <img src="img/ui/icons/arrow-2.svg" alt="icon" />
                      </span>
                      <span>Back to home</span>
                    </a>
                    {/* <!-- button end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner end --> */}

      {/* <!-- contact info --> */}
      <section className="sb-p-90-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">01</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">Welcome</h3>
                  <p className="sb-text">Montréal, 1510 Rue Sauvé</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">02</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">Call</h3>
                  <p className="sb-text">+02 (044) 756-X6-52</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">03</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">Write</h3>
                  <p className="sb-text">starbelly@mail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact info end */}

      {/* map */}
      <div className="sb-map-frame">
        <div id="map" className="sb-map"></div>
        <div className="sb-lock">
          <i className="fas fa-lock"></i>
        </div>
      </div>
      {/* map end */}

      {/* footer */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
    // dynamic content end
  );
}

export default Contact;
