function changePage(show, title){

    $('#content').fadeToggle(600);

    setTimeout( function(){

        window.history.pushState(show, '', './' + show + '.html');

        document.title = title + ' - Wombat Web Design';

        $('#content').load(show + '.html #content > *').innerHTML;

        changeActive(show);

        $('#content').fadeToggle(600);

        window.backPages.push(show);

        console.log(window.backPages);

    }, 700);
}

function showHome(show, title){

    $('#siteWrapper').fadeToggle(600);

    setTimeout( function(){

        window.history.pushState(show, '', './' + show + '.html');

        document.title = 'Wombat Web Design - Home';

        $('#siteWrapper').load(show + '.html #siteWrapper > *').innerHTML;

        $('link[rel=stylesheet][href~="css/pages.css"]').remove();
        $('script[src~="js/pages.js"]').remove();

        if(isTouch) {
            $('link[rel=stylesheet][href~="css/mobile-pages.css"]').remove();

            $('<link rel="stylesheet" type="text/css" href="./css/home.css">').appendTo('head');
            $('<link rel="stylesheet" type="text/css" href="./css/mobile.css">').appendTo('head');
            $('<script type="text/javascript" src="./js/home.js"></script>').appendTo('head');
        }else{


            $('<link rel="stylesheet" type="text/css" href="./css/home.css">').appendTo('head');
            $('<script type="text/javascript" src="./js/home.js"></script>').appendTo('head');
        }


        changeActive(show);

        $('#siteWrapper').fadeToggle(600);

        window.backPages.push(show);

        console.log(window.backPages);

    }, 700);
}