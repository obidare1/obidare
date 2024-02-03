// const closeNav = document.getElementById('menu-close')
//         const Nav = document.querySelector('.navigation')
//         const openNav = document.getElementById('menu-btn')

//         if(menu-btn){
//             openNav.addEventListener('click', ()=>{
//                 Nav.classList.add('active')
//             })
//         }
//         if(menu-close){
//             closeNav.addEventListener('click', ()=>{
//                 Nav.classList.remove('active')
//             })
//         }


    var menuBtn = document.getElementById("menu-btn");
    var menuClose = document.getElementById("menu-close");
    var navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", function () {
        navigation.classList.add("active");
    });
    console.log(menuBtn);

    menuClose.addEventListener("click", function () {
        navigation.classList.remove("active");
    });


    
    
   
        // var menuBtn = document.getElementById("menu-btn");
        // var menuClose = document.getElementById("menu-close");
        // var navigation = document.querySelector(".navigation");

        // menuBtn.addEventListener("click", function () {
        //     navigation.classList.add("active");
        // });

        // menuClose.addEventListener("click", function () {
        //     navigation.classList.remove("active");
        // });


