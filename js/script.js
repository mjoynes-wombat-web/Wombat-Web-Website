/*CHANGE ACTIVE MENU FUNCTION*/
window.backPages = [];
window.forwardPages = [];

function changeActive(active){
    $($('.' + active).siblings().children('a')).delay(600)
        .queue(function () {
            $(this).removeClass('active');
            $(this).dequeue();
        });

    $('.' + active + ' a').delay(600)
        .queue(function () {
            $(this).addClass('active');
            $(this).dequeue();
        });
}

///*HIDE HOME*/
//function hideHome(){
//    $('#header').fadeToggle(600);
//    $('#siteWrapper').fadeToggle(600);
//}
//
///*MOVE MENU TOP*/
//function moveMenuTop() {
//    $('#siteWrapper').delay(600)
//        .queue(function () {
//            $(this).addClass('content');
//            $(this).dequeue();
//        });
//}
//
///*SHOW MENU TOP*/
//function showMenuTop(){
//    $('#siteWrapper').delay(600).fadeToggle(600);
//    $('#main').delay(600).fadeToggle(600);
//    $('#footer').delay(600).fadeToggle(600);
//}


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



/*******TOUCH/MOBILE*******/

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    window.isTouch = isTouch;

    /*Load mobile css if touch*/
    if(isTouch){
        $('<link rel="stylesheet" type="text/css" href="./css/mobile.css">').appendTo('head');
    }

    /*Show Mobile Nav function*/
    function showMobileMenu(menu){
        $(menu + ' ul.nav.main').fadeOut(300);
        $(menu).delay(400).queue(function(){
            $(this).addClass('open');
            $(this).dequeue();
        });
        $(menu + ' ul.mobileNav').delay(400).animate({width:'show'}, 600);
    }

    /*Hide mobile nav function*/
    function hideMobileMenu(container, subContainer){
        $(subContainer).animate({width:'hide'}, 600);
        $(container).delay(700).queue(function(){
            $(this).removeClass('open');
            $(this).dequeue();
        });
        $(container + ' ul.nav.main').delay(700).fadeIn(300);
    }


    /*If Touch True Actions*/
    $(document).ready(function() {
        if(isTouch){
            $('#navTopMenuWrapper').prependTo('#headerTopMenuWrapper');
            $('#footer .column.businessInfo .BIcolumn').hide();
            $('#footer .column.sitemap p.sitemapLinks').hide();
            $('#footer .businessInfo h3.footerHeader').click(function(){
                $('#footer .column.businessInfo .BIcolumn').animate({height:'toggle'}, 600);
                $(this).toggleClass('expanded');

                if($('#footer .sitemap h3.footerHeader').hasClass('expanded')){
                    $('#footer .column.sitemap p.sitemapLinks').animate({height:'toggle'}, 600);
                    $('#footer .sitemap h3.footerHeader').removeClass('expanded')
                }
            });

            $('#footer .sitemap h3.footerHeader').click(function(){
                $('#footer .column.sitemap p.sitemapLinks').animate({height:'toggle'}, 600);
                $(this).toggleClass('expanded');

                if($('#footer .businessInfo h3.footerHeader').hasClass('expanded')){
                    $('#footer .column.businessInfo .BIcolumn').animate({height:'toggle'}, 600);
                    $('#footer .businessInfo h3.footerHeader').removeClass('expanded')
                }
            });
        }
    });


    /*Click off mobile nav*/

    $(document).mouseup(function (e){
        //Anytime there is a mouse click run clickOff for #nav.
        clickOffMobileNav(e, "#nav");
    });

    function clickOffMobileNav(e, container)
    {
        //Mobile navigation of container.
        var subContainer = container + " ul.mobileNav";

        //If the subcontainer is not the targed
        if ((!$(subContainer).is(e.target) // if the target of the click isn't the container...
            && $(subContainer).has(e.target).length === 0) // ... nor a descendant of the container
            && $(container).hasClass('open')) //and the container has class open
        {
            hideMobileMenu(container, subContainer); //Run hideMobileMenu with container and subcontainer.
        }
    }


/*******MENU*******/

<<<<<<< HEAD
    /*Main Menu*/

=======
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
>>>>>>> parent of 814b3be... Sub Menu Work


    /*SubMenu*/

    function showSubMenu(element){
        //Add Class open
        $('#nav ul.nav li' + element + ' a').addClass('open');
        //Open element
        $('#nav ul' + element).animate({height:'show'}, 500);
    }

    function hideSubMenu(element){
        //Remove Class open
        $('#nav ul.nav li' + element + ' a').removeClass('open');
        //Close element
        $('#nav ul' + element).animate({height:'hide'}, 500);
    }

    function hideOtherSubMenu(current){

        //If element has class open
        if($('#nav ul.nav li a.open')){

            //Find the parent element and the first item in it's class list.
            var parentLi = $('#nav ul.nav li a.open').parent(),
                submenu = '.' + parentLi[0].classList[0];

            //If it's not the same as the current run hideSubMenu
            if(current != submenu) {
                hideSubMenu(submenu);
            }
        }
    }
<<<<<<< HEAD

$(document).mouseup(function (e){
    //Anytime there is a mouse click run clickOff for #nav.
    clickOffNav(e, "#nav .nav .submenu");
});

//ToDo: Cleanup this function so that clicking on submenu doesn't close. Works for now.

function clickOffNav(e, container)
{
    //Mobile navigation of container.
    //var subContainer = container + " ul.mobileNav";

    //If the subcontainer is not the targed
    if (!$(container).is(e.target) // if the target of the click isn't the container...
        && $(container).has(e.target).length === 0) // ... nor a descendant of the container
    {
        if($('#nav ul.nav li a.open')){

            //Find the parent element and the first item in it's class list.
            var parentLi = $('#nav ul.nav li a.open').parent(),
                submenu = '.' + parentLi[0].classList[0];

            //If it's not the same as the current run hideSubMenu
                hideSubMenu(submenu);
        }
    }
}


=======
});
>>>>>>> parent of 814b3be... Sub Menu Work
