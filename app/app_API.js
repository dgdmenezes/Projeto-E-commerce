let produtos = [
    {
        imagem: "monitor.png",
        descricao: "Monitor Dell 450083",
        preco: 1500.00,
        text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
    },

    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {imagem: "monitor.png",descricao: "Monitor Dell 450083",preco: 1500.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
     

    
]

const URL_API = "https://reqres.in/api/users"

    const headers = {
        method:"GET"//GET,POST, PUT. PATHC, DELETE
        //credentials: "",
        //cache: "no-cache",
        //mode: "cors"
    }

    //Exibir cards 
ExibirProdutos()


function ExibirProdutos() {

let cardTotal = document.querySelector(".container-card")

fetch(URL_API, headers)
.then(response => response.json())
.then(jsonData => {

jsonData.data.map((pessoa, index) =>{

let cardDiv = document.createElement("div")
cardDiv.className = `col-sm-6 col-md-4 col-lg-3 prod${index}`

let cardBorderDiv = document.createElement("div")
cardBorderDiv.className = "card border-primary"

cardDiv.appendChild(cardBorderDiv)

let img = document.createElement("img")
img.className = "card-img-top"
img.src=pessoa.avatar
img.alt=pessoa.first_name

cardBorderDiv.appendChild(img)

let cardBodyDiv = document.createElement("div")
cardBodyDiv.className = "card-body"

    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.textContent = pessoa.last_name

    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.textContent = `${pessoa.id}`

    let cardButton = document.createElement("a")
    cardButton.className = "btn btn-info fw-bold"
    cardButton.href="#"
    cardButton.textContent="Compre!"

cardBodyDiv.appendChild(cardTitle)
cardBodyDiv.appendChild(cardText)
cardBodyDiv.appendChild(cardButton)

cardBorderDiv.appendChild(cardBodyDiv)

cardTotal.appendChild(cardDiv)

})
.catch ((error) => console.log({error}))
})
}