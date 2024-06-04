var burgerBtn = document.querySelector("#burger-container button");
var mainNavContainer = document.querySelector("#main-nav");

var mainNavVisible = false;

burgerBtn.addEventListener("click", () =>{
    console.log("burger clicked");

    if(mainNavVisible === false){
        mainNavContainer.classList.remove("hideMainNavatMobile");
        mainNavVisible = true;
    
    }else{
        mainNavContainer.classList.add("hideMainNavatMobile");
        mainNavVisible = false;
    }
})

mainNavContainer.addEventListener("click", function (){
    mainNavContainer.classList.add("hideMainNavatMobile");
        mainNavVisible = false;
})