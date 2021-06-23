
// MENU HAMBURGER //
var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var sidebar = document.querySelector('#hamburger-sidebar');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var responsiveBtn_nav = document.querySelectorAll('.responsiveBtn_nav');
var activatedClass = 'hamburger-activated';

//sidebarBody.innerHTML = content.innerHTML;

//console.log(responsiveBtn_nav.length);
for(i = 0; i < responsiveBtn_nav.length; i++){
    responsiveBtn_nav[i].onclick = function(){
        //setTimeout(function(){
            this.parentNode.classList.remove(activatedClass);
            setTimeout(function(){
            sidebar.style.display = "none";
            overlay.style.display = "none";
        },200);
    }
}

button.addEventListener('click', function(e){
    e.preventDefault()

    this.parentNode.classList.add(activatedClass);
    sidebar.style.display = "block";
    overlay.style.display = "block";
    //navBar.style.display= "block";
});

// À voir l'intêret //
button.addEventListener('click', function(e){
    if(this.parentNode.classList.contains(activatedClass)){
        if(e.repeat === false && e.which === 27){
            this.parentNode.classList.remove(activatedClass);
            sidebar.style.display = "none";
            overlay.style.display = "none";
        }
    }
});

overlay.addEventListener('click', function(e){
    e.preventDefault();

    this.parentNode.classList.remove(activatedClass);
    sidebar.style.display = "none";
    overlay.style.display = "none";
});

// FIN MENU HAMBURGER //

// SCROLL NAVBAR  AND ANIM LINK //

var prevScrollpos = window.pageYOffset;
var navBar = document.getElementById("navBar");
var screen = window.innerWidth;
var skillSection = document.getElementById("section1");
var acceuil = document.getElementById("section0");
var profilSection = document.getElementById("section3");
var contactSection = document.getElementById("section4");
var acceuilNav = document.getElementById("acceuilNav");
var skillsNav = document.getElementById("skillsNav");
var profilNav = document.getElementById("profilNav");
var contactNav = document.getElementById("contactNav");
var scrollIcon = document.getElementsByClassName("icon-scroll")[0];
var slide_skill = document.getElementById('slide1');
var slide_softSkill = document.getElementById('slide2');
var icon_1 = document.getElementById('capacity-icon1-glob');
var icon_2 = document.getElementById('capacity-icon2-glob');
var hamburger_icon = document.getElementById('hamburger-button');
var nav_li =document.getElementsByClassName('nav_li');


window.onhashchange = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        //navBar.style.top = "0";
        alert('ok');
    } else{
        navZoom_out();
    }
    if(skillSection.className ==='section fp-section active' && screen > 768 ){
        whiteNav_scroll(nav_li[1], nav_li[3], nav_li[0], nav_li[2]);

        if(slide_skill.className === 'slide fp-slide fp-table active'){
            // ICI POUR ANIMER À L'ARRIVÉE
            //animateCapacity_icon();       
        }
    }
    if(skillSection.className ==='section fp-section active' && screen < 769 ){
        //hamburger_icon.style.color= "black";
    }
    if(acceuil.className ==='section fp-section fp-table active' && screen > 768 ){
        blackNav_scroll(nav_li[0], nav_li[2], nav_li[1], nav_li[3]);
    }
    if(acceuil.className ==='section fp-section fp-table active' && screen < 769 ){
        //hamburger_icon.style.color= "white";
    }
    if(profilSection.className ==='section fp-section fp-table active' && screen > 768 ){
        blackNav_scroll(nav_li[2], nav_li[0], nav_li[1], nav_li[3]);
    }
    if(profilSection.className ==='section fp-section fp-table active' && screen < 769 ){
        //hamburger_icon.style.color= "white";
    }
    if(contactSection.className ==='section fp-section fp-table active' && screen > 768 ){
        whiteNav_scroll(nav_li[3], nav_li[1], nav_li[0], nav_li[2]);
    }
    if(contactSection.className ==='section fp-section fp-table active' && screen < 769 ){
        //hamburger_icon.style.color= "black";
    }
prevScrollpos = currentScrollPos;
}

acceuilNav.onclick = function(){
    blackNav_scroll(nav_li[0], nav_li[2], nav_li[1], nav_li[3]);
}

skillsNav.onclick = function(){
    whiteNav_scroll(nav_li[1], nav_li[3], nav_li[0], nav_li[2]);
}

profilNav.onclick = function(){
    blackNav_scroll(nav_li[2], nav_li[0], nav_li[1], nav_li[3]);
}

