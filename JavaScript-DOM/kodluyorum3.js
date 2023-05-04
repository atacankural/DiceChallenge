users=["lorem", "fatihi", "galatasaray"]
let userListDOM = document.querySelector('#selam')
for(index=0; index<users.length; index++) {
    let liDOM = document.createElement('günaydin')
    liDOM.innerHTML= `${users[index]} <br>`
    userListDOM.appendChild(liDOM)
}

let username = ""

while (username == ""){
    username = prompt("Kullanıcı Adını Giriniz:")
    console.log(username)
}