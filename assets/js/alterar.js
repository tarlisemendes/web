//funcao para carregar ou preencher todos os campos dos dados
const preencher_formulario = (produto) => {

    document.getElementById('id').value = produto.id 
    document.getElementById('descricao').value = produto.descricao 
    document.getElementById('categoria').value = produto.categoria 
    document.getElementById('preco').value = produto.preco 
    document.getElementById('quantidade').value = produto.quantidade 
    document.getElementById('url').value = produto.url 
}

document.addEventListener('DOMContentLoaded',() =>{

    //recupera o valor do parametro id
    // ex : http://127.0.0.1:5500/alterar.html?id=7
    const queryString = window.location.search
    //tranforma a string em um objeto URL
    const urlParams = new URLSearchParams(queryString);
    //agora pega o id do objeto URL
    const id = urlParams.get('id')
    console.log(id)

    //solicita ao servidor rodando na porta 3000 a lista dos produtos
    fetch('http://localhost:3000/produtos/' + id)

    // assim que o fetch retornar,coverte os dados em formato json
    .then((res) => res.json())

    //agora processa os dados json
    //data e um array recebido do servido
    .then((data) => {
        if (data.length > 0){
            //pega o unico objeto array
            const produto = data [0]
            preencher_formulario(produto)
        }else{
            alert('Erro: nenhum produto retornado na busca por id')
        }

        //captura erro se houver
    }).catch(() => alert('Erro ao buscar produto por id no banco de dados'))

})

//atualiza dados do formulario via metodo put
const atualizar = () => {
    if(!validar_formulario())
    return;

    //ler os dados do formulario e cria um objeto JSON
    const dados = {
        id: document.getElementById('id').value,
        descricao : document.getElementById('descricao').value,
        categoria: parseInt(document.getElementById('categoria').value),
        preco: parseFloat(document.getElementById('preco').value.replace(',','.')),
        quantidade:parseInt(document.getElementById('quantidade').value),
        url: document.getElementById('url').value
    }
    
    //evia requisiçao com os dadod para atualizar
    fetch('http://localhost:3000/produtos/', {
        method: 'PUT' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dados)
        //converte a resposta do servidor em objeto json
    }).then((res) => res.json()
    
    //pega o objeto json retornado e mostra no console)
    ).then((data) => {
        console.log(data);
    }).then(() => {
        console.log('Produto atualizado com sucesso!')
        location.href = 'gerenciar.html'
    }).catch((erro) => {
        alert('Erro ao atualizar dados do produto: +erro')
    })

}   

