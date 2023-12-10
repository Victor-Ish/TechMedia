$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

const harmburger = document.querySelector('.harmburger')
const navBar = document.querySelector('.nav__content')

harmburger.addEventListener('click', () =>{
    harmburger.classList.toggle('show')
    navBar.classList.toggle('action')
})
const navLists = document.querySelectorAll('.nav__content li')
navLists.forEach((item) =>{
  item.addEventListener('click', function(){
    harmburger.classList.remove('show')
    navBar.classList.remove('action')
  })
})