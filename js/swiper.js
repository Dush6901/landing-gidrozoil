let swiper = null;

function initSwiper() {
    const mobile = window.innerWidth < 768;

    if (mobile && !swiper) {
        swiper = new Swiper('.examples-slider', {
            slidesPerView: 1,
            spaceBetween: 15,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    if (!mobile && swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);