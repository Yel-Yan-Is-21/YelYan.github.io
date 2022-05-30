/*----------------------TESTIMONIAL SWIPER--------------------- */
let swiper = new Swiper(".testimonial-wrapper", {
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
/*----------------------DISAPPAER FIX ARROW WHEN SCROLL--------------------- */
const fixArrow = document.querySelector(".go-top");
window.addEventListener("scroll", function(){
    if(scrollY > 20){
        removeVanish();
    } else {
        fixArrow.classList.add("vanish")
    }
});
function removeVanish (){
    if(fixArrow.classList.contains("vanish")){
        fixArrow.classList.remove("vanish");
    };
};

/*----------------------SHOW MENU--------------------- */
const navMenu = document.querySelector(".nav-menu"),
      navToggle = document.querySelector(".nav-toggle"),
      navClose = document.querySelector(".nav-close");

navToggle.addEventListener("click", showMenu);
function showMenu () {
    navMenu.classList.toggle("show-menu");
    // close nav menu 
    navClose.addEventListener("click", function(){
        navMenu.classList.remove("show-menu");
    })
}

/* ---close nav menu with every nav links--- */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((eachLink) => {
    eachLink.addEventListener("click", function (){
        navMenu.classList.remove("show-menu");

        // remove active link
        removeActiveLink();
        //add active link later, unless active link will be remove
        addActiveLink(eachLink);
    });
});
function removeActiveLink () {
    navLinks.forEach((link) => {
        link.classList.remove("active-link");
    });
// This below way also work
    // for(let i = 0; i < navLinks.length; i++){
    //     navLinks[i].classList.remove("active-link");
    // }
}
function addActiveLink (num) {
    num.classList.add("active-link");
}
/*----------------------PUT BOX SHADOW TO HEADER WHEN SCROLL--------------------- */
const header = document.querySelector("#header");

window.addEventListener("scroll", scrollHeader);

function scrollHeader () {
// put scroll class to header when scroll is greater than 80
    if(this.scrollY > 80) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}
/*----------------------SCROLL SECTIONS ACTIVE LINK--------------------- */
const sections = document.querySelectorAll("section");

// addeventlistener for scroll
window.addEventListener("scroll", navHighLighter);

function navHighLighter() {
    // get current position
    let scrollY = window.pageYOffset;
    //now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        let sectionId = current.getAttribute("id");

/* - If our current scroll position enters the space where current section on screen is, add .active clas to
    coressponding navigation link, else remove it.
    - To know which link needs an active class, we use sectionId variable we are getting while looping though
    sections as an selection
*/
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        navLinks.forEach((link) => {
            link.classList.remove("active-link");
            if(link.getAttribute("href") == "#" + sectionId) {
                link.classList.add("active-link");
            };
        });
    } 
        

    });
}

/*----------------------DISPLAY THEME CUSTOMIZE--------------------- */
const themeBtn = document.querySelector("#theme-button");
const themeModal = document.querySelector(".theme-customize");
const themeClose = document.querySelector("#theme-close");

themeBtn.addEventListener("click", displayThemeModal);
themeClose.addEventListener("click", removeThemeModal);
/*---when click themeModal's background remove theme modal---*/
themeModal.addEventListener("click", closeThemeModalWhenClickBackground);

function displayThemeModal() {
    themeModal.classList.toggle("display-theme")
};
function removeThemeModal () {
    themeModal.classList.remove("display-theme");
}        
function closeThemeModalWhenClickBackground (e) {
    if(e.target.classList.contains("theme-customize")){
        themeModal.classList.remove("display-theme");
    }
}

/*----------------------FONTS--------------------- */
const fontSizes = document.querySelectorAll(".choose-size span");

fontSizes.forEach((size) => {
    size.addEventListener("click", function() {
        let fontSize;

        if(size.classList.contains("font-size-1")){
            fontSize = "12px";
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "14px";
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "18px";
        }
        //change font size of the root html element
        document.querySelector("html").style.fontSize = fontSize;

        //remove active from fontSizes
        removeActiveFontSizes();
        //addActiveFontSizes
        addActiveFontSizes(size);
    });
});
function removeActiveFontSizes () {
    for(let i= 0; i < fontSizes.length; i++){
        fontSizes[i].classList.remove("active");
    }
}
function addActiveFontSizes (size) {
    size.classList.add("active");
}
/*----------------------COLOR--------------------- */
const colorPalette = document.querySelectorAll(".choose-color span");
let root = document.querySelector(":root");

// change primary color
colorPalette.forEach((color) => {
    color.addEventListener("click", function () {
        let primaryHue;

        if(color.classList.contains("color-1")){
            primaryHue = 252;
        } else if(color.classList.contains("color-2")){
            primaryHue = 52;
        } else if(color.classList.contains("color-3")){
            primaryHue = 352;
        } else if(color.classList.contains("color-4")){
            primaryHue = 152;
        } else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }

        // setproperty always needs two arguments
        root.style.setProperty("--primary-hue", primaryHue); 

        // remove active color
        removeColorActive();
        //add active color
        addColorActive(color);
    });
});

function removeColorActive () {
    colorPalette.forEach((clr) => {
        clr.classList.remove("active");
    });
}
function addColorActive (color) {
    color.classList.add("active")
}
/*----------------------CHANGE BACKGROUND COLOR--------------------- */
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
const body = document.querySelector("body");


let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

bg1.addEventListener("click", () => {
    darkColorLightness = "16%";
    lightColorLightness = "92%";
    whiteColorLightness = "99%";

    // add active link
    bg1.classList.add("active");

    //remove activelink
    bg2.classList.remove("active");
    bg3.classList.remove("active");

    changeBg();

    //remove customized changes from local storage
    // window.location.reload();
});
bg2.addEventListener("click", () => {
    darkColorLightness= "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // add active class
    bg2.classList.add('active');
    // remove active class
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    //change background
    changeBg();
});
bg3.addEventListener("click", () => {
    darkColorLightness= "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // add active class
    bg3.classList.add('active');
    // remove active class
    bg1.classList.remove("active");
    bg2.classList.remove("active");

    //change background
    changeBg();
});
function changeBg () {
    body.classList.add("delay");
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
}
/*----------------------PORTFOLIO ITEM FILTER--------------------- */
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = document.querySelectorAll(".portfolio-filter-inner button"),
      portFolioItems = document.querySelectorAll(".portfolio-item");

      
filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add('active');

        const filterValue = this.getAttribute("data-filter");
        
        for(let i = 0; i < portFolioItems.length; i++){
            if(filterValue === portFolioItems[i].getAttribute("data-category")){
                portFolioItems[i].classList.remove("hide");
                portFolioItems[i].classList.add("show");
            } else {
                portFolioItems[i].classList.add("hide");
                portFolioItems[i].classList.remove("show");
            }
            if(filterValue === "all"){
                portFolioItems[i].classList.remove("hide");
                portFolioItems[i].classList.add("show");
            }
        }
    });
});