# Easy Responsive Carousel
My own implementation of responsive Carousel/Slider in JS/jQuery.
Automatic slideshow with manual control and autoresuming.

# Requirements
    - jQuery 3.2.1,
    - Font Awesome (optional)
    
# Instalation

**Option 1:**
You can copy everything as it is and edit.
Carousel is already initialized.
I recomend you to use Font Awesome to get nice prev/next buttons like in the example.
Of course this is just basic CSS styling and you need to perform all styles up to you.

**Option 2:**
First meet the requirements.

Copy the code from js/carousel.js to your project and initialize Cariusel anywhere with:

`var carousel = new Carousel().init().checkEvents();`

 
Optionaly if you don't want navigation buttons just skip them during the initialization. For example:

  `var carousel = new Carousel().init();`
CSS class `.home-page-carousel-active` is the class for active and the initial slide. You need to atach this class for one of the slides.

You can change the animation and interval time - just give like a argument is miliseconds. For example:

`var carousel = new Carousel().init(1000, 3000).checkEvents();`

Explaination:

`.init(animationTime, intervalTime)`

# MIT License
Feel free to use if you like it.


  



