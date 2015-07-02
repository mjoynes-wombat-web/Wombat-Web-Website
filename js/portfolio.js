/**
 * Created by Simeon on 7/1/2015.
 */

var portfolioItem = function(heading, descript, photo, medium ){
    this.heading = heading;
    this.descript = descript;
    this.photo = photo;
    this.medium = medium;
};

var portfolioItems = [],
    logoItems = [],
    apparelItems = [],
    printItems = [],
    signItems = [],
    webItems = [],

    heading = ['Logos', 'Apparel', 'Advertisement', 'Business Cards', 'CD Cases', 'Covers, Fliers, & Posters', 'Invites', 'Labels', 'Newsletters', 'Post Cards & Rack Cards', 'Signs', 'Websites'],
    descript = ['We specialize in stunning and memorable vector logos that will keep your customers thinking of you. The beauty of vector art is that it can be enlarged to any size without loss of quality. Vector is the best option for logos and we are here to assist you by helping you design the visual front to your business.',
    'With our extensive experience designing and printing apparel we are well equipped to help you produce great visuals for your apparel needs, be they for you company, an event or even just for fun.',
    'Need to attract new customers? We can produce stunning visual advertisements to reach your audience. With our assistance we can help you produce advertisements that will attract new customers and help you reach the audience of your choice.',
    'There are those that say print is dead. However we all know that word of mouth is an excellent way to attract customers. We can help you by producing business cards that make it easy for potential customers to get in touch.',
    'In the music or software industry? We can help you. We have experience working with cd production companies and can help you design the package that is so often the face of your product.',
    'Whether you are designing a cover for your product, a flier to get your message out or a poster to expand your visual coverage we are here to assist you.',
    'Planning a wedding, throwing a party, or having a graduation? No matter your invitation needs we can help get the message out to your friends, loved ones and other attendees.',
    'Need a label for your product or just want to produce that humorous bumper sticker that you\'ve always wanted? We can help you!',
    'Keep your customers or members informed with a newsletter. For a weekly, monthly, quarterly, or even yearly newsletter we can help you stay in contact.',
    'Post cards and rack cards can be a great way to advertise especially if you\'re in the tourist industry. We can help you produce them today!',
    'Some businesses thrive primarily on walk in and drive by customers. We can make sure that you stay visible and get remembered with memorable signs.',
    'Without a doubt it\'s the digital age. Whether you\'re in a business that is just now finding the need for a online presence, you need a fresh look, or you want to update the information on your current page we are here to help.' ],

    photosPath = 'images/portfolio/',
    photo = [

        {
            path: photosPath + 'logo/',
            images: ['airline-symbols.jpg', 'blackbird-recording_logo.jpg', 'fishing-buddy_logo.jpg', 'green-shell_logo.jpg', 'midtown-cafe_logo.jpg', 'ourea-airlines_logo.jpg', 'purrfect-logos_logo.jpg', 'red-hill_logo.jpg', 'seeing-beyond-color_logo.jpg']
        },
        {
            path: photosPath + 'graphic/apparel/',
            images: ['chicken-run_shirt.jpg', 'look-with-your-eyes_shirt.jpg', 'quality-roofing_shirt.jpg']
        },
        {
            path: photosPath + 'graphic/print/ads/',
            images: ['fish-connection-hvg_ad.jpg, grog-shop-hvg_ad.jpg, hallo-bay-hvg_ad.jpg', 'nomad-shelters-hvg_ad', 'sea-flight-charters-hvg_ad.jpg']
        },
        {
            path: photosPath + 'graphic/print/business-cards/',
            images: ['adventure-ak_bc.jpg', 'auction-block_bc.jpg', 'gregoire-construction_bc.jpg', 'hannahs-bead-design_bc.jpg', 'inland-empire_bc.jpg', 'kachemak-cruises_bc.jpg', 'one-of-a-kind_bc.jpg', 'quiet-place_bc.jpg', 'seeing-beyond-color_bc.jpg']
        },
        {
            path: photosPath + 'graphic/print/cds/',
            images: ['nativity_cd/nativity_cd_cover.jpg', 'nativity_cd/nativity_cd_back.jpg', 'nativity_cd/nativity_cd_disc.jpg', 'paschal_cd/paschal_cd.cover.jpg', 'paschal_cd/paschal_cd_back.jpg', 'paschal_cd/paschal_cd_disc.jpg']
        },
        {
            path: photosPath + 'graphic/print/',
            images: ['covers/exchange-life_cover.jpg', 'flier/nook_e-flyer.jpg', 'posters/exchange-life_poster.jpg', 'posters/hannahs-bead-design_poster.jpg', 'posters/photo-contest_poster.jpg', 'worship-band-bash_poster.jpg']
        },
        {
            path: photosPath + 'graphic/print/invites/',
            images: ['graduation/leandra-graduation_invite.jpg', 'prom/hhs-prom_invite.jpg', 'wedding/ms-smith-wedding_invite.jpg', 'wedding/se-smith-wedding_invite.jpg']
        },
        {
            path: photosPath + 'graphic/print/labels/',
            images: ['baklavva_labels.jpg', 'moosercycle-label.jpg']
        },
        {
            path: photosPath + 'graphic/print/newsletter/',
            images: ['boinski_newsletter_front.jpg', 'boinski_newsletter_back.jpg']
        },
        {
            path: photosPath + 'graphic/print/',
            images: ['post-cards/armageddon_post_card.jpg', 'post-cards/oneil-prayer-card_post_card.jpg']
        },
        {
            path: photosPath + 'graphic/print/signage/',
            images: ['auto-b-clean_sign.jpg','glenns-welding_sign.jpg', 'hogan-homer-council_sign.jpg', 'midtown-cafe_sign.jpg', 'sourdough-sue-sign.jpg']
        },
        {
            path: photosPath + 'web/',
            images: ['fishing-buddy_website', 'purrfect-logos_website.jpg'],
        }
    ],
    medium = ['logo', 'apparel', 'print', 'print', 'print', 'print', 'print', 'print', 'print', 'print', 'sign', 'web'];

for (variable in heading){
    portfolioItems[variable] = new portfolioItem(heading[variable], descript[variable], photo[variable], medium[variable]);
}

for (variable in portfolioItems){
    if (portfolioItems[variable].medium === 'print'){
        printItems.push(portfolioItems[variable]);
    }else if(portfolioItems[variable].medium === 'logo'){
        logoItems.push(portfolioItems[variable]);
    }else if(portfolioItems[variable].medium === 'apparel'){
        apparelItems.push(portfolioItems[variable]);
    }else if(portfolioItems[variable].medium === 'sign'){
        signItems.push(portfolioItems[variable]);
    }else if(portfolioItems[variable].medium === 'web'){
        webItems.push(portfolioItems[variable]);
    }
}

function cyclePortfolio (i, item){
    setTimeout( function(){
        console.log(item[i].heading);
        console.log(item[i].descript);
        console.log(item[i].photo);
        console.log(item[i].medium);
        i--;
        if (i>=0){
            cyclePortfolio(i, item);
        }
    }, 1000);
};

//cyclePortfolio(printItems.length -1, printItems);
//cyclePortfolio(logoItems.length -1, logoItems);
//cyclePortfolio(apparelItems.length -1, apparelItems);
//cyclePortfolio(signItems.length -1, signItems);
//cyclePortfolio(webItems.length -1, webItems);



