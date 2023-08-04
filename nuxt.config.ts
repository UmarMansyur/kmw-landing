// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {

  },
  app: {
    head: {
      link: [
        {
          rel:"stylesheet", href:"css/bootstrap.min.css"
        },
        {
          rel:"stylesheet", href:"css/aos.min.css"
        },
        {
          rel:"stylesheet", href:"css/magnific-popup.css"
        }, 
        {
          rel:"stylesheet", href:"css/icofont.min.css"
        },
        {
          rel:"stylesheet", href:"css/slick.css"
        },
        {
          rel:"stylesheet", href:"npm/swiper%409/swiper-bundle.min.css"
        },
        {
          rel:"stylesheet", href:"scss/style.css"
        }
      ],
      script: [
        {
          src:"js/vendor/modernizr-3.5.0.min.js"
        }, 
        {
          src:"js/vendor/jquery-3.6.0.min.js"
        },
        {
          src:"js/popper.min.js"
        },
        {
          src:"js/bootstrap.min.js"
        },
        {
          src:"js/isotope.pkgd.min.js"
        },
        {
          src:"js/slick.min.js"
        },
        {
          src:"js/jquery.meanmenu.min.js"
        },
        {
          src:"js/ajax-form.js"
        },
        {
          src:"js/wow.min.js"
        },
        {
          src:"js/jquery.scrollUp.min.js"
        },
        {
          src:"js/imagesloaded.pkgd.min.js"
        },
        {
          src:"js/jquery.magnific-popup.min.js"
        },
        {
          src:"js/waypoints.min.js"
        },
        {
          src:"js/jquery.counterup.min.js"
        },
        {
          src:"js/plugins.js"
        },
        {
          src:"/npm/swiper%409/swiper-bundle.min.js"
        },
        {
          src:"js/main.js"
        },
      ]
    },
    
    
  }
});
