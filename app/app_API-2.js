const URL = "http://localhost:3000"






let carrinho = []
//Exibir cards 
ExibirProdutos()

function ExibirProdutos(){

let cardTotal = document.querySelector(".container-card")

fetch (`${URL}/products`)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.map((produto, index) =>{

let cardDiv = document.createElement("div")
cardDiv.className = `col-sm-6 col-md-4 col-lg-3`
cardDiv.id = `${produto._id}`

let cardBorderDiv = document.createElement("div")
cardBorderDiv.className = "card border-primary card-back-style shadow"

cardDiv.appendChild(cardBorderDiv)

let img = document.createElement("img")
img.className = "card-img-top card-img-dimensions"
img.src=produto.image
img.alt=produto.description

cardBorderDiv.appendChild(img)

let cardBodyDiv = document.createElement("div")
cardBodyDiv.className = "card-body d-grid gap-2 card-body-custom"

    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.textContent = produto.descricao

    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.textContent = `${produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    let cardButton = document.createElement("a")
    cardButton.className = "btn btn-primary card-button-color"//btn-info fw-bold
    //cardButton.href="#"
    cardButton.textContent="Comprar"
    cardButton.id = `prod${produto._id}`
    
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
})})


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