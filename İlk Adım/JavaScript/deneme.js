const Products = ["atacan", "kural", "avgoren"]

Products.forEach((product, index, array) => array[index]=`${product.toUpperCase()}`)

console.log(Products)

const LongProducts = Products.filter(selo => selo.length > 5)
console.log(LongProducts)

const USERS = [
    {fullName: "atacankural", isActive: true },
    {fullName: "furkankastan", isActive: true},
    {fullName: "atakankeskin" , isActive: false }
]
const passive = USERS.filter(kalıp => kalıp.isActive === false)
console.log(passive)

/*
const userListDOM = document.querySelector('#userList')
Products.forEach(itemm => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = itemm
    userListDOM.append(liDOM)})
*/