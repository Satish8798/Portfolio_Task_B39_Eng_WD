let tabLinks=document.getElementsByClassName('tab-links');
let tabContents= document.getElementsByClassName('tab-contents');
let a=[1,2]
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