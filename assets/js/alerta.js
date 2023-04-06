const alerta_erro = (msg) => {
    const alerta = document.getElementById('alerta')
    alerta.innerHTML = msg
    alerta.className = 'alert alert-danger'

    setTimeout(() => {
        alerta.className = ''
        alerta.innerHTML = ''
    }, 5000)
}