// First set variables
const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('ul')

burger.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active')
    burger.classList.toggle('close')
})

// Intersetion observer
const headerPart = document.querySelector('.intro_content')
// headerPart.style.background = 'red'
let options = {
    threshold: 0.5,
    // root: null
}

const headerPartObserver = new IntersectionObserver((entries, headerPartObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            console.log(entry)
        }
    });
}, options)

headerPartObserver.observe(headerPart)

