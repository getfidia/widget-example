document.addEventListener('DOMContentLoaded', () => {
    const buyMeAPizzaBtn1 = document.querySelector('#button1');
    const promptsBody = document.querySelector("#promptsBody");
    const paymentContainer = document.querySelector("#paymentContainer");

    buyMeAPizzaBtn1.addEventListener('click', () => {

        promptsBody.style.display = "block";
        paymentContainer.style.display = "block";
    })
    
    const closeBtn = document.querySelector('#cancelIcon');
    closeBtn.addEventListener('click', () => {
        promptsBody.style.display = "none";
        paymentContainer.style.display = "none";
    })
})