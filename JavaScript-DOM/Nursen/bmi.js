/*
1- Veriyi al
2-işlemler
3-ekle
*/

let bmi1DOM = document.querySelector('#bmi1')
bmi1DOM.addEventListener('submit', hesapla)

function hesapla(event){
    event.preventDefault()
    const BOY=document.querySelector('#santimetre')
    const KILO=document.querySelector('#kilogram')
    if (BOY && KILO){
        addDeger(BOY.value, KILO.value)
        BOY.value = ""
        KILO.value = ""
    }
} /*  ELSE YAPISI ALERT*/

let userListDOM = document.querySelector('#listeleme')

const addDeger = (santim, kütle) => {
    let liDOM = document.createElement('div')
    let indexSonuc = `${Math.round(parseInt(kütle)*10000/parseInt(santim)/parseInt(santim))}`
    if (indexSonuc >0 && indexSonuc <= 60) {
        if (indexSonuc>=40 && indexSonuc<= 60 ) { liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
        ${indexSonuc}<br>
        <p class="text-danger"> Aşırı Şişman </p>
        <a href="#" class="btn btn-primary">Button</a>`}
         else if  (indexSonuc>=30 && indexSonuc<= 40 ) { liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
        ${indexSonuc}<br>
        <p class="text-secondary"> Şişman </p>
        <a href="#" class="btn btn-primary">Button</a>`}  
         else if  (indexSonuc>=25 && indexSonuc<30 ) { liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
        ${indexSonuc}<br>
        <p class="text-primary"> Kilolu </p>
        <a href="#" class="btn btn-primary">Button</a>`}
        else if  (indexSonuc>=18 && indexSonuc< 25 ) { liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
        ${indexSonuc}<br>
        <p class="text-success"> Sağlıklı </p>
        <a href="#" class="btn btn-primary">Button</a>`}   
        else if  (indexSonuc>=10 && indexSonuc< 18 ) { liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
        ${indexSonuc}<br>
        <p class="text-danger"> Zayıf </p>
        <a href="#" class="btn btn-primary">Button</a>`}
    }
    liDOM.classList.add(
        'card-body')
    userListDOM.append(liDOM)
}
/*
10-18,15	Zayıf	
18,5-25	Sağlıklı	
25,30	Kilolu	
30-40	Şişman	
40-60	Aşırı Şişman
 liDOM.innerHTML = `  <h7 class="card-title">Vücut Kitle İndeksiniz:</h7>
    ${indexSonuc}<br>
    <p> Sınıflandırma </p>
    <span class="badge bg-primary rounded-pill">${kütle}</span>
`

<div class="card w-75">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Button</a>
</div>
</div>
*/

/*
    
*/

/* <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
 Cras justo odio
<span class="badge badge-primary badge-pill">14</span>
</li> --> */