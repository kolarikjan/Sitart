$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banks__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        responsive : {
            0 : {
                items : 1,
            },
            576 : {
                items : 2,
            },
            993 : {
                items : 4,
            },
            1200 : {
                items : 5,
            },
            1500 : {
                items : 6,
            }
        }
    });
});