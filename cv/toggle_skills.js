const skillsContent = document.getElementById('skills_content'), skillsHeader = document.getElementById('.skills_header')

function toggleSkills()
{
    let itemClass = this.parentNode.getElementByClassName

    for(i=0; i< skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close')
    {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', toggleSkills) 
})
