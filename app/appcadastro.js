
const cep = document.querySelector("#inputCEP")

const options = {
    method: 'GET', //POST, PUT, DELETE, PATCH
    mode: 'cors',
    cache: 'default'
}


cep.addEventListener("blur", () =>{
    let search = cep.value.replace("-","")
    console.log(search);

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => response.json())
    .then(data =>{ 
    showData(data) 
    })

    .catch(err => {
        console.log("Erro " +err )
    })

})

function showData(data){
    console.log(data);
    let logradouro = document.querySelector("#inputEndereco")
    logradouro.value=`${data.logradouro}`

    let bairro = document.querySelector("#inputBairro")
    bairro.value = `${data.bairro}`

    let localidade = document.querySelector("#inputCidade")
    localidade.value = `${data.localidade}`
    
    let uf = document.querySelector("#inputEstado")
    uf.value = `${data.uf}`

}

