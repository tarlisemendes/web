const validar_formulario = () => {
    const descricao = document.getElementById('descricao').value 
    const categoria = document.getElementById('categoria').value 
    const preco = document.getElementById('preco').value
    const quantidade = document.getElementById('quantidade').value


    //se nao existir
    if(!descricao){
        alerta_erro('faltou campo descricao')
        return false;
    }else if (!preco){
        alerta_erro('faltou campo preço')
        return false
    }else if(!quantidade){
        alerta_erro('faltou campo quantidade')
        return false
    }

    return true

}