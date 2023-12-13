const pocemonConteiner = document.querySelector('.pokemon__conteiner')
const pocemonConteinertwy = document.querySelector('.pokemon__conteiner2')
const plauerOne = document.querySelector('.plauer1')
const plauerTwy = document.querySelector('.plauer2')

function fetchPocemon(id,conteiner){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res)=> res.json())
    .then((data)=> creatPocemon(data,conteiner))
}

function searchPocemon(namber,conteiner){
    for (let i = 1; i <= namber; i++){
        if(namber==i){
           fetchPocemon(i,conteiner)
        }
    }
    
}


function creatPocemon(element,conteiner){
    const cardconteiner = document.createElement("div")
    cardconteiner.classList.add("cardconteiner")

    const cardBack = document.createElement("div")
    cardBack.classList.add("pocemon-block-back")

    const card = document.createElement("div")
    card.classList.add("pocemon-block")


    const spritConteqiner = document.createElement("div")
    spritConteqiner.classList.add("img-Conteqiner")

    const sprite = document.createElement("img")
    sprite.src = element.sprites.front_default

    spritConteqiner.appendChild(sprite)

    const namber = document.createElement("p")
    namber.textContent = `#${element.id.toString().padStart(3,0)}`

    const name = document.createElement("div")
    name.classList.add("name")
    name.textContent = element.name

    card.appendChild(spritConteqiner)
    card.appendChild(namber)
    card.appendChild(name)

    conteiner.appendChild(cardconteiner)

    cardconteiner.appendChild(cardBack)
    cardconteiner.appendChild(card)
    
    console.log(cardconteiner);

    cardconteiner.addEventListener("click", function(){
    applyTransform()
    })

    function applyTransform() {
    cardconteiner.style.transform = "rotateY(540deg)"; 
    }
}

  
plauerOne.addEventListener('click', function () {
    pocemonConteiner.innerHTML = ""
    for(let i = 0; i<5 ;i++){
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        searchPocemon(getRandomInt(1000),pocemonConteiner) 
    }
})
 

plauerTwy.addEventListener('click', function () {
    pocemonConteinertwy.innerHTML = ""
    for(let i = 0; i<5 ;i++){
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        searchPocemon(getRandomInt(1000),pocemonConteinertwy)
    } 
})

