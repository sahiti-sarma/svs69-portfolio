var burgerBtn = document.querySelector("#burger-container button");
var mainNavContainer = document.querySelector("#main-nav");

var mainNavVisible = false;

burgerBtn.addEventListener("click", () =>{
    console.log("burger clicked")

    if(mainNavVisible === false){
        mainNavContainer.classList.remove("hideMainNav");
        mainNavVisible = true;
    
    }else{
        mainNavContainer.classList.add("hideMainNav");
        mainNavVisible = false;
    }
})

mainNavContainer.addEventListener("click", function(){
    mainNavContainer.classList.add("hideMainNav");
    mainNavVisible = false;
})

    