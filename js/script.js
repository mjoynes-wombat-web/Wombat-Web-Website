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
    //$('#header').delay(600)
    //    .queue(function () {
    //        $(this).addClass('topMenu');
    //        $(this).dequeue();
    //    });
    //$('#logo').delay(600)
    //    .queue(function () {
    //        $(this).addClass('topMenu');
    //        $(this).dequeue();
    //    });
    //$('#logotext').delay(600)
    //    .queue(function () {
    //        $(this).addClass('topMenu');
    //        $(this).dequeue();
    //    });
    //$('#nav').delay(600)
    //    .queue(function () {
    //        $(this).addClass('topMenu');
    //        $(this).dequeue();
    //    });
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
