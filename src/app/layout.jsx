"use client";

import "@/styles/css/plugins/font-awesome.min.css";
import "@/styles/css/plugins/bootstrap.min.css";
import "@/styles/css/plugins/swiper.min.css";
import "@/styles/css/plugins/datepicker.css";
import "@/styles/css/plugins/mapbox-style.css";
import "@/styles/css/plugins/fancybox.min.css";
import "@/styles/css/style.css";

import { React, useEffect } from "react";
import { Header, Topbar, Loader, Preloader, DiscountPopup } from "@/_components";
import Script from "next/script";

import { Monoton, Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  useEffect(() => {
    Script;
  });

  return (
    <html lang="en">
      <Header />

      <body className={rubik.className}>
        <div className="sb-app">
          {/* preloader */}
          {/* <Preloader /> */}

          {/* click effect */}
          <div className="sb-click-effect"></div>

          {/* loader */}
          <Loader />

          {/* topbar */}
          <Topbar />

          {children}

          <DiscountPopup />
        </div>
      </body>

      <Script src="/js/plugins/jquery.min.js"></Script>
      <Script src="/js/plugins/smooth-scroll.js"></Script>
      <Script src="/js/plugins/swup.min.js"></Script>
      <Script src="/js/plugins/swiper.min.js"></Script>
      <Script src="/js/plugins/datepicker.js"></Script>
      <Script src="/js/plugins/isotope.js"></Script>
      <Script src="/js/plugins/sticky.js"></Script>
      <Script src="/js/plugins/mapbox.min.js"></Script>
      <Script src="/js/plugins/fancybox.min.js"></Script>
      <Script src="/js/main.js"></Script>
    </html>
  );
};

export default RootLayout;
