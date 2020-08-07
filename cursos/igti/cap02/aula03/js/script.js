window.addEventListener('load', start);

function start(){
    console.log('Aula ');
    console.log('carregando')

    var form = document.querySelector('form')
    form.addEventListener('submit', preventSubmit)
   
    var nome = document.querySelector('#nome')
    nome.addEventListener('Keyup', countName)
   
}


function countName(event){
    console.log(event)
    var count = event.target.value
    var span = document.querySelector('#nameLength')
    span.textContent = count.length

}

function preventSubmit(event){
    event.preventDefault()

    var nome = document.querySelector('#nome')
    alert(nome.value + 'cadastro com sucesso')
}