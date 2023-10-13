import React from "react";
import { Footer, DownloadMobileApps } from "@/_components";

export const metadata = {
  title: "Reviews - Bedjoekopi",
  description: "Reviews for Bedjoekopi",
};

const Reviews = () => {
  return (
    // dynamic content
    <div id="sb-dynamic-content" class="sb-transition-fade">
      {/* banner */}
      <section class="sb-banner sb-banner-xs sb-banner-color">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* main title */}
              <div class="sb-main-title-frame">
                <div class="sb-main-title">
                  <h1 class="sb-h2">Feedback from our guests</h1>
                  <ul class="sb-breadcrumbs">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                    <li>
                      <a href="/reviews">Reviews</a>
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

      {/* reviews */}
      <section class="sb-reviews sb-p-90-90">
        <div class="sb-bg-2" style={{ marginTop: 190 + 'px' }}>
          <div></div>
        </div>
        <div class="container">
          <div class="sb-masonry-grid">
            <div class="sb-grid-sizer"></div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Very tasty</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Inventore possimus laudantium provident, rem eligendi velit.
                  Aut molestias, ipsa itaque laborum, natus tempora, ut soluta
                  animi ducimus dignissimos deserunt doloribus in reprehenderit
                  rem accusamus! Quibusdam labore, aliquam dolor harum!
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/1.jpg" alt="Guest" />
                  </div>
                  <h4>Emma Newman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">I have lunch here every day</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Tempora ut soluta animi ducimus dignissimos deserunt doloribus
                  in reprehenderit Reprehenderit rem accusamus! Quibusdam
                  labore, aliquam dolor harum!
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/2.jpg" alt="Guest" />
                  </div>
                  <h4>Paul Trueman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Great service</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="sb-empty">
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Quis fugiat totam nobis quas unde excepturi inventore possimus
                  laudantium provident, rem eligendi velit. Aut molestias, ipsa
                  itaque laborum, natus tempora, ut soluta animi ducimus
                  dignissimos deserunt doloribus in reprehenderit rem accusamus!
                  Quibusdam labore, aliquam dolor harum.
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/3.jpg" alt="Guest" />
                  </div>
                  <h4>Viktoria Freeman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Starbelly is amazing!</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Adipisicing elit. Quis fugiat totam nobis quas unde excepturi
                  inventore possimus laudantium provident, rem eligendi velit.
                  Aut molestias, ipsa itaque laborum, natus tempora, ut soluta
                  animi ducimus dignissimos deserunt doloribus in reprehenderit
                  rem accusamus.
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/4.jpg" alt="Guest" />
                  </div>
                  <h4>Audrey Oldman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Very tasty</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Laudantium provident, rem eligendi velit. Aut molestias, ipsa
                  itaque laborum, natus tempora, ut soluta animi ducimus
                  dignissimos deserunt doloribus in reprehenderit rem accusamus!
                  Quibusdam labore, aliquam dolor harum!
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/1.jpg" alt="Guest" />
                  </div>
                  <h4>Emma Newman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">I have lunch here every day</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Ducimus dignissimos deserunt doloribus in reprehenderit rem
                  accusamus! Quibusdam labore, aliquam dolor harum!
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/2.jpg" alt="Guest" />
                  </div>
                  <h4>Paul Trueman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Great service</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="sb-empty">
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Inventore possimus laudantium provident, rem eligendi velit.
                  Aut molestias, ipsa itaque laborum, natus tempora, ut soluta
                  animi tempora, ut soluta animi ducimus dignissimos deserunt
                  doloribus in reprehenderit rem accusamus ducimus reprehenderit
                  rem accusamu.
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/3.jpg" alt="Guest" />
                  </div>
                  <h4>Viktoria Freeman</h4>
                </div>
              </div>
            </div>
            <div class="sb-grid-item sb-item-50">
              <div class="sb-review-card sb-mb-60">
                <div class="sb-review-header sb-mb-15">
                  <h4 class="sb-mb-10">Starbelly is amazing!</h4>
                  <ul class="sb-stars">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p class="sb-text sb-mb-15">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  fugiat totam nobis quas unde excepturi inventore possimus
                  laudantium provident, rem eligendi velit. Deserunt doloribus
                  in reprehenderit rem accusamus! Quibusdam labore, aliquam
                  dolor harum!
                </p>
                <div class="sb-author-frame">
                  <div class="sb-avatar-frame">
                    <img src="img/faces/4.jpg" alt="Guest" />
                  </div>
                  <h4>Audrey Oldman</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="sb-pagination sb-mt-0">
              <li class="sb-active">
                <a href="#.">1</a>
              </li>
              <li>
                <a href="#.">2</a>
              </li>
              <li>
                <a href="#.">3</a>
              </li>
              <li>
                <a href="#.">4</a>
              </li>
              <li>
                <a href="#.">...</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* reviews end */}

      {/* call to action */}
      <DownloadMobileApps/>
      {/* call to action end */}

      {/* footer */}
      <Footer />
      {/* footer end */}
    </div>
    // dynamic content end
  );
};

export default Reviews;
