$(function () {
    // sliders
    $('.reviews__slider').slick({
        adaptiveHeight: true
    });
    $('.blog__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="blog__prev-arrow"><img src="images/prev-arrow.svg"></button>',
        nextArrow: '<button class="blog__next-arrow"><img src="images/next-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // fixed header
    let header = $("#header");
    let top = $("#top");
    let topH = top.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        topH = top.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > topH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // menu open
    $('.header__burger').on('click', function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('open');
    })
});

// smooth scroll

const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
            const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: scrollToBlockValue - 50,
                behavior: 'smooth'
            });
            e.preventDefault();
            document.querySelector('.header__menu').classList.remove('open');
        };
    };
};
