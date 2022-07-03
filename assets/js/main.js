/*------------------------NAV----------------------*/
$(document).ready(function () {
    $('.nav_item a').click(function(){
        $('.nav_item a').removeClass('active');

        $(this).addClass('active');
    })
})
/*------------------------Search--------------------*/
$(document).ready(function(){
    $('.search-result').hide();
    $('.search_input').keyup(function(){
        let value = $(this).val().toLowerCase();
        if(value.length > 0){
            $('.search-result').fadeIn();
            $('.search-result tr').filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            })
        }else{
             $('.search-result').hide();

        }

        
    })
})
/*-----------------cart------------------------*/
$(document).ready(function(){
    $('.cart-result').hide();
    $('.cart').click(function(){
        $('.cart-result').fadeToggle(500);

    })
})
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
    $(document).ready(function () {
        $('.tab_pane').hide();
        $('.tab_pane:first-child').fadeIn();
        $('.tab_item').click(function(){
            //remove active class
            $('.tab_item').removeClass('active-tab')
            //active tab
            $(this).addClass('active-tab')

            //show tab content
            let id_tab_content = $(this).children('a').attr('href');

            $('.tab_pane').hide();

            $(id_tab_content).fadeIn();
        })
    })