let nombre="alejo"
let edad=21
let yadesayuno=false
let estatura=1.78

let titulo = document.getElementById("tittle")
let imgAnimal=document.getElementById("animal")

titulo.innerHTML=nombre
titulo.classList.add("text-danger")

imgAnimal.src="https://placeimg.com/640/480/animals/sepia?t=1684254590676"

let frutas=["piña","moras","fresa"]
let comida=Array("frijoles","carne asada","mazamorra")

frutas.forEach((fruta)=>{
    console.log(fruta)
})