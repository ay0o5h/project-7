//contact us
var fname=document.getElementById('in'),
lname=document.getElementById('in1'),
sub=document.getElementById('in2'),
msg=document.getElementById('in3');
fname.onfocus=function(){
    fname.placeholder=''
}
fname.onblur=function(){
    fname.placeholder='first name'
}
lname.onfocus=function(){
    lname.placeholder=''
}
lname.onblur=function(){
    lname.placeholder='last name'
}
sub.onfocus=function(){
    sub.placeholder=''
}
sub.onblur=function(){
    sub.placeholder='subject'
}
msg.onfocus=function(){
    msg.placeholder=''
}
msg.onblur=function(){
    msg.placeholder='message'
}
$(document).ready(function(){
    //navbar
    $(".navbarr .uk-navbar-right li  ").on('click',function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
   })
   //far button croup
   $(".far .uk-button  ").on('click',function(){
    $(this).addClass("active").siblings().removeClass("active");
})
// far more
$(".far .uk-section i ").on('click',function(){
    $(".more").show();
    $(this).hide();
})
$(".more h3 ").on('click',function(){
    $(".more").hide();
    $(".far .uk-section i").show();
})
})