<template>
  <div>
    <main class="main_wrapper overflow-hidden">

      <!-- header section start -->
      <header>
        <div class="headerarea header__sticky header__area bg-dark">
          <div class="container desktop__menu__wrapper">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-6">
                <div class="headerarea__left">
                  <div class="headerarea__left__logo">

                    <a href="index.html"><img src="/img/logo/logo.png" alt="logo" width="200"></a>
                  </div>

                </div>
              </div>
              <div class="col-xl-7 col-lg-7 main_menu_wrap">
                <div class="headerarea__main__menu">
                  <nav>
                    <ul>
                      <li class="float-start">
                        <a class="text-white" href="#home">Home</a>
                      </li>
                      <li class="float-start">
                        <a class="text-white" href="#about">About</a>
                      </li>
                      <li class="float-start">
                        <a class="text-white" href="#pricing">Pricing</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6">
                <div class="headerarea__right">
                  <div class="headerarea__login bg-white">
                    <a :href="urllogin">Login</a>
                  </div>


                  <div class="headerarea__button">
                    <a :href="urlregistrasi">Daftar Sekarang</a>
                  </div>
                </div>
              </div>

            </div>

          </div>


          <div class="container-fluid mob_menu_wrapper">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="mobile-logo">
                  <a class="logo__dark" href="#"><img src="/img/logo/logo.png" alt="logo" width="150"></a>
                </div>
              </div>
              <div class="col-6">
                <div class="header-right-wrap">

                  <div class="mobile-off-canvas">
                    <a class="mobile-aside-button text-white" href="#"><i class="icofont-navigation-menu"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- header section end -->

      <!-- Mobile Menu Start Here -->
      <div class="mobile-off-canvas-active">
        <a class="mobile-aside-close"><i class="icofont  icofont-close-line"></i></a>
        <div class="header-mobile-aside-wrap">
          <div class="mobile-menu-wrap">
            <div class="mobile-navigation">
              <nav>
                <ul class="mobile-menu">

                  <li><a class="menu-item-has-children" href="#home">Home</a></li>
                  <li><a class="menu-item-has-children" href="#about">About</a></li>
                  <li><a class="menu-item-has-children" href="#pricing">Pricing</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu end Here -->

      <!-- theme fixed shadow -->
      <div>
        <div class="theme__shadow__circle"></div>
        <div class="theme__shadow__circle shadow__right"></div>
      </div>
      <!-- theme fixed shadow -->

      <!-- education__section__start -->
      <div class="educationarea" id="home">
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7 col-md-12 col-12" data-aos="fade-up">
              <div class="educationarea__wrapper">
                <div class="educationarea__button">
                  <div class="default__small__button">Jamaah</div>
                </div>
                <div class="educationarea__heading">
                  <h2>Ayo Haji dan Umroh bersama PT. Kamilah Wisata Muslim</h2>
                </div>
                <div class="educationarea__content">
                  <p>Menabung untuk haji dengan mudah dan aman</p>
                </div>
                <div class="educationarea__bottom__button">
                  <a class=" btn btn-dark" :href="urlregistrasi">Daftar Sekarang</a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-12" data-aos="fade-up">
              <div class="educationarea__right__wraper" data-tilt>
                <div class="educationarea__img">
                  <img class="education__img__1 img-thumbnail"
                    src="https://blog-media.lifepal.co.id/app/uploads/sites/3/2020/10/01113928/tabungan-haji.jpg"
                    alt="education">
                  <img class="education__img__2 img-thumbnail"
                    src="https://www.danamon.co.id/-/media/Serba-serbi-haji/Mempersiapkan-Tabungan-Haji-Sedari-Dini/SYARIAH-ARTIKEL-HAJI-1-alt-1-800x640.jpg?h=800&w=640&hash=D710E6712BF8EE8766A32F7DF75E604F"
                    alt="education" width="200">

                </div>
                <div class="educationarea__small__img">

                  <div class="educationarea__small__para">
                    <p>Ayo Haji dan Umroh bersama PT. Kamilah Wisata Muslim</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="educationarea__shape_image">
            <img class="hero__shape hero__shape__1" src="/img/education/hero_shape2.png" alt="Shape">
            <img class="hero__shape hero__shape__2" src="/img/education/hero_shape3.png" alt="Shape">
            <img class="hero__shape hero__shape__3" src="/img/education/hero_shape4.png" alt="Shape">
            <img class="hero__shape hero__shape__4" src="/img/education/hero_shape5.png" alt="Shape">
          </div>


        </div>
      </div>

      <!-- education__section__end-->


      <!-- training__section__start -->
      <div class="trainingarea sp_bottom_20" data-aos="fade-up" id="about">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="trainingarea__wraper">
                <div class="trainingarea__icon">
                  <i class="icofont-video-alt"></i>
                  <div class="trainingarea__content">
                    <h6><a href="#">Haji Mudah</a></h6>
                    <p>Hanya dengan Rp 500.000 per bulan</p>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="trainingarea__wraper trainingarea__wraper__2">
                <div class="trainingarea__icon">
                  <i class="icofont-business-man-alt-1"></i>
                  <div class="trainingarea__content">
                    <h6><a href="#">Administasi Mudah</a></h6>
                    <p>Administasi mudah dan cepat</p>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="trainingarea__wraper trainingarea__wraper__3">
                <div class="trainingarea__icon">
                  <i class="icofont-book-alt"></i>
                  <div class="trainingarea__content">
                    <h6><a href="#">Elektronik Saldo</a></h6>
                    <p>Saldo tabungan haji dapat diakses kapan saja</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- traning__section__end-->


      <!-- about__section__start -->
      <div class="aboutarea sp_top_30" data-aos="fade-up" >
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-12 ">
              <div class="aboutarea__img__inner text-center">
                <div class="aboutarea__img" data-tilt>
                  <img class="aboutimg__1" src="/img/about/about_8.png" alt="aboutimg">
                  <img class="aboutimg__2 img-thumbnail"
                    src="https://asset.kompas.com/crops/bWkTRI2o1LlXodgk-smwMgewtuA=/122x51:1763x1145/750x500/data/photo/2023/05/19/6466fa45511d7.png"
                    alt="aboutimg" width="600">
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-12" >
              <div class="aboutarea__content__wraper">
                <div class="aboutarea__button">
                  <div class="default__small__button">About Us</div>
                </div>
                <div class="aboutarea__headding heading__underline">
                  <h2 class="mb-0">Selamat Datang di <span>KMW</span></h2>
                  Kamilah Wisata Muslim
                </div>
                <div class="aboutarea__para">
                  <p> Kami adalah perusahaan yang bergerak di bidang jasa travel umroh dan haji. Bergabunglah dengan kami,
                    dan dapatkan beberapa keuntungan berikut ini :</p>
                </div>
                <div class="aboutarea__list">
                  <ul>
                    <li>
                      <i class="icofont-check"></i> Verifikasi cepat dan mudah tanpa ribet
                    </li>

                    <li>
                      <i class="icofont-check"></i> Waktu pemberangkatan yang cukup cepat
                    </li>

                    <li>
                      <i class="icofont-check"></i> Dapatkan eletronik saldo untuk menabung haji
                    </li>
                  </ul>
                </div>
                <div class="aboutarea__bottom__button">
                  <a class="default__button" :href="urlregistrasi"> Buruan Daftar Sekarang</a>
                </div>
              </div>
            </div>
            <div class="col-12 my-5" id="pricing">
              <h3 class="text-center">Pricing</h3>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3" data-aos="fade-up" v-for="item in result">
              <div class="single__service">
                <div class="service__img">
                  <div class="service__bg__img">
                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                        fill="#5F2DED" fill-opacity="0.05" />
                    </svg>
                  </div>
                </div>
                <div class="service__content">
                  <h2>{{  item.name }}</h2>
                  <span>Setoran Perbulan (1 Tahun): </span>
                  <h4>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.limit / 12).slice(0,-3)  }}</h4>
                  <span>Setoran Perbulan (2 Tahun): </span>
                  <h4>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.limit / 24).slice(0,-3)  }}</h4>
                  <span>Setoran Perbulan (3 Tahun): </span>
                  <h4>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.limit / 36).slice(0,-3)  }}</h4>
                  <span>Limit Tabungan: </span>
                  <h4>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.limit).slice(0,-3) }}</h4>
                </div>
                <div class="service__small__img">
                  <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                      stroke="#FFB31F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- footer__section__start -->
      <div class="footerarea">
        <div class="container">
          <div class="footerarea__newsletter__wraper">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                <div class="footerarea__logo">
                  <a href="#"><img src="/img/logo/logo.png" alt="logophoto" width="200"></a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">

              </div>
            </div>
          </div>

          <div class="footerarea__wrapper">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 " data-aos="fade-up">
                <div class="footerarea__inner footerarea__about__us">
                  <div class="footerarea__heading">
                    <h3>Tentang Kami</h3>
                  </div>
                  <div class="footerarea__content">
                    <p>Perusahaan yang bergerak di bidang jasa travel umroh dan haji. Bergabunglah dengan kami, dan
                      dapatkan beberapa kemudahan untuk menabung haji</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 " data-aos="fade-up">
                <div class="footerarea__inner">
                  <div class="footerarea__heading">
                    <h3>Contact Person:</h3>
                  </div>
                  <div class="footerarea__list">
                    <ul>
                      <li>
                        <a href="#">+62 812 3456 7890</a>
                      </li>
                      <li>
                        <a href="#">kmw@gmail.com</a>
                      </li>
                      <li>
                        <a href="#">Pademawu, Pamekasan, Jawa Timur</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footerarea__copyright__wrapper">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                <div class="footerarea__copyright__content">
                  <p>© 2023 by KMW. Proudly created with Meita Regina Prayitno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const result = ref<any[]>([]);
const { data: categories }:any = await useFetch('https://api.simola.kampungmelonnapote.co.id/saving-categories');
if(categories._value.data.data.length > 0){
  result.value = await categories._value.data.data;
}
const urllogin = 'https://simola.back.pembangunanpamekasan.com/login';
const urlregistrasi = 'https://simola.back.pembangunanpamekasan.com/register';


</script>
