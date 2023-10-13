import Image from "next/image";
import React from "react";
import {
  Footer,
  DownloadMobileApps,
} from "@/_components";

export const metadata = {
  title: "Home - Bedjoekopi",
  description: "Take your coffee today",
};

const Home = () => {
  return (
    // dynamic content
    <div id="sb-dynamic-content" className="sb-transition-fade">
      {/* banner */}
      <section className="sb-banner">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className="sb-main-title">
                  <span className="sb-suptitle sb-mb-30">Hi, new friend!</span>
                  <h1 className="sb-mb-30">
                    We do not <span>cook</span>, <br />
                    we <span>create</span> your <br />
                    emotions!
                  </h1>
                  <p className="sb-text sb-text-lg sb-mb-30">
                    Consectetur numquam poro nemo veniam
                    <br />
                    eligendi rem adipisci quo modi.
                  </p>
                  {/* button */}
                  <a href="/menu" className="sb-btn">
                    <span className="sb-icon">
                      <Image
                        src="img/ui/icons/menu.svg"
                        alt="icon"
                        width={100}
                        height={50}
                      />
                    </span>
                    <span>Our menu</span>
                  </a>
                  {/* button end */}
                  {/* button */}
                  <a href="/about" className="sb-btn sb-btn-2 sb-btn-gray">
                    <span className="sb-icon">
                      <Image
                        src="img/ui/icons/arrow.svg"
                        alt="icon"
                        width={100}
                        height={50}
                      />
                    </span>
                    <span>About us</span>
                  </a>
                  {/* button end */}
                </div>
              </div>
              {/* main title end */}
            </div>
            <div className="col-lg-6">
              <div className="sb-illustration-1">
                <img
                  src="img/illustrations/girl.png"
                  alt="girl"
                  className="sb-girl"
                />
                <div className="sb-cirkle-1"></div>
                <div className="sb-cirkle-2"></div>
                <div className="sb-cirkle-3"></div>
                <div className="sb-cirkle-4"></div>
                <div className="sb-cirkle-5"></div>
                <Image
                  src="img/illustrations/3.svg"
                  alt="phones"
                  className="sb-pik-1"
                  width={100}
                  height={50}
                />
                <Image
                  src="img/illustrations/1.svg"
                  alt="phones"
                  className="sb-pik-2"
                  width={100}
                  height={50}
                />
                <Image
                  src="img/illustrations/2.svg"
                  alt="phones"
                  className="sb-pik-3"
                  width={100}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* features */}
      <section className="sb-p-60-0">
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-lg-6 align-self-center sb-mb-30">
              <h2 className="sb-mb-60">
                We are doing more than <br />
                you expect
              </h2>
              <ul className="sb-features">
                <li className="sb-features-item sb-mb-60">
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
                </li>
                <li className="sb-features-item sb-mb-60">
                  <div className="sb-number">02</div>
                  <div className="sb-feature-text">
                    <h3 className="sb-mb-15">Fresh, organic ingredients</h3>
                    <p className="sb-text">
                      Consectetur numquam porro nemo veniam necessitatibus
                      praesentium eligendi rem temporibus adipisci quo modi.
                    </p>
                  </div>
                </li>
                <li className="sb-features-item sb-mb-60">
                  <div className="sb-number">03</div>
                  <div className="sb-feature-text">
                    <h3 className="sb-mb-15">Own fast delivery</h3>
                    <p className="sb-text">
                      Necessitatibus praesentium eligendi rem temporibus
                      adipisci quo modi. Lorem ipsum dolor sit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sb-illustration-2 sb-mb-90">
                <div className="sb-interior-frame">
                  <img
                    src="img/illustrations/interior.jpg"
                    alt="interior"
                    className="sb-interior"
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
          </div>
        </div>
      </section>
      {/* features end */}

      {/* categories */}
      <section className="sb-p-0-60">
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-mb-30">
                What do you <span>like today?</span>
              </h2>
              <p className="sb-text">
                Consectetur numquam poro nemo veniam
                <br />
                eligendi rem adipisci quo modi.
              </p>
            </div>
            <div className="sb-right sb-mb-30">
              {/* button */}
              <a href="shop-1.html" className="sb-btn sb-m-0">
                <span className="sb-icon">
                  <Image
                    src="img/ui/icons/arrow.svg"
                    alt="icon"
                    width={100}
                    height={50}
                  />
                </span>
                <span>Go shopping now</span>
              </a>
              {/* button end */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <a
                href="shop-list-1.html"
                className="sb-categorie-card sb-categorie-card-2 sb-mb-30"
              >
                <div className="sb-card-body">
                  <div className="sb-category-icon">
                    <img src="img/categories/1.png" alt="icon" />
                  </div>
                  <div className="sb-card-descr">
                    <h3 className="sb-mb-10">Starters</h3>
                    <p className="sb-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="shop-list-1.html"
                className="sb-categorie-card sb-categorie-card-2 sb-mb-30"
              >
                <div className="sb-card-body">
                  <div className="sb-category-icon">
                    <img src="img/categories/2.png" alt="icon" />
                  </div>
                  <div className="sb-card-descr">
                    <h3 className="sb-mb-10">Main dishes</h3>
                    <p className="sb-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="shop-list-1.html"
                className="sb-categorie-card sb-categorie-card-2 sb-mb-30"
              >
                <div className="sb-card-body">
                  <div className="sb-category-icon">
                    <img src="img/categories/3.png" alt="icon" />
                  </div>
                  <div className="sb-card-descr">
                    <h3 className="sb-mb-10">Drinks</h3>
                    <p className="sb-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="shop-list-1.html"
                className="sb-categorie-card sb-categorie-card-2 sb-mb-30"
              >
                <div className="sb-card-body">
                  <div className="sb-category-icon">
                    <img src="img/categories/4.png" alt="icon" />
                  </div>
                  <div className="sb-card-descr">
                    <h3 className="sb-mb-10">Desserts</h3>
                    <p className="sb-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* categories end */}

      {/* short menu */}
      <section className="sb-short-menu sb-p-0-90">
        <div className="sb-bg-2">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-mb-30">
                Most <span>popular</span> dishes
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
                <div className="sb-prev-btn sb-short-menu-prev">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="sb-next-btn sb-short-menu-next">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              {/* slider navigation end */}
              {/* button */}
              <a href="menu-1.html" className="sb-btn">
                <span className="sb-icon">
                  <Image
                    src="img/ui/icons/menu.svg"
                    alt="icon"
                    width={100}
                    height={50}
                  />
                </span>
                <span>Full menu</span>
              </a>
              {/* button end */}
            </div>
          </div>
          <div className="swiper-container sb-short-menu-slider-4i">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/3.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/3.jpg" alt="product" />
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Carpaccio de daurade</h4>
                    <div className="sb-price">
                      <sub>$</sub> 14
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/1.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/1.jpg" alt="product" />
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Chevrefrit au miel</h4>
                    <div className="sb-price">
                      <sub>$</sub> 14
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/2.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/2.jpg" alt="product" />
                    <div className="sb-badge sb-vegan">
                      <i className="fas fa-leaf"></i> Vegan
                    </div>
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Saumon Gravlax</h4>
                    <div className="sb-price">
                      <sub>$</sub> 9
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/9.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/9.jpg" alt="product" />
                    <div className="sb-badge sb-hot">
                      <i className="fas fa-pepper-hot"></i> Hot
                    </div>
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Croustillant de poisson</h4>
                    <div className="sb-price">
                      <sub>$</sub> 4
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/5.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/5.jpg" alt="product" />
                    <div className="sb-badge sb-vegan">
                      <i className="fas fa-leaf"></i> Vegan
                    </div>
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Carpaccio de daurade</h4>
                    <div className="sb-price">
                      <sub>$</sub> 6
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  data-fancybox="menu"
                  data-no-swup
                  href="img/menu/4.jpg"
                  className="sb-menu-item"
                >
                  <div className="sb-cover-frame">
                    <img src="img/menu/4.jpg" alt="product" />
                  </div>
                  <div className="sb-card-tp">
                    <h4 className="sb-card-title">Stracciatella</h4>
                    <div className="sb-price">
                      <sub>$</sub> 11
                    </div>
                  </div>
                  <div className="sb-description">
                    <p className="sb-text sb-mb-15">
                      <span>tomatoes</span>, <span>nori</span>,{" "}
                      <span>feta cheese</span>, <span>mushrooms</span>,{" "}
                      <span>rice noodles</span>, <span>corn</span>,{" "}
                      <span>shrimp</span>.
                    </p>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* short menu end */}

      {/* team */}
      <section className="sb-p-0-60">
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-mb-30">
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
              <a href="about-1.html" className="sb-btn sb-m-0">
                <span className="sb-icon">
                  <Image
                    src="img/ui/icons/arrow.svg"
                    alt="icon"
                    width={100}
                    height={50}
                  />
                </span>
                <span>More about us</span>
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

      {/* call to action */}
      <DownloadMobileApps/>
      {/* call to action end */}

      {/* footer */}
      <Footer/>
      {/* footer end */}
    </div>
    // dynamic content end
  );
}

export default Home;
