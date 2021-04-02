// Scroll to top button

var mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.bottom = "30px";
        mybutton.style.opacity = "1"
    } else {
        mybutton.style.bottom = "";
        mybutton.style.opacity = ""
    }
})

function topFunction() {
    //   document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Hamburger menu
var navBar = document.querySelector('header .nav-bar'),
    hamburger = document.querySelector('header .hamburger-menu'),
    linkWraps = document.querySelectorAll('header nav ul .nav-link .link-wrap'),
    dropHead = document.querySelectorAll('header nav ul .nav-link .dropdown-menu .dropdown-head');

// Hamburger click
hamburger.addEventListener('click', function () {
    if (navBar.style.left === "") {
        navBar.style.left = "0";
        document.body.style.overflowY = "hidden"
    } else {
        navBar.style.left = "";
        document.body.style.overflowY = "";
    }
});

// Clicking on the navLink
linkWraps.forEach(wrap => {
    wrap.addEventListener('click', function () {
        wrap.nextElementSibling.style.left = "0";
    })
})

// Clicking on the dropdown menu to go back
dropHead.forEach(head => {
    head.addEventListener('click', function () {
        head.parentElement.style.left = "440px"
    })
});

// Freelancer cards slider
var cards = document.querySelectorAll('.freelancers .container .freelancers-profiles .profile'),
    rightArrow = document.querySelector('.freelancers .right'),
    leftArrow = document.querySelector('.freelancers .left');

rightArrow.addEventListener('click', function () {
    for (i = 0; i < cards.length; i++) {
        cards[i].style.transform = "translate(-107%, 0)"
    };
    cards[0].classList.add('hide');
    cards[3].classList.remove('hide');
});
leftArrow.addEventListener('click', function () {
    for (i = 0; i < cards.length; i++) {
        cards[i].style.transform = "translate(0, 0)"
    }
    cards[3].classList.add('hide');
    cards[0].classList.remove('hide');

});

console.log(cards.length)