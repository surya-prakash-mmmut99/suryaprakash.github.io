

window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY>0)
});



//navigator

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

 navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener("click",()=>{
        menuBtn.classList.remove("active");
         navigation.classList.remove("active");
    });
 });



 let options = {
    startAngle:-1.55,
    size:150,
    value:0.45,
    fill:{gradient:[  "#a445b2" ,"#fa4299"]}
}
$(".bar9").circleProgress(options).on('circle-animation-progress',
function(event,progress,stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) +"%");
});

$(".js .bar9").circleProgress({
    value:0.45,
});
$(".css .bar9").circleProgress({
    value:0.70,
});
$(".cpp .bar9").circleProgress({
    value:0.60,
});
$(".java .bar9").circleProgress({
    value:0.40,
});
$(".react .bar9").circleProgress({
    value:0.60,
});
$(".html .bar9").circleProgress({
    value:0.80,
});
$(".sql .bar9").circleProgress({
    value:0.60,
});
$(".react .bar9").circleProgress({
    value:0.50,
});




