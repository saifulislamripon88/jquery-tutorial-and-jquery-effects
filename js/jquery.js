$(document).ready(function(){

    $("#demo1").click(function(){
        $(this).hide();
    });


    $(".demo2").click(function(){
        $(this).hide();
    });

    $(".demo3").click(function(){
        $(this).hide();
    });
// dbl click and hide this button
    $(".demo4").dblclick(function(){
        $(this).hide();
    })

    // click btn and remove image

    $("#c_btns1").click(function(){
        $(".portImg1").hide()

    })

    $("#c_btns2").click(function(){
        $(".portImg2").hide()

    })

    $("#c_btns3").click(function(){
        $(".portImg3").hide()

    })

    $("#c_btns4").click(function(){
        $(".portImg4").hide()

    })

    // event

    $(".demo5").click(function(){
        $(this).hide();
    });

    $(".demo6").mouseenter(function(){
        $(this).hide();
    });

    $(".demo7").mouseleave(function(){
        $(this).hide();
    });

    // get alert

    $("#demo8").click(function(){
        alert("hello world");
    });

    // double alert
    $("#demo9").click(function(){
        alert("hello world");
        alert("hello sikhbe sobai");
    });


    // hover event two function
$("#demo10").hover(function(){
    alert("you've entered this button");
}, function(){
    alert("you've left this button");

});



// .............................

//mouse enter mouseleave click properties change heading color 
$("#demo11").on({
    mouseenter: function(){
        $(this).css("background-color","lightgray");   
    },
    mouseleave: function(){
        $(this).css("background-color","lightblue"); 
    },
    click: function(){
        $(this).css("background-color","yellow");
    },
});


//jquery hide and show

$(".bdemo1").click(function(){
    $("#demo12").hide(1000);
});
$(".bdemo2").click(function(){
    $("#demo12").show(1000);
});


// hide and show time duration

$(".bdemo3").click(function(){
    $("#demo13,#demo14").hide(1000);
});

$(".bdemo4").click(function(){
    $("#demo13,#demo14").show(2000);
});


// toogle hide and show

$(".bdemo5").click(function(){
    $(".demo15").toggle(1000);
});

// 


// fadeIn()
$(".bdemo6").click(function(){
    $("#box1").fadeIn();
    $("#box2").fadeIn("slow");
    $("#box3").fadeIn(3000);
    $("#box4").fadeIn(4000);
});


// fadeOut();
$(".bdemo7").click(function(){
    $("#box5").fadeOut();
    $("#box6").fadeOut("slow");
    $("#box7").fadeOut(3000);
    $("#box8").fadeOut(4000);
});

// fadeToggle()

$(".bdemo8").click(function(){
    $("#box9").fadeToggle();
    $("#box10").fadeToggle("slow");
    $("#box11").fadeToggle(2000);
    $("#box12").fadeToggle(3000);
});


// fadeTo()

$(".bdemo9").click(function(){
    $("#box13").fadeTo("slow", 0.15);
    $("#box14").fadeTo("slow", 0.30);
    $("#box15").fadeTo("slow", 0.50);
    $("#box16").fadeTo("slow", 0.75);
});


// slider start here
// slideDown()
$(".flip").click(function(){
    $(".panel").slideDown("slow");
});

// slideUp()

$(".flip1").click(function(){
    $(".panel1").slideUp();
});


// slideToggle()
$(".flip2").click(function(){
    $(".panel2").slideToggle("slow");   
});


// animation

$(".animation_btn").click(function(){
    $(".bbox").animate({ left :'350px'},2000);
});


// 

$(".animation_btn1").click(function(){
    $(".bbox1").animate({
        left :'650px',
        height :'200px',
        width :'200px',
    },2000);
});


// 

$(".animation_btn2").click(function(){
    $(".bbox2").animate({
        height:'toggle',
    });
});



// Uses Queue Functionality 


$(".animation_btn3").click(function(){
    var bbox3 = $(".bbox3");
    bbox3.animate({height :'300px'},"slow");
    bbox3.animate({width :'500px'},"slow");
    bbox3.animate({height :'120px'},"slow");
    bbox3.animate({width :'120px'},"slow");
});
  

// 
$(".animation_btn4").click(function(){
    var bbox4 = $(".bbox4");
    bbox4.animate({left :'550px'},"slow");
    bbox4.animate({fontSize :'50px'},"slow");

})

// 

$(".start_btn").click(function(){
    $(".panel3").slideDown(3000);
})
$(".stop_btn").click(function(){
    $(".panel3").stop();
})


// callback function 

$(".demo20").click(function(){
    $(".demo21").hide("slow",function(){
        alert("This content hide complete")
    });
});


// 

$(".demo22").click(function(){
    $(".demo23,.demo24").hide(2000,function(){
        alert("This content hide complete")
    });
});

// 

$(".demo25").click(function(){
    $(".demo26").css("color","red")
    .slideUp(2000)
    .slideDown(2000);
})
























});