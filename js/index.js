// Your code goes here
const navItems = document.querySelectorAll("nav a");
console.log(navItems);

//Stop Nav Items from Refreshing
navItems[0].addEventListener("click", function(event){
    event.preventDefault();
})
navItems[1].addEventListener("click", function(event){
    event.preventDefault();
})
navItems[2].addEventListener("click", function(event){
    event.preventDefault();
})
navItems[3].addEventListener("click", function(event){
    event.preventDefault();
})


//Type 1
navItems[0].addEventListener("mouseover", function() {
    navItems[0].style.color = "orange";
});
//Type 2
navItems[0].addEventListener("mouseout", function() {
    navItems[0].style.color = "#212529";
});

navItems[1].addEventListener("mouseover", function() {
    navItems[1].style.color = "orange";
});

navItems[1].addEventListener("mouseout", function() {
    navItems[1].style.color = "#212529";
});

navItems[2].addEventListener("mouseover", function() {
    navItems[2].style.color = "orange";
});

navItems[2].addEventListener("mouseout", function() {
    navItems[2].style.color = "#212529";
});

navItems[3].addEventListener("mouseover", function() {
    navItems[3].style.color = "orange";
});

navItems[3].addEventListener("mouseout", function() {
    navItems[3].style.color = "#212529";
});
//Type 3
navItems[3].addEventListener("click", function() {
    navItems[3].style.color = "red";
});

const headerImg = document.querySelector("header img");

//Type 4
document.addEventListener("keydown", function(){
    document.body.style.backgroundColor = "pink";
});

//Type 5
document.addEventListener("keyup", function(){
    document.body.style.backgroundColor = "white";
});
//Type 6
document.addEventListener("scroll", function(){
    document.body.style.backgroundColor = "red";
});
//Stop Propagation on scroll
document.addEventListener("scroll", function(event){
    event.stopPropagation();
});
//Type 7
document.querySelector("p").addEventListener("copy", function(){
    document.querySelector("p").style.color = "blue";
});
//Type 8
document.querySelector("p").addEventListener("dblclick", function(){
    document.querySelector("p").style.color = "#212529";
});
//Type 9
document.querySelector(".destination").addEventListener("mouseenter", function(){
    document.querySelector(".destination").style.color = "green";
});
//Type 10
document.querySelector(".destination").addEventListener("mouseleave", function(){
    document.querySelector(".destination").style.color = "#212529";
});

