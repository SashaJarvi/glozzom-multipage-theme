$('#year').text(new Date().getFullYear());

$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});

$(function () {
    // Auto play modal video
    $(".video").click(function () {
        let theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

$('[data-fancybox="gallery"]').fancybox({
    buttons : [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close'
    ],
    slideShow : {
        speed : 4000
    },
    loop: true
});

$('body').scrollspy({
    target: '#main-nav'
});

$('#main-nav a').on('click', function(event){
    if(this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        })
    }
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
});