import Image from "next/image";
import React from "react";

const DownloadMobileApps = () => {
  return (
    // section call to action
    <section class="sb-call-to-action">
      <div class="sb-bg-3"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="sb-cta-text">
              <h2 class="sb-h1 sb-mb-30">Download our mobile app.</h2>
              <p class="sb-text sb-mb-30">
                Consectetur numquam poro nemo veniam
                <br />
                eligendi rem adipisci quo modi.
              </p>
              <a href="#." target="_blank" data-no-swup class="sb-download-btn">
                <img src="img/buttons/1.svg" alt="img" />
              </a>
              <a href="#." target="_blank" data-no-swup class="sb-download-btn">
                <img src="img/buttons/2.svg" alt="img" />
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sb-illustration-3">
              <img
                src="img/illustrations/phones.png"
                alt="phones"
                class="sb-phones"
              />
              <div class="sb-cirkle-1"></div>
              <div class="sb-cirkle-2"></div>
              <div class="sb-cirkle-3"></div>
              <div class="sb-cirkle-4"></div>
              <img
                src="img/illustrations/1.svg"
                alt="phones"
                class="sb-pik-1"
              />
              <img
                src="img/illustrations/2.svg"
                alt="phones"
                class="sb-pik-2"
              />
              <img
                src="img/illustrations/3.svg"
                alt="phones"
                class="sb-pik-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadMobileApps;
