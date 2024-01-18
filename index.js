var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right = 0
})
closeNav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})