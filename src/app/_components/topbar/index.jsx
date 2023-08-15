"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();

  const navs = [
    { text: "Home", href: "/" },
    {
      text: "About",
      href: "/about",
      subNav: [
        { text: "FAQ", href: "/faq" },
        { text: "Reviews", href: "/reviews" },
      ],
    },
    // Menu-3 (Lazy Load)
    { text: "Menu", href: "/menu" },
    // Blog-3 (Lazy Load)
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    // top bar
    <div className="sb-top-bar-frame">
      <div className="sb-top-bar-bg"></div>
      <div className="container">
        <div className="sb-top-bar">
          <a href="/" className="sb-logo-frame">
            {/* logo img */}
            <Image
              src="img/ui/logo.svg"
              alt="Bedjoekopi"
              width={100}
              height={50}
            />
          </a>
          {/* menu */}
          <div className="sb-right-side">
            <nav id="sb-dynamic-menu" className="sb-menu-transition">
              <ul className="sb-navigation">
                {navs.map((nav) => {
                  const isActive = pathname === nav.href;

                  return (
                    <li
                      className={`sb-has-children ${
                        isActive ? "sb-active" : ""
                      }`}
                      key={nav.text}
                    >
                      <Link href={nav.href}>{nav.text}</Link>
                      {nav.subNav && nav.subNav.length > 0 && (
                        <ul>
                          {nav.subNav.map((subNavItem) => (
                            <li key={subNavItem.text}>
                              <Link href={subNavItem.href}>
                                {subNavItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
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
      {/* info bar */}
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
      {/* info bar end */}
      {/* minicart */}
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
      {/* minicart end */}
    </div>
    // top bar end
  );
};

export default Topbar;
