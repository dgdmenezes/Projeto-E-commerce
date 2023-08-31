let produtos = [
    {
        id: 125,
        imagem: "prodimages/product125.png",
        descricao: "Monitor Dell 450083",
        preco: 1500.00,
        text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
    },
    {id: 160, imagem: "prodimages/product160.jpg",descricao: "Monitor Samsung T350",preco: 800.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 181,imagem: "prodimages/product181.jpg",descricao: "Monitor LG 3544",preco: 400.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 158,imagem: "prodimages/product158.jpg",descricao: "Notebook HP Core i3",preco: 2429.10, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 123,imagem: "prodimages/product123.jpg",descricao: "MacBook Air M1 D",preco: 7499.99, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 285,imagem: "prodimages/product285.jpg",descricao: "PlayStation 4",preco: 2749.99, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 128,imagem: "prodimages/product128.jpg",descricao: "PlayStation 5",preco: 4299.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 188,imagem: "prodimages/product188.jpg",descricao: "WebCam Logi C920",preco: 395.99, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 18,imagem: "prodimages/product18.webp",descricao: "Dell Vostro 5535",preco: 4200.00, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 227,imagem: "prodimages/product237.jpg",descricao: "Zelda Tear of The Kingdom",preco: 329.90, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 443,imagem: "prodimages/product443.jpg",descricao: "Tp link Archer c80",preco: 358.66, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
    {id: 136,imagem: "prodimages/product136.jpg",descricao: "Iphone 11 64GB preto",preco: 2706.55, text_alt:"Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"},
]

let carrinho = []
//Exibir cards 
ExibirProdutos()

function ExibirProdutos(){

let cardTotal = document.querySelector(".container-card")

produtos.map( (produto, index) =>{

let cardDiv = document.createElement("div")
cardDiv.className = `col-sm-6 col-md-4 col-lg-3`
cardDiv.id = `${produto.id}`

let cardBorderDiv = document.createElement("div")
cardBorderDiv.className = "card border-primary card-back-style shadow"

cardDiv.appendChild(cardBorderDiv)

let img = document.createElement("img")
img.className = "card-img-top card-img-dimensions"
img.src=produto.imagem
img.alt=produto.text_alt

cardBorderDiv.appendChild(img)

let cardBodyDiv = document.createElement("div")
cardBodyDiv.className = "card-body d-grid gap-2"

    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.textContent = produto.descricao

    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.textContent = `${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    let cardButton = document.createElement("a")
    cardButton.className = "btn btn-primary card-button-color"//btn-info fw-bold
    //cardButton.href="#"
    cardButton.textContent="Comprar"
    cardButton.id = `prod${produto.id}`
    
    cardButton.onclick = function(){
        AddCarrinho(index)
        AtualizarModal()
    }

    /*let addButton = document.createElement("button")
        addButton.textContent = "Adicionar Produto"
        addButton.type="button"
        addButton.onclick = function (){
            adicionarCarrinho(index)
            
        }*/

cardBodyDiv.appendChild(cardTitle)
cardBodyDiv.appendChild(cardText)
cardBodyDiv.appendChild(cardButton)

cardBorderDiv.appendChild(cardBodyDiv)

cardTotal.appendChild(cardDiv)
})


}

function AddCarrinho(index){
    
    let resultado = carrinho.find( produto => produtos[index].id == produto.id )
    console.log(resultado);
    if(resultado == undefined){
        let produto = produtos[index]    
        produto.qtd = 1
        carrinho.push(produto)    
    }
    else {
        let produtoIndex = carrinho.findIndex( produto => produtos[index].id == produto.id )
        carrinho[produtoIndex].qtd++
    }
    
    ExibirquantidadeCarrinho()

}

function subtotal(){
    let subtotal = 0

    carrinho.map((item) =>{
        subtotal+= item.preco * item.qtd;
    })

    return subtotal;
}

function ExibirquantidadeCarrinho(){
    let contador = document.querySelector("#contadorCarrinho")
    let valor = 0;
    
    for (let i = 0; i < carrinho.length; i++) {
    valor += carrinho[i].qtd;   
       
    }
    contador.textContent = `${valor.toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false})}`
}

function AtualizarModal(){
    let carrinhoModalDiv = document.querySelector(".modal-body")
    carrinhoModalDiv.innerHTML = '' //apaga o "nenhum prod no carrinho"

    let tituloDiv = document.createElement("div")//Cria o titulo dos produtos
    tituloDiv.className="row"

        let tituloDivCol3 = document.createElement("div")
        tituloDivCol3.className ="col-3"
    
        let tituloDivCol5Produto = document.createElement("div")
        tituloDivCol5Produto.className ="col-5" 
            let h5Produto = document.createElement("h5")
            h5Produto.textContent = "Produto"
            tituloDivCol5Produto.appendChild(h5Produto)
    
        let tituloDiviCol2Quantidade = document.createElement("div")
        tituloDiviCol2Quantidade.className ="col-2"
            let h5quantidade = document.createElement("h5")
            h5quantidade.textContent="Quantidade"
            tituloDiviCol2Quantidade.appendChild(h5quantidade)

        let tituloDivCol2Preco = document.createElement("div")
        tituloDivCol2Preco.className ="col-2"
            let h5preco = document.createElement("h5")
            h5preco.textContent="Preco"
            tituloDivCol2Preco.appendChild(h5preco)

    tituloDiv.appendChild(tituloDivCol3)
    tituloDiv.appendChild(tituloDivCol5Produto)
    tituloDiv.appendChild(tituloDiviCol2Quantidade)
    tituloDiv.appendChild(tituloDivCol2Preco)

    carrinhoModalDiv.appendChild(tituloDiv) //fim da criacao do titulo dos produtos

    
    //aqui vai rolar um map pra puxar os objetos no array carrinho (id, imagem, descricao, preco. text_alt, qtd)
    carrinho.map(produto =>{

         
    let modalItemDiv = document.createElement("div")
    modalItemDiv.className = "modalItem row"

        let hr = document.createElement("hr") //1
        
        let modalItemImagemDiv = document.createElement("div") //2
        modalItemImagemDiv.className = "modalItemImagem col-3"
            let imgModalImagem = document.createElement("img")
            imgModalImagem.className="modalImagem"
            imgModalImagem.src=`${produto.imagem}`
            imgModalImagem.alt=`${produto.text_alt}`
            modalItemImagemDiv.appendChild(imgModalImagem)

        let modalItemDescricaoDiv = document.createElement("div") //3
        modalItemDescricaoDiv.className ="modalItemDescricao col-5"
            let descricaoh6 = document.createElement("h6")
            descricaoh6.textContent=`${produto.descricao}`
            modalItemDescricaoDiv.appendChild(descricaoh6)
        
        let modalItemQuantidadeDiv = document.createElement("div")//4
        modalItemQuantidadeDiv.className="modalItemQuantidade col-2"
            let buttonPlusDiv = document.createElement("div")
                let buttonPlus = document.createElement("button")
                buttonPlus.className = "btn"
                buttonPlus.textContent="+"
                buttonPlusDiv.appendChild(buttonPlus)
            let QuantidadeDiv = document.createElement("div")
                let QuantidadeP = document.createElement("p")
                QuantidadeP.textContent=`${produto.qtd}`
                QuantidadeDiv.appendChild(QuantidadeP)
            let buttonMinusDiv = document.createElement("div")
                let buttonMinus = document.createElement("button")
                buttonMinus.className="btn"
                buttonMinus.textContent="-"
                buttonMinusDiv.appendChild(buttonMinus)
            modalItemQuantidadeDiv.appendChild(buttonPlusDiv)
            modalItemQuantidadeDiv.appendChild(QuantidadeDiv)
            modalItemQuantidadeDiv.appendChild(buttonMinusDiv)
        
        let modalItemPrecoDiv = document.createElement("div") //5
        modalItemPrecoDiv.className = "modalItemPreco col-2"
            let modalItemPrecoH5 = document.createElement("h5")
            modalItemPrecoH5.textContent = `${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
            modalItemPrecoDiv.appendChild(modalItemPrecoH5)
        
    modalItemDiv.appendChild(hr)
    modalItemDiv.appendChild(modalItemImagemDiv)
    modalItemDiv.appendChild(modalItemDescricaoDiv)
    modalItemDiv.appendChild(modalItemQuantidadeDiv)
    modalItemDiv.appendChild(modalItemPrecoDiv)
    carrinhoModalDiv.appendChild(modalItemDiv)
})  

}