contactNav.onclick = function(){
    whiteNav_scroll(nav_li[3], nav_li[1], nav_li[0], nav_li[2]);
}

function blackNav_click(item1, item2, item3, item4){
    item1.classList.add('block_2out_nav');
    item1.classList.remove('navDark');
    item1.classList.add('activeNav_dark');
    item2.classList.remove('activeNav_dark');
    item2.classList.add('navDark');
    item3.classList.remove('activeNav_white');
    item3.classList.add('navDark');
    item4.classList.remove('activeNav_white');
    item4.classList.add('navDark');
    blackNav_glob();
}
function blackNav_scroll(item1, item2, item3, item4){
    setTimeout(function(){
        item1.classList.remove('navDark');
        item1.classList.add('activeNav_dark');
        item2.classList.remove('activeNav_dark');
        item2.classList.add('navDark');
        item3.classList.remove('activeNav_white');
        item3.classList.add('navDark');
        item4.classList.remove('activeNav_white');
        item4.classList.add('navDark');
    },100)
    blackNav_glob();
}

function whiteNav_click(item1, item2, item3, item4){
    item1.classList.add('block_2out_nav');
    item1.classList.remove('navHhite');
    item1.classList.add('activeNav_white');
    item2.classList.remove('activeNav_white');
    item2.classList.add('navWhite');
    item3.classList.remove('activeNav_dark');
    item3.classList.add('navWhite');
    item4.classList.remove('activeNav_dark');
    item4.classList.add('navWhite');
    whiteNav_glob();
}
function whiteNav_scroll(item1, item2, item3, item4){
    setTimeout(function(){
        item1.classList.remove('navHhite');
        item1.classList.add('activeNav_white');
        item2.classList.remove('activeNav_white');
        item2.classList.add('navWhite');
        item3.classList.remove('activeNav_dark');
        item3.classList.add('navWhite');
        item4.classList.remove('activeNav_dark');
        item4.classList.add('navWhite');
    },100)
    whiteNav_glob();
}

function whiteNav_glob(){
    setTimeout(function(){
        whiteNav();
        animNav_glob();
    },100)
}

function blackNav_glob(){
    setTimeout(function(){
        darkNav();
        animNav_glob();
    },100)
}

function navZoom_out(){
    nav_li[0].classList.remove('block_2out_nav');
    nav_li[0].classList.add('navScroll_out');
    nav_li[1].classList.remove('block_2out_nav');
    nav_li[1].classList.add('navScroll_out');
    nav_li[2].classList.remove('block_2out_nav');
    nav_li[2].classList.add('navScroll_out');
    nav_li[3].classList.remove('block_2out_nav');
    nav_li[3].classList.add('navScroll_out');
}

function whiteNav(){
    nav_li[0].classList.remove('navDark');
    nav_li[1].classList.remove('navDark');
    nav_li[2].classList.remove('navDark');
    nav_li[3].classList.remove('navDark');
    nav_li[0].classList.add('navWhite');
    nav_li[1].classList.add('navWhite');
    nav_li[2].classList.add('navWhite');
    nav_li[3].classList.add('navWhite');
}

function darkNav(){
    nav_li[0].classList.remove('navWhite');
    nav_li[1].classList.remove('navWhite');
    nav_li[2].classList.remove('navWhite');
    nav_li[3].classList.remove('navWhite');
    nav_li[0].classList.add('navDark');
    nav_li[1].classList.add('navDark');
    nav_li[2].classList.add('navDark');
    nav_li[3].classList.add('navDark');
}

//FIN SCROLL NAVBAR //

//BOUTON MOBILE//
var rightHeader = document.getElementById('rightHeader');
var leftHeader = document.getElementById('leftHeader');
var profilLeft = document.getElementById('profil-left');
var profilRight = document.getElementById('profil-right');
var switch_control = document.getElementsByClassName('switch');
var inputCheck = document.getElementById('checkBox1');
var inputCheck1 = document.getElementById('checkBox2');
var nbrClick = 0

switch_control[0].onclick = function(){
    toggleMob(inputCheck, rightHeader, leftHeader);
}
switch_control[1].onclick = function(){
    toggleMob(inputCheck1, profilLeft, profilRight);
}
function toggleMob(item1,item2,item3){
    nbrClick ++;
    if(nbrClick%2 !== 0){
        item1.checked = true;
        item2.style.display= 'none';
        item3.style.display= 'flex';
    }else{
        item1.checked = false;
        item2.style.display= 'flex';
        item3.style.display= 'none';
    }
}
//FIN BOUTON MOBILE//

