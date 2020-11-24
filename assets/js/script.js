

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let motivo = document.querySelector('#motivo')
let mapa = document.getElementById('mapa')
let nomeOk = false
let emailOk = false
let motivoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMotivo(){
    let txtMotivo = document.querySelector('#txtMotivo')
    if (motivo.value.length >= 300){
        txtMotivo.innerHTML = 'Você só pode digitar 300 caracteres!'
        txtMotivo.style.color = 'red'
        txtMotivo.style.display = 'block'
    } else {
        txtMotivo.style.display = 'none'
        motivoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && motivoOk == true){
        alert('Formulário enviado!')
    }else {
        alert('Preencha o formulario corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.heigh = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.heigh = '250px'
}