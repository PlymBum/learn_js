import Outpoot from "./outpoot";
import '@styles/style.css'

const outpoot = new Outpoot("Привет, я жив")
console.log(outpoot.toString())

const urlDb='https://js-learn-8a507-default-rtdb.firebaseio.com/'

const tagline=document.getElementById('tagline');
const img=document.getElementsByClassName('logo')
img[0].style.backgroundImage='url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.malls.ru%2Frus%2Fnews%2Fmcdonald-s-razdelyaet-logotip-i-zakryvaet-restorany-v-evrope.shtml&psig=AOvVaw1e1TL2minnuwQtFFq5DXF-&ust=1615999343319000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDshemgte8CFQAAAAAdAAAAABAI");'

function chText (el,text1,text2){
    el.innerHTML!=text1?el.innerHTML=text1:el.innerHTML=text2
}


const changeTag=document.getElementById('tag')
changeTag.addEventListener('click',()=>{
    chText(tagline,'Жри бургеры!!!','Не жри бургеры!!!')
    console.log(tagline.innerHTML)


} )

let response =  fetch(urlDb);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
                    // получаем тело ответа (см. про этот метод ниже)
    console.log('good')
     let json =  response.json();
} else {
 console.log("Ошибка HTTP: " + response.status);
}
