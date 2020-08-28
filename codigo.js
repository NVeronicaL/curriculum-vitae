$(document).ready(function(){
    $(".item-0").click(function(){
        $(".skill-0").toggle(100);
    });

    $(".item-1").click(function(){
        $(".skill-1").toggle(100);
    });

    $(".item-2").click(function(){
        $(".skill-2").toggle(100);
    });
    
    $(".item-3").click(function(){
        $(".skill-3").toggle(100);
    });

    $(".item-4").click(function(){
        $(".skill-4").toggle(100);
    });

    $("#menu-icon").click(function(){
        $(this).next().slideToggle();
    });
    
    $(window).on('resize', function(){
        
        if ( $(this).width() > 660 ) {
            $("nav").show();
        } else {
            $("nav").hide(); 
        }
    });

});


