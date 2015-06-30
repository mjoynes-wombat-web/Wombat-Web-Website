$(document).ready(function(){
    $('#main').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#footer').hide();
});

/*SHOW PAGE FUNCTION*/
function showPage(show){

    var hide = document.querySelector('#navTopMenu ul.nav li a.active').parentNode.classList[0];

    if($('#' + show).hasClass('visible') || $('#' + hide).hasClass('visible')){
        if($('#' + show).hasClass('visible')){

        }else if($('#' + hide).hasClass('visible')){
            $('#' + hide).fadeToggle(600).removeClass('visible');
            $('#' + show).delay(600)
                .queue(function () {
                    $(this).fadeToggle(600);
                    $(this).addClass('visible');
                    $(this).dequeue();
                });

            changeActive('#navTopMenu ul li.' + show + ' a', '#nav ul li.home a', '#navTopMenu ul li.' + hide + ' a');

        }
    }else {
        hideHome();
        moveMenuTop();

        changeActive('#navTopMenu ul li.' + show + ' a', '#nav ul li.home a', '#navTopMenu ul li.' + hide + ' a');

        showMenuTop();

        $('#' + show).fadeToggle(600).delay(600)
            .queue(function () {
                $(this).addClass('visible');
                $(this).dequeue();
            });


    }
}

/*CHANGE ACTIVE MENU FUNCTION*/
function changeActive(active, inactive1, inactive2){
    $(active).delay(600)
        .queue(function () {
            $(this).addClass('active');
            $(this).dequeue();
        });
    $(inactive1).delay(600)
        .queue(function () {
            $(this).removeClass('active');
            $(this).dequeue();
        });
    $(inactive2).delay(600)
        .queue(function () {
            $(this).removeClass('active');
            $(this).dequeue();
        });
}

/*HIDE HOME*/
function hideHome(){
    $('#header').fadeToggle(600);
    $('#siteWrapper').fadeToggle(600);
}

/*MOVE MENU TOP*/
function moveMenuTop() {
    $('#siteWrapper').delay(600)
        .queue(function () {
            $(this).addClass('content');
            $(this).dequeue();
        });
}

/*SHOW MENU TOP*/
function showMenuTop(){
    $('#siteWrapper').delay(600).fadeToggle(600);
    $('#main').delay(600).fadeToggle(600);
    $('#footer').delay(600).fadeToggle(600);
}


/*******HOME********/

/*SHOW HOME*/
function showHome() {
    if($('#about').hasClass('visible') || $('#contact').hasClass('visible')){
        if($('#about').hasClass('visible')){
            $('#about').fadeToggle(600).removeClass('visible');
            $('#navTopMenu ul li.about a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }else if($('#contact').hasClass('visible')){
            $('#contact').fadeToggle(600).removeClass('visible');
            $('#navTopMenu ul li.contact a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }

        $('#siteWrapper').fadeToggle(600).delay(600)
            .queue(function () {
                $(this).removeClass('content');
                $('#header').removeAttr('style');
                $(this).fadeToggle(600);
                $(this).dequeue();
            });
        $('#main').fadeToggle(600);
        $('#footer').fadeToggle(600);

        $('#nav ul li.home a').delay(600)
            .queue(function () {
                $(this).addClass('active');
                $(this).dequeue();
            });

        $('#navTopMenu ul li.home a').delay(600)
            .queue(function () {
                $(this).addClass('active');
                $(this).dequeue();
            });
    }
}

/*******MOBILE*******/

/*SHOW MOBILE MENU*/

function showMobileMenu(menu){
    $(menu + ' ul.nav').fadeOut(300);
    $(menu).delay(400).queue(function(){
        $(this).addClass('open');
        $(this).dequeue();
    });
    $(menu + ' ul.mobileNav').delay(400).animate({width:'show'}, 600);
}

function hideMobileMenu(container, subContainer){
    $(subContainer).animate({width:'hide'}, 600);
    $(container).delay(700).queue(function(){
        $(this).removeClass('open');
        $(this).dequeue();
    });
    $(container + ' ul.nav').delay(700).fadeIn(300);
}

$(document).mouseup(function (e){
    clickOff(e, "#navTopMenu");
});

$(document).mouseup(function (e){
    clickOff(e, "#nav");
});

function clickOff(e, container)
{
    var subContainer = container + " ul.mobileNav";

    if ((!$(subContainer).is(e.target) // if the target of the click isn't the container...
        && $(subContainer).has(e.target).length === 0) && $(container).hasClass('open')) // ... nor a descendant of the container
    {
        hideMobileMenu(container, subContainer);
    }
}


var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

console.log(isTouch);

if(isTouch){
    $('<link rel="stylesheet" type="text/css" href="./css/mobile.css">').appendTo('head');
}
