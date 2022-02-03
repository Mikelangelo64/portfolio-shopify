'use strict'

//screen size
const windowWidth = document.documentElement.clientWidth
console.log(windowWidth)
//scrollTo
/* let menuLinks = $('.menu__link[data-goto]')
console.log(menuLinks) */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
console.log(menuLinks)
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    })
}

function onMenuLinkClick(e){
    const menuLink = e.target
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset
        const burger = $('.header__burger')[0]
        console.log(burger)
        if(burger.classList.contains('_active-menu')){
            burger.classList.remove('_active-menu')
            document.body.classList.remove('_lock')
            $('.header-content__logo')[0].classList.remove('_active-menu')
            $('.navigation')[0].classList.remove('_active-menu')
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        })
        e.preventDefault()
    }
}
//burger
$(document).ready(function () {
    
    $('.header__burger').click(function(event){
        $('.header__burger, .navigation, .header-content__logo').toggleClass('_active-menu')
        $('body').toggleClass('_lock')
    })
    $('.slider').slick({
        appendArrows: $('.slider__buttons'),
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        draggeble: false,
        waitForAnimate: false,
        variableWidth: false,  
        responsive:[
            {
                breakpoint: 1026,
                settings:{
                    slidesToShow: 2,
                    // centerMode: false,
                    // variableWidth: false,
                }
            },{
                breakpoint: 770,
                settings:{
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            },
        ]
    });
    
    //bottom on 375px's screen
    $('.bottom-content__resources__title').click(function(event){
        $(this).toggleClass('_bottom-active__resources').next().toggleClass('_bottom-active__resources')
        $('.bottom-content__recources__and__company').toggleClass('_bottom-active__resources')
        if($('.bottom-content__company__title').hasClass('_bottom-active__company')){
            $('.bottom-content__company__title').removeClass('_bottom-active__company').next().removeClass('_bottom-active__company')
            $('.bottom-content__recources__and__company').removeClass('_bottom-active__company')
        }
        
    })

    $('.bottom-content__company__title').click(function(event){
        $(this).toggleClass('_bottom-active__company').next().toggleClass('_bottom-active__company')
        
        $('.bottom-content__recources__and__company').toggleClass('_bottom-active__company')
        if($('.bottom-content__resources__title').hasClass('_bottom-active__resources')){
            $('.bottom-content__resources__title').removeClass('_bottom-active__resources').next().removeClass('_bottom-active__resources')
            $('.bottom-content__recources__and__company').removeClass('_bottom-active__resources')
        }
        
        
    })
});