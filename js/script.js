console.log("external JS is working");
$(document).ready(function(){

    console.log("jquery has loaded");

    // $("div").hide();

    // $("#box2").hide();
    // $(".box").hide();
    // $("#box4").show();
    // document.getElementById("box4")

    $("#box1").click(function(){

        // console.log("red box has been clicked");
        // $("#box2").hide(2000);
        // $("#box2").toggle();
        // $("#box2").fadeOut();
        // $("#box4").fadeIn();
        // $("#box2").fadeToggle();
        // $("#box4").fadeToggle();

        // $("#box2").toggleClass("boxLarge blue green");
        // .removeClass();

        // $("#box2").css("width", "400px");
        // $("#box2").css({"width":"400px" , "height":"300px"});



    });

    $("#box3").click(function(){
        $("#box2").show();
    });

    $(".box").click(function(){
        $(this).toggleClass("boxLarge");
    });


    // .click();
    // .dblclick();
    // .mouseover();
    // .mouseleave();
    // .hover();








});
