
// MENU HAMBURGER //
var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var sidebar = document.querySelector('#hamburger-sidebar');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;

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

/*window.onhashchange = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else{
    navBar.style.top = "-200px";

    }
    if(skillSection.className ==='section fp-section active' && screen > 768 ){
        switchLinkNav( skillsNav, acceuilNav, profilNav, contactNav);
        navBar.style.backgroundColor="black";
        navBar.style.display = "block";
        //console.log(screen);
        if(slide_skill.className === 'slide fp-slide fp-table active'){
            // ICI POUR ANIMER À L'ARRIVÉE
            animateCapacity_icon();
            
        }
    }
    if(skillSection.className ==='section fp-section active' && screen < 769 ){
        hamburger_icon.style.color= "black";
    }
    if(acceuil.className ==='section fp-section fp-table active' && screen > 768 ){
        switchLinkNav( acceuilNav, profilNav, skillsNav, contactNav);
        navBar.style.display = "none";
    }
    if(acceuil.className ==='section fp-section fp-table active' && screen < 769 ){
        hamburger_icon.style.color= "white";
    }
    if(profilSection.className ==='section fp-section fp-table active' && screen > 768 ){
        switchLinkNav(profilNav, acceuilNav, skillsNav, contactNav);
        navBar.style.backgroundColor="rgba(8,8,8,0)";
        navBar.style.display = "inline-block";
    }
    if(profilSection.className ==='section fp-section fp-table active' && screen < 769 ){
        hamburger_icon.style.color= "white";
    }
    if(contactSection.className ==='section fp-section fp-table active' && screen > 768 ){
        switchLinkNav(contactNav, profilNav, acceuilNav, skillsNav);
        navBar.style.backgroundColor="black";
        navBar.style.boxShadow= "0px 10px 10px rgba(0, 0, 0, 0.25)";
    }
    if(contactSection.className ==='section fp-section fp-table active' && screen < 769 ){
        hamburger_icon.style.color= "black";
    }
prevScrollpos = currentScrollPos;
}*/

function switchLinkNav(elm1, elm2, elm3, elm4){
    setTimeout(function(){
        navBar.style.top = "0";
    elm1.classList.add("activeNav");
    elm2.classList.remove("activeNav");
    elm3.classList.remove("activeNav");
    elm4.classList.remove("activeNav");
    },500);
}

//FIN SCROLL NAVBAR //

//BOUTON MOBILE//
var rightHeader = document.getElementById('rightHeader');
var leftHeader = document.getElementById('leftHeader');
var spanMob = document.getElementById('display_on_off');
var btn_mobile = document.getElementsByTagName('button')[1];
var switch_control = document.getElementsByClassName('switch')[0];
var inputCheck = document.getElementById('checkBox1');
var nbrClick = 0
switch_control.onclick = function(){
    nbrClick ++;
    if(nbrClick%2 !== 0){
        /*btn_mobile.classList.add('displayOn');
        spanMob.classList.remove('spanOff');
        spanMob.classList.add('spanOn');*/
        inputCheck.checked = true;
        rightHeader.style.display= 'none';
        leftHeader.style.display= 'flex';
    }else{
        /*btn_mobile.classList.remove('displayOn');
        spanMob.classList.remove('spanOn');
        spanMob.classList.add('spanOff');*/
        inputCheck.checked = false;
        rightHeader.style.display= 'flex';
        leftHeader.style.display= 'none';
    }
    
}

//FIN BOUTON MOBILE//

//BOUTON A PROPOS //
var aPropos = document.getElementsByTagName('button')[1];
aPropos.onclick = function(){
    location.href = 'index.html#3rdPage';
}

// FIN BOUTON //

// ANIM DÉBUT  ET VÉRIF DEVICE//

var responsive_slide1 = document.getElementById('change_0');
var responsive_slide2 = document.getElementById('change_1');
window.onload = function(){
    if(screen > 768){
        //navBar.style.display = 'none';
        
    }else{
        console.log();
    }
    load();
    
    function load(){
        
        document.getElementById('ordi').style.display = 'block';
        document.getElementById('titre').style.display = 'block';
        document.getElementById('button1').style.display = 'block';
        document.getElementById('icon-scroll').style.display = 'block';
        setTimeout(function(){
            document.getElementById('titre2').style.visibility ='visible';
            animateH2();
            
        },2700)
    }
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
