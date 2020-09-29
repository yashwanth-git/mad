//Header on Scroll
const header = document.querySelector("header");

let lastOffsetY = window.pageYOffset;

window.onscroll = function () {
    if (window.pageYOffset > lastOffsetY) {
        header.classList.remove("top");
        header.classList.add("hide");
    }
    else if (window.pageYOffset == 0) {
        header.classList.add("top");
    }
    else {
        header.classList.remove("top");
        header.classList.remove("hide");
    }
    lastOffsetY = pageYOffset;
}

//Modal
const heroBtn = document.querySelector('.Hero__btn');
const modal = document.querySelector('.Modal');
const modalClose = document.querySelector('.Modal__close');
heroBtn.addEventListener('click', () => {
    modal.classList.add('open');
})
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
})

$(document).ready(function () {
    //Sliding Underline for Tabs
    $('.Services__list__item').hover(function () {
        let size = $(this).width();
        let pos = $(this).position();
        let marginLeft = parseInt($(this).css('marginLeft')); // To adjust the spacing
        $('.underline').css('width', size);
        $('.underline').css('left', pos.left + marginLeft);
    }, function () {
        let size = $('.current').width();
        let pos = $('.current').position();
        let marginLeft = parseInt($(this).css('marginLeft'));
        $('.underline').css('width', size);
        $('.underline').css('left', pos.left + marginLeft);
    })
    $('.Services__list__item').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
    });
    //Slider
    $('#customer__slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });
    //Auto Tabs variables
    let total = $('.Team__img').length;
    let elementIndex = 0;
    let delay = 4000;
    let timer;
    //Auto tabs
    const autotabs = function () {
        timer = setInterval(() => {
            //Check if current index is last
            if ($('.Team__img.active').index() == total - 1)
                elementIndex = 0;
            else
                elementIndex++;
            //Transfer the active class to next element
            $('.Team__img').eq(elementIndex).addClass('active').siblings().removeClass('active');
            let teamMember = $('.Team__img.active').attr("data-id"); //get corresponding team member id
            $("#" + teamMember).addClass("active").siblings().removeClass('active');
        }, delay);
    }
    autotabs();
    //On click 
    $('.Team__img').click(function () {
        clearInterval(timer);
        elementIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        let teamMember = $(this).attr('data-id');
        $("#" + teamMember).addClass("active").siblings().removeClass('active');
        autotabs();
    })
});