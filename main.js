$(document).ready(function(){
console.log("this is checked");
$("#newon2 .owl-carousel").owlCarousel({
    dots:false,
    loop:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        1000:{
            items:4
        },
       
    }
});

var $grid= $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'masonry',
});
$(".button-group").on('click', 'button' ,function(){
var filtervalue=$(this).attr('data-filter');
console.log("heyyyy");
$grid.isotope({filter:filtervalue});




});

// var count=1;
// var wishitem= document.querySelector("#wish-item");
// for(var i=0;i<document.querySelectorAll(".bottom-part .btn").length;i++){
  

//    document.querySelectorAll(".bottom-part .btn")[i].addEventListener("click",function(){
//        console.log("clicked");
//        wishitem.textContent=count;
//        console.log(count);
//        count++;

       

//    })
// }
// var count=0;

// $(".bottom-part .btn i").toggle(
//    function(){ 
//     count++;
//     $("#wish-item").textContent=count;
//      console.log(count);},

//     function(){ 
//     count--;
//     $("#wish-item").textContent=count;
//     console.log(count);},

// );

})

