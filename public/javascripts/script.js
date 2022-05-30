let formulaire= document.querySelector('.formulaire');
let addNew = document.querySelector('.addNew');
let submitNew = document.querySelector('.submitNew');

////////////////////////////////////////////////////////////////////////////////////////////////////////////


submitNew.addEventListener('submit', () => {
    submitNew.classList.replace('d-block', 'd-none')
})


addNew.addEventListener('click', () => {
    addNew.style.display = 'none'
    formulaire.classList.replace('d-none', 'dblock')
    // ou  addUser.classList.add("d-none")
})

