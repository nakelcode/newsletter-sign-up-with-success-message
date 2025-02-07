const success = document.querySelector(".success-container");
const container = document.querySelector(".container");
const subscribe = document.querySelector("#submit");
const dismiss = document.querySelector(".dismiss");
const emailInput = document.querySelector("#email");
const spanEmail = document.querySelector(".confirm");
const errorMessage = document.querySelector(".error");


success.remove();


function successMessage(event) {
    event.preventDefault(); 

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        errorMessage.innerText = "*Please enter your email address.*";
        errorMessage.style.display = "block"; 
        emailInput.style.borderColor = "hsl(234, 29%, 20%)";
        return; 
    } 

    container.remove();

    document.querySelector("main").appendChild(success);
    spanEmail.innerText = emailValue;
}

subscribe.addEventListener("click", successMessage);

function dismissMessage() {
    success.remove(); 

    document.querySelector("main").appendChild(container);
    errorMessage.style.display = "none";
}

dismiss.addEventListener("click", dismissMessage);

