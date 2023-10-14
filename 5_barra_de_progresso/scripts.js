const progressBar = document.querySelector(".progress");
const btnPrevious = document.querySelector("#previous-btn");
const btnNext = document.querySelector("#next-btn");
const message = document.querySelector("#message");

let progress = 0;

function updateProgressBar() {
    progressBar.style.width = progress + "%";
    if (progress === 0) {
        message.textContent = "Iniciando formulário."
    } else if (progress === 100) {
        message.textContent = "Formulário concluído.";
    } else {
        message.textContent = "";
    }   
}

function nextStep(){
    console.log();
    progress += 25;
    if(progress > 100) {
        progress = 100;
    }     
    updateProgressBar();
}

function previousStep(){
    progress -= 25;
    if(progress < 0) {
        progress = 0;       
    } 
    updateProgressBar();
}
updateProgressBar();
btnNext.addEventListener("click", nextStep());
btnPrevious.addEventListener("click", previousStep);