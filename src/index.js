import Outpoot from "./outpoot";
import '@styles/style.css'
import bk from "./assets/bk.jpg"
import mc from "./assets/mc.jpg"

const outpoot = new Outpoot("Привет, я жив")
console.log(outpoot.toString())


const tagline = document.getElementById('tagline');
//const img = document.getElementsByClassName('logo')
//img[0].style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.malls.ru%2Frus%2Fnews%2Fmcdonald-s-razdelyaet-logotip-i-zakryvaet-restorany-v-evrope.shtml&psig=AOvVaw1e1TL2minnuwQtFFq5DXF-&ust=1615999343319000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDshemgte8CFQAAAAAdAAAAABAI");'

function chText(el, text1, text2) {
    el.innerHTML != text1 ? el.innerHTML = text1 : el.innerHTML = text2
}


const changeTag = document.getElementById('tag')
changeTag.addEventListener('click', () => {
    chText(tagline, 'Жри бургеры!!!', 'Не жри бургеры!!!')
    console.log(tagline.innerHTML)
    tagline.insertAdjacentHTML("beforeend", html)
    //chImage(0)

})

function chImage(counter) {
    counter++
    counter % 2 ? img[0].style.backgroundImage = mc : img[0].style.backgroundImage = bk

}


const html = `
    </div>
        <div>
            <hr>
            <button>
                <a href="https:\\\\google.ru">
            google.ru
        </a>
            </button>
            <hr>
            
        
        </div>
`

