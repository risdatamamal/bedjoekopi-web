/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import "@/styles/style.scss";
import { Topbar } from "../_components";

function Home() {
  return (
    // app wrapper
    <div className="sb-app">
      {/* preloader */}
      <div className="sb-preloader">
        <div className="sb-preloader-bg"></div>
        <div className="sb-preloader-body">
          <div className="sb-loading">
            <div className="sb-percent">
              <span className="sb-preloader-number" data-count="101">
                00
              </span>
              <span>%</span>
            </div>
          </div>
          <div className="sb-loading-bar">
            <div className="sb-bar"></div>
          </div>
        </div>
      </div>
      {/* preloader end */}
      {/* click effect */}
      <div className="sb-click-effect"></div>
      {/* loader */}
      <div className="sb-load"></div>

      <Topbar />

    </div>
  );
}

export default Home;
