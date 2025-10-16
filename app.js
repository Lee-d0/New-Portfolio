const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

var click = 0
function fun(){
   document.getElementById("counts").innerHTML = ++click
    click = click
}



openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
    
})


overlay.addEventListener("click", () =>{
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal =>{
        closeModal(modal)
    })
})


closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
    
})

function openModal(modal){
    if (modal == null){
        return
    }
    modal.classList.add("active")
    overlay.classList.add("active")
}
function closeModal(modal){
    if (modal == null){
        return
    }
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_bqb90qs", "template_99t92wb", parms).then(alert("Email Sent Thank you very much"))
}