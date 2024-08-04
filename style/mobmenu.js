let menu = document.querySelector(".menu")
let headerList = document.querySelector(".header-list")
menu.addEventListener("click",function(){
    if(headerList.className === "header-list"){
        headerList.classList.add("open")
    }
    else{
        headerList.classList.remove("open")
    }
})
