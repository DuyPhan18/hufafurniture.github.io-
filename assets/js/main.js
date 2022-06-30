    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /*-------------NAV-----------*/
   
    
    /*---------TAB-----------------*/
    const tabItem = $$('.tab_item');
    const tabPane = $$('.tab_pane');

    tabItem.forEach((tab, index) => {   
        const pane = tabPane[index];
        tab.onclick = function () {
            $('.tab_item.active-tab').classList.remove('active-tab');
            $('.tab_pane.active-tab').classList.remove('active-tab');

            this.classList.add('active-tab');
            pane.classList.add('active-tab');
        }
    })