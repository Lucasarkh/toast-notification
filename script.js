let x;
let y;
let toastSuccess = document.getElementById("toast--success");
let toastError = document.getElementById("toast--error");
let containerSuccess = document.getElementsByClassName("container-toast-success")[0];
let containerError = document.getElementsByClassName("container-toast-error")[0];



//Exibe o toast de sucesso
function showSuccessMsg () {
    clearTimeout(x);
    if (toastSuccess.classList.contains("hide-toast-success")) {
        containerSuccess.style.zIndex = "2";
        containerError.style.zIndex = "1";
        toastSuccess.classList.remove("hide-toast-success");
    }
    
    toastSuccess.classList.add("show-toast-success");

    //Define um tempo para o toast de sucesso desaparecer
    x = setTimeout(()=> {
        toastSuccess.classList.remove("show-toast-success");
        toastSuccess.classList.add("hide-toast-success");
        toastSuccess.style.transition = "transform 1s ease-in-out";
    },4000);
}

//Fecha o toast de sucesso com um click
function closeToastSuccess() {
    if (toastSuccess.classList.contains("show-toast-success")) {
        toastSuccess.classList.remove("show-toast-success");
    }
    toastSuccess.classList.add("hide-toast-success");
    toastSuccess.style.transition = "transform 1s ease-in-out";
    containerError.style.zIndex = "2";
    containerSuccess.style.zIndex = "1";

}

//Exibe o toast de Erro
function showErrorMsg () {
    clearTimeout(x);
    if (toastError.classList.contains("hide-toast-error")) {
        containerError.style.zIndex = "2";
        containerSuccess.style.zIndex = "1";
        toastError.classList.remove("hide-toast-error");
    }
    
    toastError.classList.add("show-toast-error");

    //Define um tempo para o toast de erro desaparecer
    x = setTimeout(()=> {
        toastError.classList.remove("show-toast-error");
        toastError.classList.add("hide-toast-error");
        toastError.style.transition = "transform 1s ease-in-out";
    },4000);
}

//Fecha o toast de erro com um click
function closeToastError() {
    if (toastError.classList.contains("show-toast-error")) {
        toastError.classList.remove("show-toast-error");
    }
    toastError.classList.add("hide-toast-error");
    toastError.style.transition = "transform 1s ease-in-out";
    containerError.style.zIndex = "1";
    containerSuccess.style.zIndex = "2";

}









