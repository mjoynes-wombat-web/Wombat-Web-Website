$(document).ready(function(){
    $('#main').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#footer').hide();
});

function showMain(){
    $('#about').fadeToggle(600);
    $('#greenLine').fadeToggle(600);
    $('#mission').fadeToggle(600);
    $('#nav').fadeToggle(600);
    $('#logo').fadeToggle(600);
    $('#logotext').fadeToggle(600);
    $('#siteWrapper').fadeToggle(600);
    $('#header').delay(600)
        .queue(function(){
            $(this).addClass('topMenu');
            $('#logo').addClass('topMenu');
            $('#logotext').addClass('topMenu');
            $('#nav').addClass('topMenu');
            $('#siteWrapper').addClass('content');
            $(this).dequeue();
        });

    $('#main').delay(600).fadeToggle(600);
    $('#logo').fadeToggle(600).delay(600).css("display","inline-block");
    $('#logotext').fadeToggle(600).delay(600).css("display","inline-block");
    $('#siteWrapper').fadeToggle(600);
    $('#nav').fadeToggle(600).delay(600).css("display","inline-block");
}