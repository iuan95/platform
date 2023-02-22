let swiper1 = document.querySelector('.mySwiper')
let swiper2 = document.querySelector('.swiper-pagination')
let nav1 = document.querySelector('.swiper-button-next')
let nav2 = document.querySelector('.swiper-button-prev')

/*кнопки для событий*/
let btnprev = document.querySelector('.nav_icon1')
let btnnext = document.querySelector('.nav_icon2')
/*------------*/


let swiper = new Swiper(swiper1, {
    pagination: {
        el: swiper2,
    },
});

btnnext.addEventListener('click',()=> {
    if(swiper.isEnd){
        swiper.slideTo(0)
    }
    else swiper.slideNext()

})
btnprev.addEventListener('click',()=> {
    if(swiper.isBeginning){
        let lastslide = swiper.slides.length
        swiper.slideTo(lastslide)
    }
    else swiper.slidePrev()
})

let pagination__swiper1 = document.querySelector('.swiper-pagination1')
let slider3 = document.querySelector('.mySwiper1')
let swiper3 = new Swiper(slider3, {
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    speed: 300,
    spaceBetween: 20,
    pagination: {
        el: pagination__swiper1,
        clickable: true,
        cssSupportsSelector: true,


    },
    breakpoints:{
        1201:{
            slidesPerView: 5,
        },
        1024:{
            slidesPerView: 4,
        },
        768:{
            slidesPerView: 3,
        },
        368:{
            slidesPerView: 2,
        },
        200:{
            slidesPerView: 1,
            spaceBetween: 16,
        },
    },


})


/*кнопки слайдера для раздела 3*/
let btn22 = document.querySelector('.section3__btnleft')
let btn11= document.querySelector('.section3__btnright')
btn11.addEventListener('click', ()=>{
    if(swiper3.isEnd){
        swiper3.slideTo(0)
    }
    else swiper3.slideNext()
})

btn22.addEventListener('click', ()=>{
    if(swiper3.isBeginning){
        let lastslide = swiper3.slides.length
        swiper3.slideTo(lastslide)
    }
    else swiper3.slidePrev()
})




/*partners swiper*/

let swiperPartnerClass = document.querySelector('.mySwiper7')
let swiperPartner = new Swiper(swiperPartnerClass, {
    slidesPerView: 'auto', /// бу авто буолуон нада пидор, айтам ширинатын уларытар ублюдок
    clickable: false,
    allowTouchMove: false,
    speed: 2000,
    loop: true,
    autoplay: {
       delay: 0,
    },
})
/*tikcer slider*/
let swiper_ticker = document.querySelector('.swiper__ticker')
let funswiperTicker = new Swiper(swiper_ticker, {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 30500,
    loop: true,
    clickable: false,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    },
})