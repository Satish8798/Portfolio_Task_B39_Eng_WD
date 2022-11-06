let tabLinks=document.getElementsByClassName('tab-links');
let tabContents= document.getElementsByClassName('tab-contents');
function openTab(tabName){
    for(let i=0;i<tabLinks.length;i++){
        tabLinks[i].classList.remove('active-link');
    }

    for(let tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab')
}

/* Open and close menu */

let sideMenu=document.getElementById('sideMenu');

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px";
}

/* experience */

let experienceTabLinks=document.getElementsByClassName('exp-tab-links');
let experienceTabContents= document.getElementsByClassName('exp-tab-contents');
function openTabExp(tabName){
    for(let i=0;i<experienceTabLinks.length;i++){
        tabLinks[i].classList.remove('exp-active-link');
    }

    for(let tabContent of experienceTabContents){
        tabContent.classList.remove('exp-active-tab')
    }

    event.currentTarget.classList.add('exp-active-link');
    document.getElementById(tabName).classList.add('exp-active-tab')
}

document.querySelectorAll(`a[href^="#"]`).forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior : "smooth",
            block: "start"
        })
    })

})