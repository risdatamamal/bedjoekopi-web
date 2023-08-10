/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Topbar(useRouter) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portofolio", href: "/portofolio" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    // top bar
    <div className="sb-top-bar-frame">
      <div className="sb-top-bar-bg"></div>
      <div className="container">
        <div className="sb-top-bar">
          <a href="home-2.html" className="sb-logo-frame">
            {/* <!-- logo img --> */}
            <Image
              src="img/ui/logo.svg"
              alt="Starbelly"
              width={100}
              height={50}
            />
          </a>
          {/* <!-- menu --> */}
          <div className="sb-right-side">
            <nav id="sb-dynamic-menu" className="sb-menu-transition">
              <ul className="sb-navigation">
                <li className="sb-active sb-has-children">
                  <a href="home-1.html">Home</a>
                  <ul>
                    <li>
                      <a href="home-1.html">Type 1</a>
                    </li>
                    <li>
                      <a href="home-2.html">Type 2</a>
                    </li>
                  </ul>
                </li>
                <li className="sb-has-children">
                  <a href="about-1.html">Pages</a>
                  <ul>
                    <li>
                      <a href="about-1.html">About 1</a>
                    </li>
                    <li>
                      <a href="about-2.html">About 2</a>
                    </li>
                    <li>
                      <a href="blog-1.html">Blog style 1</a>
                    </li>
                    <li>
                      <a href="blog-2.html">Blog style 2</a>
                    </li>
                    <li>
                      <a href="blog-3.html">Blog style 3</a>
                    </li>
                    <li>
                      <a href="publication-1.html">Publication 1</a>
                    </li>
                    <li>
                      <a href="publication-2.html">Publication 2</a>
                    </li>
                    <li>
                      <a href="publication-3.html">Publication 3</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="gallery-2.html">Gallery 2</a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="reservation.html">Reservation</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li className="sb-has-children">
                  <a href="menu-1.html">Menu</a>
                  <ul>
                    <li>
                      <a href="menu-1.html">Menu style 1</a>
                    </li>
                    <li>
                      <a href="menu-2.html">Menu style 2</a>
                    </li>
                    <li>
                      <a href="menu-3.html">Menu style 3</a>
                    </li>
                    <li>
                      <a href="menu-4.html">Menu style 4</a>
                    </li>
                    <li>
                      <a href="menu-5.html">Menu style 5</a>
                    </li>
                    <li>
                      <a href="menu-6.html">Menu style 6</a>
                    </li>
                  </ul>
                </li>
                <li className="sb-has-children">
                  <a href="shop-1.html">Shop</a>
                  <ul>
                    <li>
                      <a href="shop-1.html">Shop style 1</a>
                    </li>
                    <li>
                      <a href="shop-2.html">Shop style 2</a>
                    </li>
                    <li>
                      <a href="shop-list-1.html">Shop list 1</a>
                    </li>
                    <li>
                      <a href="shop-list-2.html">Shop list 2</a>
                    </li>
                    <li>
                      <a href="product.html">Product page</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="sb-buttons-frame">
              {/* <!-- button --> */}
              <div className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0 sb-btn-cart">
                <span className="sb-icon">
                  <Image
                    src="img/ui/icons/cart.svg"
                    alt="icon"
                    width={100}
                    height={50}
                  />
                </span>
                <i className="sb-cart-number">5</i>
              </div>
              {/* <!-- button end --> */}
              {/* <!-- menu btn --> */}
              <div className="sb-menu-btn">
                <span></span>
              </div>
              {/* <!-- info btn --> */}
              <div className="sb-info-btn">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- info bar --> */}
      <div className="sb-info-bar">
        <div className="sb-infobar-content">
          <div className="sb-ib-title-frame sb-mb-30">
            <h4>Contact</h4>
            <i className="fas fa-arrow-down"></i>
          </div>
          <ul className="sb-list sb-mb-30">
            <li>
              <b>Address:</b>
              <span>Montréal, 1510 Rue Sauvé</span>
            </li>
            <li>
              <b>Working hours:</b>
              <span>09:00 - 23:00</span>
            </li>
            <li>
              <b>Phone:</b>
              <span>+02 (044) 756-X6-52</span>
            </li>
            <li>
              <b>Email:</b>
              <span>starbelly@mail.com</span>
            </li>
          </ul>
          <div className="sb-ib-title-frame sb-mb-30">
            <h4>Instagram</h4>
            <i className="fas fa-arrow-down"></i>
          </div>
          <ul className="sb-instagram sb-mb-30">
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/1.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/2.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/3.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/4.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/5.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="#.">
                <Image
                  src="/img/instagram/6.jpg"
                  alt="instagram"
                  width={100}
                  height={50}
                />
              </a>
            </li>
          </ul>
          <hr />
          <div className="sb-ib-title-frame sb-mb-30">
            <h4>Latest publications</h4>
            <i className="fas fa-arrow-down"></i>
          </div>
          <a
            href="publication-1.html"
            className="sb-blog-card sb-blog-card-sm sb-mb-30"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/blog/1.jpg"
                alt="cover"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-blog-card-descr">
              <h5 className="sb-mb-5">Simple Homemade Tomato Soup</h5>
              <p className="sb-text sb-text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                optio, sed expedita.
              </p>
            </div>
          </a>
          <a
            href="publication-1.html"
            className="sb-blog-card sb-blog-card-sm sb-mb-30"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/blog/2.jpg"
                alt="cover"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-blog-card-descr">
              <h5 className="sb-mb-5">Thai Coconut Soup with Tofu and Rice</h5>
              <p className="sb-text sb-text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                optio, sed expedita.
              </p>
            </div>
          </a>
          <a
            href="publication-1.html"
            className="sb-blog-card sb-blog-card-sm sb-mb-30"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/blog/3.jpg"
                alt="cover"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-blog-card-descr">
              <h5 className="sb-mb-5">
                21 Things You Should Absolutely Be Buying at ALDI
              </h5>
              <p className="sb-text sb-text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                optio, sed expedita.
              </p>
            </div>
          </a>
        </div>
        <div className="sb-info-bar-footer">
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
      {/* <!-- info bar end --> */}
      {/* <!-- minicart --> */}
      <div className="sb-minicart">
        <div className="sb-minicart-content">
          <div className="sb-ib-title-frame sb-mb-30">
            <h4>Your order.</h4>
            <i className="fas fa-arrow-down"></i>
          </div>
          <a
            href="product.html"
            className="sb-menu-item sb-menu-item-sm sb-mb-15"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/menu/4.jpg"
                alt="product"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-card-tp">
              <h4 className="sb-card-title">Saumon Gravlax</h4>
              <div className="sb-price">
                <sub>$</sub> 9
              </div>
            </div>
          </a>
          <a
            href="product.html"
            className="sb-menu-item sb-menu-item-sm sb-mb-15"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/menu/1.jpg"
                alt="product"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-card-tp">
              <h4 className="sb-card-title">Chevrefrit au miel</h4>
              <div className="sb-price">
                <sub>$</sub> 14
              </div>
            </div>
          </a>
          <a
            href="product.html"
            className="sb-menu-item sb-menu-item-sm sb-mb-15"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/menu/2.jpg"
                alt="product"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-card-tp">
              <h4 className="sb-card-title">Croustillant de poisson</h4>
              <div className="sb-price">
                <sub>$</sub> 4
              </div>
            </div>
          </a>
          <a
            href="product.html"
            className="sb-menu-item sb-menu-item-sm sb-mb-15"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/menu/3.jpg"
                alt="product"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-card-tp">
              <h4 className="sb-card-title">Stracciatella</h4>
              <div className="sb-price">
                <sub>$</sub> 11
              </div>
            </div>
          </a>
          <a
            href="product.html"
            className="sb-menu-item sb-menu-item-sm sb-mb-15"
          >
            <div className="sb-cover-frame">
              <Image
                src="/img/menu/5.jpg"
                alt="product"
                width={100}
                height={50}
              />
            </div>
            <div className="sb-card-tp">
              <h4 className="sb-card-title">Carpaccio de daurade</h4>
              <div className="sb-price">
                <sub>$</sub> 19
              </div>
            </div>
          </a>
        </div>
        <div className="sb-minicart-footer">
          {/* <!-- button --> */}
          <a href="cart.html" className="sb-btn sb-btn-gray sb-btn-text">
            <span>View order</span>
          </a>
          {/* <!-- button end --> */}
          {/* <!-- button --> */}
          <a href="checkout.html" className="sb-btn sb-btn-text">
            <span>Checkout</span>
          </a>
          {/* <!-- button end --> */}
        </div>
      </div>
      {/* <!-- minicart end --> */}
    </div>
    // top bar end
  );
}

export default Topbar;
