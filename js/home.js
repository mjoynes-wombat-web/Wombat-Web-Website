/*SHOW PAGE FUNCTION*/
function showPage(show, title){

    $('.sectionWrapper').fadeToggle(600);

    setTimeout( function(){

        window.history.pushState(show, show + ' - Wombat Web Design', './' + show + '.html');

        document.title = title + ' - Wombat Web Design';

        $('.sectionWrapper').load(show + '.html .sectionWrapper > *').innerHTML;

        $('link[rel=stylesheet][href~="css/home.css"]').remove();
        $('script[src~="js/home.js"]').remove();

        if(isTouch) {
            $('<link rel="stylesheet" type="text/css" href="./css/pages.css">').appendTo('head');
            $('<link rel="stylesheet" type="text/css" href="./css/mobile-pages.css">').appendTo('head');
            $('<script type="text/javascript" src="./js/pages.js"></script>').appendTo('head');
        }else{
            $('<link rel="stylesheet" type="text/css" href="./css/pages.css">').appendTo('head');
            $('<script type="text/javascript" src="./js/pages.js"></script>').appendTo('head');
        }

        $('.sectionWrapper').fadeToggle(600);

    }, 700);
}
