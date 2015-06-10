$(document).ready(function(){
    $('#main').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#footer').hide();
});

function hideMenu(){
    $('#greenLine').fadeToggle(600);
    $('#mission').fadeToggle(600);
    $('#nav').fadeToggle(600);
    $('#logo').fadeToggle(600);
    $('#logotext').fadeToggle(600);
    $('#siteWrapper').fadeToggle(600);
}

function showMenu(){
    $('#greenLine').delay(600).fadeToggle(600);
    $('#mission').delay(600).fadeToggle(600);
    $('#nav').delay(600).fadeToggle(600);
    $('#logo').delay(600).fadeToggle(600);
    $('#logotext').delay(600).fadeToggle(600);
    $('#siteWrapper').delay(600).fadeToggle(600);
}

function moveMenuTop() {
    $('#header').delay(600)
        .queue(function () {
            $(this).addClass('topMenu');
            $(this).dequeue();
        });
    $('#logo').delay(600)
        .queue(function () {
            $(this).addClass('topMenu');
            $(this).dequeue();
        });
    $('#logotext').delay(600)
        .queue(function () {
            $(this).addClass('topMenu');
            $(this).dequeue();
        });
    $('#nav').delay(600)
        .queue(function () {
            $(this).addClass('topMenu');
            $(this).dequeue();
        });
    $('#siteWrapper').delay(600)
        .queue(function () {
            $(this).addClass('content');
            $(this).dequeue();
        });
}

function showMenuTop(){
    $('#main').delay(600).fadeToggle(600);
    $('#logo').fadeToggle(600);//.animate({'opacity':'toggle'}, 600).removeAttr("display");
    $('#logotext').fadeToggle(600);
    $('#nav').fadeToggle(600);
    $('#siteWrapper').fadeToggle(600);
}

function showHome() {
    if($('#about').hasClass('visible') || $('#contact').hasClass('visible')){
        if($('#about').hasClass('visible')){
            $('#about').fadeToggle(600).removeClass('visible');
            $('#nav ul li.about a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }else if($('#contact').hasClass('visible')){
            $('#contact').fadeToggle(600).removeClass('visible');
            $('#nav ul li.contact a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }

        showMenuTop();

        $('#nav ul li.home a').delay(600)
            .queue(function () {
                $(this).addClass('active');
                $(this).dequeue();
            });

        $('#header').delay(600)
            .queue(function () {
                $(this).removeClass('topMenu');
                $(this).dequeue();
            });
        $('#logo').delay(600)
            .queue(function () {
                $(this).removeClass('topMenu');
                $(this).dequeue();
            });
        $('#logotext').delay(600)
            .queue(function () {
                $(this).removeClass('topMenu');
                $(this).dequeue();
            });
        $('#nav').delay(600)
            .queue(function () {
                $(this).removeClass('topMenu');
                $(this).dequeue();
            });
        $('#siteWrapper').delay(600)
            .queue(function () {
                $(this).removeClass('content');
                $(this).dequeue();
            });

        showMenu();
    }
}

function showAbout() {
    if($('#about').hasClass('visible') || $('#contact').hasClass('visible')){
        if($('#about').hasClass('visible')){

        }else if($('#contact').hasClass('visible')){
            $('#contact').fadeToggle(600).removeClass('visible');
            $('#about').delay(600)
                .queue(function () {
                    $(this).fadeToggle(600);
                    $(this).addClass('visible');
                    $(this).dequeue();
                });
            $('#nav ul li.about a').delay(600)
                .queue(function () {
                    $(this).addClass('active');
                    $(this).dequeue();
                });
            $('#nav ul li.home a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
            $('#nav ul li.contact a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }
    }else {
        $('#about').fadeToggle(600).delay(600)
            .queue(function () {
                $(this).addClass('visible');
                $(this).dequeue();
            });
        $('#nav ul li.about a').delay(600)
            .queue(function () {
                $(this).addClass('active');
                $(this).dequeue();
            });
        $('#nav ul li.home a').delay(600)
            .queue(function () {
                $(this).removeClass('active');
                $(this).dequeue();
            });
        $('#nav ul li.contact a').delay(600)
            .queue(function () {
                $(this).removeClass('active');
                $(this).dequeue();
            });
        hideMenu();
        moveMenuTop();
        showMenuTop();
    }
}

function showContact() {
    if($('#about').hasClass('visible') || $('#contact').hasClass('visible')){
        if($('#contact').hasClass('visible')){

        }else{
            $('#about').fadeToggle(600).removeClass('visible');
            $('#contact').delay(600)
                .queue(function () {
                    $(this).fadeToggle(600);
                    $(this).addClass('visible');
                    $(this).dequeue();
                });
            $('#nav ul li.contact a').delay(600)
                .queue(function () {
                    $(this).addClass('active');
                    $(this).dequeue();
                });
            $('#nav ul li.home a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
            $('#nav ul li.about a').delay(600)
                .queue(function () {
                    $(this).removeClass('active');
                    $(this).dequeue();
                });
        }
    }else {
        $('#contact').fadeToggle(600).delay(600)
            .queue(function () {
                $(this).addClass('visible');
                $(this).dequeue();
            });
        $('#nav ul li.contact a').delay(600)
            .queue(function () {
                $(this).addClass('active');
                $(this).dequeue();
            });
        $('#nav ul li.home a').delay(600)
            .queue(function () {
                $(this).removeClass('active');
                $(this).dequeue();
            });
        $('#nav ul li.about a').delay(600)
            .queue(function () {
                $(this).removeClass('active');
                $(this).dequeue();
            });
        hideMenu();
        moveMenuTop();
        showMenuTop();
    }
}