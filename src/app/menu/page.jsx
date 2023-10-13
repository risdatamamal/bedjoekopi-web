import React from "react";
import { Footer } from "@/_components";

export const metadata = {
  title: "Menu - Bedjoekopi",
  description: "Menu Bedjoekopi for you to choose",
};

const Menu = () => {
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
                  <h1 class="sb-h2">Bedjoekopi Menu</h1>
                  <ul class="sb-breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                  </ul>
                </div>
              </div>
              {/* main title end */}
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* menu section 1 */}
      <section class="sb-menu-section sb-p-90-60">
        <div class="sb-bg-1">
          <div></div>
        </div>
        <div class="container">
          {/* filter */}
          <div class="sb-filter mb-30">
            <a href="#." data-filter="*" class="sb-filter-link sb-active">All dishes</a>
            <a href="#." data-filter=".starters" class="sb-filter-link">Starters</a>
            <a href="#." data-filter=".main-dishes" class="sb-filter-link">Main dishes</a>
            <a href="#." data-filter=".drinks" class="sb-filter-link">Drinks</a>
            <a href="#." data-filter=".desserts" class="sb-filter-link">Dessert</a>
          </div>
          {/* filter end */}
          <div class="sb-masonry-grid">
            <div class="sb-grid-sizer"></div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/1.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/1.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(4 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/2.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/2.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Saumon Gravlax</h4>
                  <div class="sb-price"><sub>$</sub> 9</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars sb-unrated">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>Unrated</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/3.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/3.jpg" alt="product"/>
                  <div class="sb-badge sb-hot"><i class="fas fa-pepper-hot"></i> Hot</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Croustillant de poisson</h4>
                  <div class="sb-price"><sub>$</sub> 4</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/4.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/4.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(2 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/5.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/5.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(6 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/6.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/6.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(14 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/7.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/7.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/8.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/8.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars sb-unrated">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>Unrated</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/9.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/9.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/10.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/10.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(8 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/11.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/11.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 7</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(9 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/12.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/12.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 12</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(5 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/1.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/1.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(7 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/2.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/2.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Saumon Gravlax</h4>
                  <div class="sb-price"><sub>$</sub> 9</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(4 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/3.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/3.jpg" alt="product"/>
                  <div class="sb-badge sb-hot"><i class="fas fa-pepper-hot"></i> Hot</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Croustillant de poisson</h4>
                  <div class="sb-price"><sub>$</sub> 4</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(9 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/4.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/4.jpg" alt="product"/>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(2 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/5.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/5.jpg" alt="product"/>
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(11 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/6.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/6.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(4 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/7.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/7.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/15.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/15.jpg" alt="product" />
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(12 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/14.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/14.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(9 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/10.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/10.jpg" alt="product" />
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(3 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/11.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/11.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 7</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(3 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/12.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/12.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 12</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars sb-unrated">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>Unrated</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/1.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/1.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(2 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/2.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/2.jpg" alt="product" />
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Saumon Gravlax</h4>
                  <div class="sb-price"><sub>$</sub> 9</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 main-dishes">
              <a data-fancybox="menu" data-no-swup href="img/menu/3.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/3.jpg" alt="product" />
                  <div class="sb-badge sb-hot"><i class="fas fa-pepper-hot"></i> Hot</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Croustillant de poisson</h4>
                  <div class="sb-price"><sub>$</sub> 4</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars sb-unrated">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>Unrated</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/15.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/15.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/5.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/5.jpg" alt="product" />
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 drinks">
              <a data-fancybox="menu" data-no-swup href="img/menu/14.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/14.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Chevrefrit au miel</h4>
                  <div class="sb-price"><sub>$</sub> 14</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(2 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 starters">
              <a data-fancybox="menu" data-no-swup href="img/menu/7.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/7.jpg" alt="product" />
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Stracciatella</h4>
                  <div class="sb-price"><sub>$</sub> 11</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li class="sb-empty"><i class="fas fa-star"></i></li>
                    <li><span>(4 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="sb-grid-item sb-item-25 desserts">
              <a data-fancybox="menu" data-no-swup href="img/menu/8.jpg" class="sb-menu-item sb-mb-30">
                <div class="sb-cover-frame">
                  <img src="img/menu/8.jpg" alt="product" />
                  <div class="sb-badge sb-vegan"><i class="fas fa-leaf"></i> Vegan</div>
                </div>
                <div class="sb-card-tp">
                  <h4 class="sb-card-title">Carpaccio de daurade</h4>
                  <div class="sb-price"><sub>$</sub> 6</div>
                </div>
                <div class="sb-description">
                  <p class="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                  <ul class="sb-stars">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><span>(1 ratings)</span></li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* menu section 1 end */}

      {/* promo */}
      <section class="sb-p-0-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="sb-promo-frame sb-mb-30">
                <div class="sb-promo-content">
                  <div class="sb-text-frame">
                    <h3 class="sb-mb-10"><sup>-</sup> <b class="sb-h2">50</b> <sup>%</sup></h3>
                    <h3 class="sb-mb-15">Discount for all* burgers!</h3>
                    <p class="sb-text sb-text-sm sb-mb-15">*Et modi itaque praesentium.</p>
                    {/* button */}
                    <a href="product.html" class="sb-btn sb-ppc">
                      <span class="sb-icon">
                        <img src="img/ui/icons/arrow.svg" alt="icon" />
                      </span>
                      <span>Get it now</span>
                    </a>
                    {/* button end */}
                  </div>
                  <div class="sb-image-frame">
                    <div class="sb-illustration-4">
                      <img src="img/illustrations/burger.png" alt="burger" class="sb-burger" />
                      <div class="sb-cirkle-1"></div>
                      <div class="sb-cirkle-2"></div>
                      <div class="sb-cirkle-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="sb-promo-frame sb-mb-30">
                <div class="sb-promo-content">
                  <div class="sb-text-frame">
                    <h3 class="sb-mb-15">Visit Starbelly and get your coffee*</h3>
                    <h3 class="sb-mb-10"><b class="sb-h2">For free!</b></h3>
                    <p class="sb-text sb-text-sm sb-mb-15">*Et modi itaque praesentium.</p>
                    {/* button */}
                    <a href="product.html" class="sb-btn sb-ppc">
                      <span class="sb-icon">
                        <img src="img/ui/icons/arrow.svg" alt="icon" />
                      </span>
                      <span>Get it now</span>
                    </a>
                    {/* button end */}
                  </div>
                  <div class="sb-image-frame">
                    <div class="sb-illustration-5">
                      <img src="img/illustrations/cup.png" alt="cup" class="sb-cup" />
                      <div class="sb-cirkle-1"></div>
                      <div class="sb-cirkle-2"></div>
                      <div class="sb-cirkle-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* promo end */}

      {/* footer */}
      <Footer />
      {/* footer end */}
    </div>
    // dynamic content end
  );
};

export default Menu;
