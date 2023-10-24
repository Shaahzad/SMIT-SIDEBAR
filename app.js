const sidenav = document.getElementById("side-nav")

function burger(){
    if(sidenav.classList.contains("show")){
        sidenav.classList.remove("show")
    }else{
        sidenav.classList.add("show")
    }
}
function cross (){
    sidenav.classList.add("show")
}