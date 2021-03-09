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

    // $("#menu-icon").click(function(){
    //     $(this).next().slideToggle();
    // });
    
    // $(window).on('resize', function(){
        
    //     if ( $(this).width() > 660 ) {
    //         $("nav").show();
    //     } else {
    //         $("nav").hide(); 
    //     }
    // });

});


document.getElementById('e1').addEventListener('click', function() {
    candado = document.getElementById('ocultarMenu').click()
    //console.log(candado) 
});

document.getElementById('e2').addEventListener('click', function() {
    candado = document.getElementById('ocultarMenu').click()
    //console.log(candado) 
    // document.getElementById('navPersonlizado').style.visibility = 'hidden'
});

document.getElementById('e3').addEventListener('click', function() {
    candado = document.getElementById('ocultarMenu').click()
    //console.log(candado) 
    // document.getElementById('navPersonlizado').style.visibility = 'hidden'
});

document.getElementById('e4').addEventListener('click', function() {
    candado = document.getElementById('ocultarMenu').click()
    //console.log(candado)
    // document.getElementById('navPersonlizado').style.visibility = 'hidden'
});

function irArriba() {
    window.location = 'index.html'
}

function irPortafolio() {
    window.location = '#portafolio';
}

var myTooltipEl = document.getElementById('myTooltip')
var tooltip = new bootstrap.Tooltip(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
    tooltip.show();
})

tooltip.hide();
