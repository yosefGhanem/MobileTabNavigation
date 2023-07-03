// To be able to change "by looping throught"
//1- Add the class of active "by event listener"
//2- Add the class of show

const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx)=>{
    item.addEventListener('click', ()=>{
    hideAllContents()
    hideAllItems()

    // after hiding them, let's take the item
    item.classList.add('active')
    // contents is nodelist as array[]
    contents[idx].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}
function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}

