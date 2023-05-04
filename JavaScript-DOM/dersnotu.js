
let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)

const allertDOM = document.querySelector('#alert')

const alertFunction = (title, message, alertcolor="success") => `<div class="alert alert-${alertcolor} alert-dismissible fade show" role="alert">
<strong>${title}</strong>  ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
        allertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            
        )
    }

    }
    


/*
<li class="list-group-item d-flex justify-content-between align-items-center">
Inbox
<span class="badge bg-primary rounded-pill">12</span>
</li>
*/
let userlistDOM = document.querySelector("#userlist")

function addItem(userName, score) {
    let liDOM = document.createElement(`lifdbdfs`)
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>  `
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userlistDOM.append(liDOM)
    const SCORE = document.querySelector("#score")
    const USER_NAME = document.querySelector("#username")
    if (SCORE.value >= 0 && SCORE.value <=100){
        if (SCORE.value < 50){
            liDOM.classList.add("bg-danger")
         } else if (SCORE.value >50){
            liDOM.classList.add("bg-primary")
            liDOM.innerHTML = `${userName} <span class="badge bg-success rounded-pill">${score}</span>  `}
    } else {
        liDOM.classList.add("bg-secondary"), liDOM.innerHTML = `${USER_NAME.value}:    Hatalı giriş yaptınız`
    }
}
