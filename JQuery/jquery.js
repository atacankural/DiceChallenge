//
//$("body").keypress(function(){
//    $("h1").text(event.key)
//})
//$("h1").css("font-size", 75)
//
//$("h1").on("mouseover", function(){
//    $("h1").css("color", "yellow")
//})
$("h1").css("color", "purple")
$("button").on("click", function(){
    $("h1").animate({margin: "20%"})
})
