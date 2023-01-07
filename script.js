
const navigation = document.querySelector('.navigation');

window.addEventListener("load", () => {
    setTimeout(() => {
        navigation.classList.add('navigation_fixed');
    }, 10);
});

const firstBlock = document.querySelector('.block');
firstBlock.style.marginTop = window.getComputedStyle(navigation, null).getPropertyValue('height');


let prevScroll = window.pageYOffset;
window.addEventListener('scroll', function(event) {
    let curScroll = window.pageYOffset;
    if (curScroll > navigation.offsetHeight) {
        if (curScroll <  prevScroll) {
            navigation.classList.add('navigation_fixed');
        } else {
            navigation.classList.remove('navigation_fixed');
        }
    }
    prevScroll = window.pageYOffset;
});

//===========

let littleWindowWidth = 767;
if (window.innerWidth <= littleWindowWidth) {
    document.body.classList.add('little-window-width');

    let navLinks = document.querySelectorAll('.navigation__item');
    navLinks.forEach(li => {
        let sublist = li.querySelector('.navigation__sub-list');
        if (sublist) {
            const arrowBlock = document.createElement('div');
            arrowBlock.className = ('navigation__arrow');
            li.children[0].append(arrowBlock);
        }
    });
}

let navLinks = document.querySelectorAll('.navigation__item');
navLinks.forEach(li => {

    if (document.body.classList.contains('little-window-width')) {
        li.addEventListener('click', () => {
            let sublist = li.querySelector('.navigation__sub-list');

            if (sublist) {
                sublist.style.minWidth = li.offsetWidth + 'px';
                if (sublist.style.maxHeight == 0 + 'px' || sublist.style.maxHeight == 0) {
                    
                    navLinks.forEach(li => {
                        let sublist = li.querySelector('.navigation__sub-list');
                        if (sublist) {
                            sublist.style.maxHeight = 0;
                            li.classList.remove('active');
                        }
                    })

                    sublist.style.maxHeight = sublist.scrollHeight + 'px';
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                    sublist.style.maxHeight = 0;
                }
            }
        })
    } else {
        li.addEventListener('mouseover', () => {
            let sublist = li.querySelector('.navigation__sub-list');

            if (sublist) {
                sublist.style.minWidth = li.offsetWidth + 'px';
                sublist.style.maxHeight = sublist.scrollHeight + 'px';

                sublist.addEventListener('mouseout', () => {
                    sublist.style.maxHeight = 0;
                })
    
                li.addEventListener('mouseout', () => {
                    sublist.style.maxHeight = 0;
                })
            }
        })
    }
    
})

burgerBtn = document.querySelector('.navigation__icon');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
}) 

