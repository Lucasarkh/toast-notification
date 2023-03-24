let x;
let y;
let toastSuccess = document.getElementById("toast--success");
let toastError = document.getElementById("toast--error");
let containerSuccess = document.getElementsByClassName("container-toast-success")[0];
let containerError = document.getElementsByClassName("container-toast-error")[0];


function showSuccessMsg () {
    clearTimeout(x);
    containerError.style.display = "none";
    containerSuccess.style.display = "block";
    toastSuccess.style.transition = "transform 1s ease-in-out";
    toastSuccess.style.transform = "translateX(0)";
    x = setTimeout(()=> {
        toastSuccess.style.transition = "transform 1s ease-in-out";
        toastSuccess.style.transform = "translateX(400px)";
    },4000);
}

function closeToastSuccess() {
    toastSuccess.style.transition = "transform 1s ease-in-out";
    toastSuccess.style.transform = "translateX(400px)";
}

function showErrorMsg() {
    clearTimeout(y);
    containerSuccess.style.display = "none";
    containerError.style.display = "block";
    toastError.style.transition = "transform 1s ease-in-out";
    toastError.style.transform = "translateX(0)";
    y = setTimeout(()=> {
        toastError.style.transition = "transform 1s ease-in-out";
        toastError.style.transform = "translateX(400px)";
    },4000);z

}

function closeToastError() {
    toastError.style.transition = "transform 1s ease-in-out";
    toastError.style.transform = "translateX(400px)";
}


