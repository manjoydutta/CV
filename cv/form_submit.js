/* Form Submit Button */
const modalViews = document.querySelectorAll('.form_modal'), modalBtns = document.querySelectorAll('.form_button'), modalCloses = document.querySelectorAll('.form_modal-close')
      
let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-form-modal')
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
            modalView.classList.remove('active-form-modal')
        })
    })
})