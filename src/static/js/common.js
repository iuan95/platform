$(document).ready(function () {
    // alert(1);
})
/*Инпут покус*/

let headerform = document.querySelector('.search__form')
let btnInputfocus = document.querySelector("focusstyle")
let btnInputheader = document.querySelector(".input__search")
let stateIcons = document.querySelectorAll('.state__icons')
let stateSubicon = document.querySelector('.forcitizens')

const focusInputheader = ()=>{
    btnInputheader.addEventListener('focus', ()=>{
        headerform.classList.add('focusstyle')
    })
    btnInputheader.addEventListener('blur', ()=>{
        headerform.classList.remove('focusstyle')
    })
}
focusInputheader();
let iconarrowss = document.querySelectorAll('#arrow-down__icon')
let showsub = document.querySelectorAll('.onclickmenu__link')
let elementmenus = document.querySelectorAll('.onclickmenu__item__container')
let opencloseMenu = document.querySelectorAll('.openorclose__menu')
let tabletmenu = document.querySelector('.onclickmenu')
let showsubmenu = () =>{
    for (let i = 0; i< showsub.length; i++){
        showsub[i].addEventListener('click', ()=>{
            for (let k = 0; k<showsub.length; k++){
                if (k===i)
                    continue;
                else{
                    elementmenus[k].classList.remove('showflex-pls')
                    iconarrowss[k].classList.remove('classrotateicon')

                }
            }
            elementmenus[i].classList.toggle('showflex-pls')
            iconarrowss[i].classList.toggle('classrotateicon')

        })

    }

}
showsubmenu()
let iconcloseMenu = document.querySelector('.tablet__closemenu')
for (const tabletmenu1 of opencloseMenu) {
    tabletmenu1.addEventListener('click', ()=>{
        for (let i = 0; i<showsub.length; i++){
            elementmenus[i].classList.remove('showflex-pls')
            iconarrowss[i].classList.remove('classrotateicon')

        }
        tabletmenu.classList.toggle('displaynone1')
        iconcloseMenu.classList.toggle('iconcloserotate')

    })

}