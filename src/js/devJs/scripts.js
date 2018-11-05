jQuery(document).ready(function($){
    var topPos = Math.round($('#main-content-wrap').offset().top);
    var btmpPos = Math.round($('#footer-wrap').offset().top - 300);
    var scroll_pos = Math.round($(window).scrollTop());

    //details-link

    var detailsTop = Math.round($('#details-content').offset().top) - 20;
    var descriptionTop = Math.round($('#description-content').offset().top) - 20;
    var reviewsTop = Math.round($('#reviews-content').offset().top)  - 20;
    var customTabTop = Math.round($('#customTab-content').offset().top) - 20;

    var addActiveClass = function (text){
        $("#aside-nav ul.nav li a").removeClass("active");
        var linkId = document.querySelector("#"+text+"-link");
        $(linkId).addClass("active");
    }

    $(window).resize(function(){
        if ($(window).width() < 768) {
            $("#aside-nav").css({ "position": "relative"  });
        } else {
            $("#aside-nav").css({ "position": "absolute"  })
        }
    });
    
    $("#details-link").on("click", function(){
        $("html, body").animate({ scrollTop: detailsTop }, 800, addActiveClass("details"));
    });

    $("#description-link").on("click", function(){
        $("html, body").animate({ scrollTop: descriptionTop }, 800, addActiveClass("description") );
           
    });

    $("#reviews-link").on("click", function(){
        $("html, body").animate({ scrollTop: reviewsTop }, 800, addActiveClass("reviews")); 
        
    });

    $("#customTab-link").on("click", function(){
        $("html, body").animate({ scrollTop: customTabTop }, 800, addActiveClass("customTab"));
            
    });

    $(window).on("scroll", function(e){
    // https://stackoverflow.com/questions/51652045/animating-back-and-forth-based-on-scroll-position

        scroll_pos = Math.round($(window).scrollTop());
        //console.log("x00x" , e, scroll_pos, topPos, btmpPos);

        if($(window).width() > 768 && scroll_pos >= topPos){
            $("#aside-nav").css({ "position": "fixed"  });
        }

        if($(window).width() > 768 && scroll_pos >= btmpPos){
            $("#aside-nav").css({ "position": "absolute"  })
        }
        
        if(scroll_pos >= detailsTop){  addActiveClass("details");  }
        if(scroll_pos >= descriptionTop){  addActiveClass("description"); }
        if(scroll_pos >= reviewsTop){  addActiveClass("reviews"); } 
        if(scroll_pos >= customTabTop){ addActiveClass("customTab"); }
    });
});


/* $("#details").on("click", function(){
    $('html, body').animate({
        scrollTop: $(this).css('top')
    }, 800);
    
});
$("#description").on("click", function(){
    console.log("clicked", $(window).scrollTop(), $("#section2").offset().top);
    
    var scrollvalue = $(window).scrollTop();
    $('html, body').animate({
        //scrollTop: $("#section2").css('top')
        scrollTop: Math.round($("#section2").offset().top)
    }, 800);
    $('#aside-nav').animate({"top" : Math.round($("#section2").offset().top) }, 800);
});
$("#reviews").on("click", function(){
    $('html, body').animate({
        //scrollTop: $("#section3").css('top')
        scrollTop: Math.round($("#section3").offset().top)
    }, 800);
    $('#aside-nav').animate({"top" : Math.round($("#section3").offset().top) }, 800);
}); */