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


    // counter
    const basePrice = 500;
    let count = document.querySelector('#count');
    let countValue = parseInt(count.textContent);
    const incrementCount = document.querySelector('#incrementCount');
    const decrementCount = document.querySelector('#decrementCount');

    incrementCount.addEventListener('click', () => {
        countValue++;
        count.textContent = countValue;
        updateTotal(countValue * basePrice);
    })

    decrementCount.addEventListener('click', () => {
        if(countValue > 1){
            countValue--;
            count.textContent = countValue;
            updateTotal(countValue * basePrice);
        }
    })

    const updateTotal = (value) => {
        const totalPrice = document.querySelector('#totalPrice')
        totalPrice.textContent = value;
    }


})