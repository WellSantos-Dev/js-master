let form = document.querySelector('#txtEmail')
let newSlatter = document.querySelector('#newsletterFeedback')

function cadastrarEmail() {
    email = form.value;
    newSlatter.innerHTML = `<p>O email ${email} foi registrado!</p>`
}