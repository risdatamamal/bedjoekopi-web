import Image from "next/image";
import React from "react";
import { Footer } from "@/app/_components";

export const metadata = {
  title: "About - Bedjoekopi",
  description: "About us for your information",
};

const About = () => {
  return (
    // dynamic content
    <div id="sb-dynamic-content" className="sb-transition-fade">
      {/* banner */}
      <section className="sb-banner sb-banner-xs sb-banner-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className="sb-main-title">
                  <h1 className="sb-h2">About us</h1>
                  <ul className="sb-breadcrumbs">
                    <li>
                      <a href="home-1.html">Home</a>
                    </li>
                    <li>
                      <a href="#.">About us</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main title end */}
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* About text */}
      <section className="sb-about-text sb-p-90-0">
        <div className="sb-bg-2" style={{ marginTop: "90px" }}>
          <div></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sb-illustration-2 sb-mb-90">
                <div className="sb-interior-frame">
                  <img
                    src="img/gallery/2.jpg"
                    alt="interior"
                    className="sb-interior"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="sb-square"></div>
                <div className="sb-cirkle-1"></div>
                <div className="sb-cirkle-2"></div>
                <div className="sb-cirkle-3"></div>
                <div className="sb-cirkle-4"></div>
                <div className="sb-experience">
                  <div className="sb-exp-content">
                    <p className="sb-h1 sb-mb-10">17</p>
                    <p className="sb-h3">Years Experiense</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center sb-mb-60">
              <h2 className="sb-mb-60">
                We are doing more than <br />
                you expect
              </h2>
              <p className="sb-text sb-mb-30">
                Faudantium magnam error temporibus ipsam aliquid neque quibusdam
                dolorum, quia ea numquam assumenda mollitia dolorem impedit.
                Voluptate at quis exercitationem officia temporibus adipisci
                quae totam enim dolorum, assumenda. Sapiente soluta nostrum
                reprehenderit a velit obcaecati facilis vitae magnam tenetur
                neque vel itaque inventore eaque explicabo commodi maxime!
                Aliquam quasi, voluptates odio.
              </p>
              <p className="sb-text sb-mb-60">
                Consectetur adipisicing elit. Cupiditate nesciunt amet facilis
                numquam, nam adipisci qui voluptate voluptas enim obcaecati
                veritatis animi nulla, mollitia commodi quaerat ex, autem ea
                laborum.
              </p>
              <img
                src="img/ui/signature.png"
                alt="Signature"
                className="sb-signature sb-mb-30"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About text end */}

      {/* features */}
      <section className="sb-p-0-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">01</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">
                    We are located in the city center
                  </h3>
                  <p className="sb-text">
                    Porro nemo veniam necessitatibus praesentium eligendi rem
                    temporibus adipisci quo modi numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">02</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">
                    Fresh ingredients from organic farms
                  </h3>
                  <p className="sb-text">
                    Porro nemo veniam necessitatibus praesentium eligendi rem
                    temporibus adipisci quo modi numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">03</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">
                    Own fast delivery. 30 min Maximum
                  </h3>
                  <p className="sb-text">
                    Porro nemo veniam necessitatibus praesentium eligendi rem
                    temporibus adipisci quo modi numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">04</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">Professional, experienced chefs</h3>
                  <p className="sb-text">
                    Porro nemo veniam necessitatibus praesentium eligendi rem
                    temporibus adipisci quo modi numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sb-features-item sb-mb-60">
                <div className="sb-number">05</div>
                <div className="sb-feature-text">
                  <h3 className="sb-mb-15">The highest standards of service</h3>
                  <p className="sb-text">
                    Porro nemo veniam necessitatibus praesentium eligendi rem
                    temporibus adipisci quo modi numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}

      {/* video */}
      <section className="sb-video">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sb-mb-90">
                <span className="sb-suptitle sb-mb-15">Promo video</span>
                <h2 className="sb-mb-30">
                  Restaurant is like a theater. <br />
                  Our task is to amaze you!
                </h2>
                <p className="sb-text sb-mb-30">
                  Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia
                  consectetur ad vero minus neque sit architecto totam
                  distineserunt pariatur adipisci rem aspernatur illum ex!
                </p>
                {/* button */}
                <a
                  data-fancybox=""
                  data-no-swup
                  href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                  className="sb-btn"
                >
                  <span className="sb-icon">
                    <img src="img/ui/icons/play.svg" alt="icon" />
                  </span>
                  <span>Promo video</span>
                </a>
                {/* button end */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sb-illustration-7 sb-mb-90">
                <div className="sb-interior-frame">
                  <img
                    src="img/illustrations/interior-2.jpg"
                    alt="interior"
                    className="sb-interior"
                  />
                  <a
                    data-fancybox=""
                    data-no-swup
                    href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                    className="sb-video-play"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="sb-cirkle-1"></div>
                <div className="sb-cirkle-2"></div>
                <div className="sb-cirkle-3"></div>
                <div className="sb-cirkle-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video end */}

      {/* team */}
      <section className="sb-team sb-p-0-60">
        <div className="sb-bg-2">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-cate-title sb-mb-30">
                They will <span>cook</span> for you
              </h2>
              <p className="sb-text">
                Consectetur numquam poro nemo veniam
                <br />
                eligendi rem adipisci quo modi.
              </p>
            </div>
            <div className="sb-right sb-mb-30">
              {/* button */}
              <a href="menu-1.html" className="sb-btn sb-m-0">
                <span className="sb-icon">
                  <img src="img/ui/icons/menu.svg" alt="icon" />
                </span>
                <span>Open menu</span>
              </a>
              {/* button end */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="sb-team-member sb-mb-30">
                <div className="sb-photo-frame sb-mb-15">
                  <img src="img/team/1.png" alt="Team member" />
                </div>
                <div className="sb-member-description">
                  <h4 className="sb-mb-10">Paul Trueman</h4>
                  <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                  <ul className="sb-social">
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sb-team-member sb-mb-30">
                <div className="sb-photo-frame sb-mb-15">
                  <img src="img/team/2.png" alt="Team member" />
                </div>
                <div className="sb-member-description">
                  <h3 className="sb-mb-10">Emma Newman</h3>
                  <p className="sb-text sb-text-sm sb-mb-10">Assistant chef</p>
                  <ul className="sb-social">
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sb-team-member sb-mb-30">
                <div className="sb-photo-frame sb-mb-15">
                  <img src="img/team/3.png" alt="Team member" />
                </div>
                <div className="sb-member-description">
                  <h3 className="sb-mb-10">Oscar Oldman</h3>
                  <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                  <ul className="sb-social">
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sb-team-member sb-mb-30">
                <div className="sb-photo-frame sb-mb-15">
                  <img src="img/team/4.png" alt="Team member" />
                </div>
                <div className="sb-member-description">
                  <h3 className="sb-mb-10">Ed Freeman</h3>
                  <p className="sb-text sb-text-sm sb-mb-10">Assistant chef</p>
                  <ul className="sb-social">
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="far fa-circle"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team end */}

      {/* revievs */}
      <section className="sb-reviews sb-p-0-90">
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-cate-title sb-mb-30">
                Reviews <span>about</span> us
              </h2>
              <p className="sb-text">
                Consectetur numquam poro nemo veniam
                <br />
                eligendi rem adipisci quo modi.
              </p>
            </div>
            <div className="sb-right sb-mb-30">
              {/* slider navigation */}
              <div className="sb-slider-nav">
                <div className="sb-prev-btn sb-reviews-prev">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="sb-next-btn sb-reviews-next">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              {/* slider navigation end */}
              {/* button */}
              <a href="reviews.html" className="sb-btn">
                <span className="sb-icon">
                  <img src="img/ui/icons/dialog.svg" alt="icon" />
                </span>
                <span>All revievs</span>
              </a>
              {/* button end */}
            </div>
          </div>
          <div className="swiper-container sb-reviews-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="sb-review-card">
                  <div className="sb-review-header sb-mb-15">
                    <h4 className="sb-mb-15">Very tasty</h4>
                    <ul className="sb-stars">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <p className="sb-text sb-mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis fugiat totam nobis quas unde excepturi inventore
                    possimus laudantium provident, rem eligendi velit. Aut
                    molestias, ipsa itaque laborum, natus tempora, ut soluta
                    animi ducimus dignissimos deserunt doloribus in
                    reprehenderit rem accusamus! Quibusdam labore, aliquam dolor
                    harum!
                  </p>
                  <div className="sb-author-frame">
                    <div className="sb-avatar-frame">
                      <img src="img/faces/1.jpg" alt="Guest" />
                    </div>
                    <h4>Emma Newman</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sb-review-card">
                  <div className="sb-review-header sb-mb-15">
                    <h4 className="sb-mb-15">I have lunch here every day</h4>
                    <ul className="sb-stars">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <p className="sb-text sb-mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis fugiat totam nobis quas unde excepturi inventore
                    possimus laudantium provident, rem eligendi velit. Aut
                    molestias, ipsa itaque laborum, natus tempora, ut soluta
                    animi ducimus dignissimos deserunt doloribus in
                    reprehenderit rem accusamus! Quibusdam labore, aliquam dolor
                    harum!
                  </p>
                  <div className="sb-author-frame">
                    <div className="sb-avatar-frame">
                      <img src="img/faces/2.jpg" alt="Guest" />
                    </div>
                    <h4>Paul Trueman</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sb-review-card">
                  <div className="sb-review-header sb-mb-15">
                    <h4 className="sb-mb-15">Great service</h4>
                    <ul className="sb-stars">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li className="sb-empty">
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <p className="sb-text sb-mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis fugiat totam nobis quas unde excepturi inventore
                    possimus laudantium provident, rem eligendi velit. Aut
                    molestias, ipsa itaque laborum, natus tempora, ut soluta
                    animi ducimus dignissimos deserunt doloribus in
                    reprehenderit rem accusamus! Quibusdam labore, aliquam dolor
                    harum!
                  </p>
                  <div className="sb-author-frame">
                    <div className="sb-avatar-frame">
                      <img src="img/faces/3.jpg" alt="Guest" />
                    </div>
                    <h4>Viktoria Freeman</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sb-review-card">
                  <div className="sb-review-header sb-mb-15">
                    <h4 className="sb-mb-15">Starbelly is amazing!</h4>
                    <ul className="sb-stars">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <p className="sb-text sb-mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis fugiat totam nobis quas unde excepturi inventore
                    possimus laudantium provident, rem eligendi velit. Aut
                    molestias, ipsa itaque laborum, natus tempora, ut soluta
                    animi ducimus dignissimos deserunt doloribus in
                    reprehenderit rem accusamus! Quibusdam labore, aliquam dolor
                    harum!
                  </p>
                  <div className="sb-author-frame">
                    <div className="sb-avatar-frame">
                      <img src="img/faces/4.jpg" alt="Guest" />
                    </div>
                    <h4>Audrey Oldman</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* revievs end */}

      {/* call to action */}
      <section className="sb-call-to-action">
        <div className="sb-bg-3"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sb-cta-text">
                <h2 className="sb-h1 sb-mb-15">Free delivery service.</h2>
                <p className="sb-text sb-mb-30">
                  *Consectetur numquam poro nemo veniam
                  <br />
                  eligendi rem adipisci quo modi.
                </p>
                {/* button */}
                <a href="shop-1.html" className="sb-btn">
                  <span className="sb-icon">
                    <img src="img/ui/icons/cart.svg" alt="icon" />
                  </span>
                  <span>Order delivery</span>
                </a>
                {/* button end */}
                {/* button */}
                <a href="menu-1.html" className="sb-btn sb-btn-2 sb-btn-gray">
                  <span className="sb-icon">
                    <img src="img/ui/icons/menu.svg" alt="icon" />
                  </span>
                  <span>Menu</span>
                </a>
                {/* button end */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sb-illustration-8">
                <img
                  src="img/illustrations/delivery.png"
                  alt="reserved"
                  className="sb-reserved"
                />
                <div className="sb-cirkle-1"></div>
                <div className="sb-cirkle-2"></div>
                <div className="sb-cirkle-3"></div>
                <div className="sb-cirkle-4"></div>
                <div className="sb-cirkle-5"></div>
                <img
                  src="img/illustrations/2.svg"
                  alt="icon"
                  className="sb-pik-2"
                />
                <img
                  src="img/illustrations/3.svg"
                  alt="icon"
                  className="sb-pik-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}

      {/* footer */}
      <Footer />
      {/* footer end */}
    </div>
    // dynamic content end
  );
}

export default About;
