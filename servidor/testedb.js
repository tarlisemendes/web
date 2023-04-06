(async() =>{
    //importa o arquivo db.js
    const db = require('./db')

   /* console.log('inserindo produtooooo....a.a.s.d.a')
    const inseriu = await db.insereProduto ({descricao:'Barra de cereais vegano',
                                                    categoria: 1,
                                                    preco: 21.60,
                                                    quantidade:5,
                                                    url: 'imagens/cereias.png'
                                                })

    */                                            

/*console.log('Pesquisando produtos.....')
const produtos = await db.selecionaProdutos()
console.log(produtos)
*/

/*console.log('Buscando produto...')
const id = 2
const produto = await db.buscaPorId(id)
console.log(produto)
*/

/*console.log('atualizando produto')
     const atualizou = await db.atualizaProduto(1, {descricao:'Barra de cereais vegano',
                                                categoria: 1,
                                                preco: 21.60,
                                                quantidade:5,
                                                url: 'imagens/cereias.png'
 })

console.log(atualizou)
*/

console.log('apagando produto...')
const apagou = await db.deletaProduto(3)
console.log(apagou)

})();