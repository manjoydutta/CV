/* Specialities View More Button */
const modalViews = document.querySelectorAll('.specialities_modal'), modalBtns = document.querySelectorAll('.specialities_button'), modalCloses = document.querySelectorAll('.specialities_modal-close')
      
let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => 
{
    modalBtn.addEventListener ('click', () =>
    {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})