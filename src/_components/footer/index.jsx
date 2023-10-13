import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="sb-footer-frame">
          <Link href="/" className="sb-logo-frame">
            {/* logo img */}
            <Image
              src="img/ui/logo.svg"
              alt="Bedjoekopi"
              width={100}
              height={50}
            />
          </Link>
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
          <div className="sb-copy">
            &copy; late 2021 Bedjoekopi. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
