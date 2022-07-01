   
    /*-------------Carousel-----------*/
   $(document).ready(function () {
    $('.next-button').on('click', function () {
        var currentBanner = $('.sld-active');
        var nextBanner = currentBanner.next();
        if(nextBanner.length){
            currentBanner.removeClass('sld-active').css('z-index', -10);
            nextBanner.addClass('sld-active').css('z-index', 10);
        }
        })
    $('.prev-button').on('click', function () {
        var currentBanner = $('.sld-active');
        var prevBanner = currentBanner.prev();

        if(prevBanner.length){
            currentBanner.removeClass('sld-active').css('z-index', -10);
            prevBanner.addClass('sld-active').css('z-index', 10);
        }
        })
   })
    
    /*---------TAB-----------------*/
    const one = document.querySelector.bind(document);
    const all = document.querySelectorAll.bind(document);

    const tabItem = all('.tab_item');
    const tabPane = all('.tab_pane');

    tabItem.forEach((tab, index) => {   
        const pane = tabPane[index];
        tab.onclick = function () {
            one('.tab_item.active-tab').classList.remove('active-tab');
            one('.tab_pane.active-tab').classList.remove('active-tab');

            this.classList.add('active-tab');
            pane.classList.add('active-tab');
        }
    })