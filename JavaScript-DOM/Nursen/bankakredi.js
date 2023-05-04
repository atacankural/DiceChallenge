document.querySelector('#submit1').addEventListener('click', hesapla)

function hesapla(){
    var Tutar=document.querySelector('#tutargiris1')
    var liste= document.getElementById("vadesecimi1")
    Vade= liste.options[liste.selectedIndex].value
    if (Tutar && Vade){
        addDegerler(Tutar.value, Vade.value)
    }
    console.log(Vade)
}
let listeGonderici = document.querySelector('#listeleyici')

const addDegerler=(miktar, kacAy) => {
    let yeniDOM= document.createElement('div')
    if (kacAy==12){
        yeniDOM = document.innerHTML(`Toplam Ödenecek Tutar:${Math.round(miktar*0.05/kacAy)} <br>
        Aylık Taksit Tutarı: ${miktar*0.05/kacAy}`)
    }
    else if (kacAy == 24){

    }
    else if(kacAy == 36){

    }
    yeniDOM.ClassList.add("card-body")
    listeGonderici.append(yeniDOM)

}