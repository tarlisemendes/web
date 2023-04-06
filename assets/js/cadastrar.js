
//salvar dados do formlario via method post
const salvar = () => {

    if (!validar_formulario())
        return

    const dados ={
        descricao : document.getElementById('descricao').value, 
        categoria : parseInt(document.getElementById('categoria').value),
        preco : parseFloat(document.getElementById('preco').value.replace(',' , '.')),
        quantidade: parseInt(document.getElementById('quantidade').value),
        url: document.getElementById('url').value
    }

    console.log(dados)
    //envia uma requisição com os dados do formulario
    fetch('http://localhost:3000/produtos',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        //converte os dados em uma string
        body: JSON.stringify(dados),

     //recebe a resposta e converte a string em objeto json   
    }).then((res) => res.json()

    //pega o objeto json convertido
    ).then((data) => {
        console.log(data);

    }).then(() => {
        console.log('Sucesso ao cadastrar produto');
        location.href = 'gerenciar.html';

    }).catch((erro) => {
        alert('erro ao cadastrar produto:'+ erro);
    });

  
}