    $('.search-result').hide();
    $('.cart-result').hide();

    /*------------------------NAV----------------------*/
$(document).ready(function () {
    $('.nav_item a').click(function(){
        $('.nav_item a').removeClass('active');

        $(this).addClass('active');
    })

/*------------------------Search--------------------*/
    $('.search_input').keyup(function(){
        let value = $(this).val().toLowerCase();
        document.getElementById('search-value').innerHTML=value;
        if(value.length > 0){
            $('.search-result').fadeIn();
            $('.search-result tr').filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            })
        }else{
             $('.search-result').hide();
        }
    })

/*---------------------------Filter-----------------------*/
    $('.filter_item').click(function(){
        $('.filter_item').removeClass('active-item');
        $(this).addClass('active-item');

        let value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.product').fadeIn('1000');
        }else{
        
            $('.product').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })  
           
        }
       
    })
/*-----------------cart------------------------*/
    $('.cart').click(function(){
        $('.cart-result').fadeToggle(500);

    })
/*-------------Carousel-----------*/
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
   /*-------------------------PRODUCT------------------------*/
   $(document).ready(function(){
    $('.product').fadeIn(1000);
    jsonObject.products.forEach((i)=>loadProducts(i));
   })
   function loadProducts(data) {
     var product_card = document.createElement('div');
     product_card.classList.add('product', 'col-3', 'col-md-3', 'col-sm-6');
     product_card.innerHTML =     
    '<div class="product_card ">'+
        '<div class="card_img">'+
             '<a href="./product-details.html" class="product_link">'+
                 '<img class="product_img" src="' + data.img + '" alt="product_img">'+
             '</a>'+
        '</div>'+
        '<div class="card_info ">'+
             '<a href="./product-details.html" class="product_link">'+
                 '<h3>'+ data.name +'</h3>'+
             '</a>'+
            '<div class="product_desc">'+
                 '<p>' +data.desc + '</p>'+
            '</div>'+
            '<div class="product_price">'+
                ' <strong>Price: </strong>$' +data.price + ''+
            '</div>'+
            '<div class="card-button">'+
                ' <button class="card-btn add-cart-btn" type="submit">Add to cart</button>'+
                 '<button class=" card-btn love">'+
                    ' <i class="bx bxs-heart"></i>'+
                 '</button>'+
            '</div>'+
        '</div>'+
    '</div>';
 document.getElementById("product-data").appendChild(product_card);
   }
    /*----------------------wishlist btn------------------------*/
    $(document).ready(function(){
        $('.love').click(function(){
            $('.love').toggleClass('wishlist-active')
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