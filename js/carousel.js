
$(document).ready(function () {

    /* Carousel */
    function Carousel () {
        this.intervalTime;
        this.animationTime;
        this.currentSlide = $('.home-page-carousel-active');
        this.nextSlide;
        this.slidingDirection = 'next';
        var mainIntervalID;
        var timeOutID;
        var that = this;

        //seting up next or previous slide
        this.setDirection = function () {
            if (this.slidingDirection === 'next') {
                if (this.logs) {
                    console.log(this.slidingDirection);
                }

                //setNextSlide if next exists
                if (this.currentSlide.next().length > 0) {
                    this.nextSlide = this.currentSlide.next();
                } else {
                    this.nextSlide = this.currentSlide.parent().children(':first-child');
                }
            }
            if (this.slidingDirection === 'prev') {
                if (this.logs) {
                    console.log(this.slidingDirection);
                }

                //setNextSlide if prev exists
                if (this.currentSlide.prev().length > 0) {
                    that.nextSlide = this.currentSlide.prev();
                } else {
                    this.nextSlide = this.currentSlide.parent().children(':last-child');
                }
            }
        }

        //listenig for click actions
        this.checkEvents = function () {
            $("#home-page-carousel-next").on('click', function () {
                if (that.logs) {
                    console.log('next button is clicked');
                }

                that.slidingDirection = 'next';
                that.clearAutoRepeatTimers();
                that.initManualSlideShift();
                that.setAutoRepeatTimeOut();

            });

            $("#home-page-carousel-prev").on('click', function () {
                if (that.logs) {
                    console.log('prev button is clicked');
                }
                that.slidingDirection = 'prev';
                that.clearAutoRepeatTimers();
                that.initManualSlideShift();
                that.setAutoRepeatTimeOut();
            });
        }

        //switching to manual mode
        this.initManualSlideShift = function () {
            if (this.logs) {
                console.log('switched to manual mode');
            }
            this.setDirection();
            this.changeSlide();
        }

        //setting up time to resume auto mode
        this.setAutoRepeatTimeOut = function () {
            timeOutID = window.setTimeout(function () {
                console.log('resuming auto repeating');
                that.init();
            }, that.intervalTime);

        }

        //clearing timers
        this.clearAutoRepeatTimers = function () {
            clearInterval(mainIntervalID);
            clearTimeout(timeOutID);
        }

        //change current slide to next one
        this.changeSlide = function () {
            this.currentSlide.fadeOut(this.animationTime).promise().done(function() {
                that.nextSlide.fadeIn(this.animationTime);
            });

            this.currentSlide = this.nextSlide;
        }

        // start single iteration (every slide has this action over and over)
        this.start = function () {
            this.setDirection();
            this.changeSlide();
        }

        //main loop, call this action to init slideshow
        this.init = function (animTime = 500, intervalTime = 4500) {

            if (animTime) {
                this.animationTime = animTime;
            }

            if (intervalTime) {
                this.intervalTime = intervalTime;
            }


            //fire up auto play
            mainIntervalID = setInterval(function () {
                if (that.logs) {
                    console.log('autoplay mode');
                }
                that.start();
            }, that.intervalTime);

            return this;
        }
    }

    //Example init of Carousel with event listening
    var carousel = new Carousel().init(1000, 3000).checkEvents();

});