//BOUTON A PROPOS //
var aPropos = document.getElementsByTagName('button')[1];
aPropos.onclick = function(){
    location.href = 'index.html#3rdPage';
    blackNav_click(nav_li[2], nav_li[0], nav_li[1], nav_li[3]);
}

// FIN BOUTON //

// ANIM DÉBUT  ET VÉRIF DEVICE//

/*var responsive_slide1 = document.getElementById('change_0');
var responsive_slide2 = document.getElementById('change_1');*/
var titre1 = document.getElementById('titre1');
var ordi = document.getElementById('ordi');
var titre = document.getElementById('titre');
var button1 = document.getElementById('button1');
var icon_scroll = document.getElementById('icon-scroll');

window.onload = function(){
    if(screen > 768){
        //navBar.style.display = 'none';
        nav_li[0].style.visibility= 'hidden';
        nav_li[1].style.visibility= 'hidden';
        nav_li[2].style.visibility= 'hidden';
        nav_li[3].style.visibility= 'hidden';
    }else{
        ordi.classList.remove('block_2out');
        ordi.classList.add('block_2out_mobile');
    }
    load();
}
function load(){
        
    ordi.style.display = 'block';
    titre.style.display = 'block';
    button1.style.display = 'block';
    icon_scroll.style.display = 'block';
    setTimeout(function(){
        document.getElementById('titre2').style.visibility ='visible';
        animateH2();
        titre1.classList.remove('block_1out');
        ordi.classList.remove('block_2out');
        ordi.classList.remove('block_2out_mobile');
        titre.classList.remove('block_2out');
        button1.classList.remove('block_2out');
        animNav_glob();
        
        var nextIcon = document.getElementsByClassName('fp-next')[0];
        var prevIcon = document.getElementsByClassName('fp-prev')[0];
        
        nextIcon.onclick = function(){
            whiteNav_click(nav_li[1], nav_li[3], nav_li[0], nav_li[2]);
        }
        
        prevIcon.onclick = function(){
            whiteNav_click(nav_li[1], nav_li[3], nav_li[0], nav_li[2]);
        }
        
    },3700)
}
function animNav_glob(){
    animNav(nav_li[0]);
            setTimeout(function(){
                animNav(nav_li[1])
                setTimeout(function(){
                    animNav(nav_li[2])
                    setTimeout(function(){
                        animNav(nav_li[3])
                    },200);
                },200);
            },200);
}
function animNav(item){
    item.style.visibility='visible';
    item.classList.add('block_2out_nav');
}

//ESSAI ANIM H2 //

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 1;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

function animateH2() {
    
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
/*window.onload = function animateH2() {
    if(screen > 768){
        navBar.style.display = 'none';
    }
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }*/
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
    document.body.appendChild(css);
};

//FIN ESSAI//

/************************************************************/
/******************ESSAI ANIM CAPACITY ICON*************/
/***********************************************************/


var icon_2 = document.getElementById('capacity-icon2-glob');

//animateCapacity_icon();
function animateCapacity_icon(){
    icon_1.classList.add('fadeOutRight');
    icon_1.onanimationstart = animateCapacity_icon_1();
}
function animateCapacity_icon_1(){
    setTimeout(function(){
        icon_1.style.display = 'none';
        icon_1.classList.remove('fadeOutRight');
        icon_2.classList.add('fadeInLeft');
        icon_2.style.display = 'flex';
        icon_2.onanimationend = function(){
            icon_2.classList.remove('fadeInLeft');
            icon_2.classList.add('fadeOutRight');
            icon_2.onanimationstart = setTimeout(function(){
                icon_2.classList.remove('fadeOutRight');
                icon_2.style.display ='none';
                icon_1.classList.add('fadeInLeft');
                icon_1.style.display = 'flex';
                setTimeout(function(){
                    icon_1.classList.remove('fadeInLeft');
                    animateCapacity_icon();
                },3000)
            },3000) 
        }
    },3000)
}

/***************************************************************/
/********************************hover h2***********************/
/**************************************************************/

var h2_1 = document.getElementById('titre1');
var h2_2 = document.getElementById('titre2');
var clickCount= 0;

h2_1.onclick = function(){
        h2_1.style.display = 'none';
    h2_2.style.display = 'block';    
}
h2_2.onclick = function(){
    h2_1.style.display = 'block';
    h2_2.style.display = 'none';
}
