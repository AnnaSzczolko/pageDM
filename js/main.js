const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const link = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle('sticky-body');
    navMobile.classList.toggle('nav-mobile--active');

    link.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
        } )
    })

}

navBtn.addEventListener('click', handleNav)




const handleCurrentYear = () => {
    const year= new Date().getFullYear()
    footerYear.innerText = year

}

handleCurrentYear();