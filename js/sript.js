const inputKm = document.getElementById('km');
const inputAge = document.getElementById('travelerAge');

const button = document.getElementById('my-btn');
button.addEventListener('click', function(){
    console.log(km.value);
    console.log(inputAge.value);

    const pricePerKm = km.value * 0.2762;
    console.log(pricePerKm);

    if (isNaN(inputAge.value)) {
        inputAge.value = 50;
        console.log ("Non hai inserito un'età vera, quindi non hai alcun diritto ad uno sconto!")
    }
    
    if ((inputAge.value <=0) || (inputAge.value >=123)) {
        inputAge.value = 50;
        console.log ("Non hai inserito un'età vera, quindi non hai alcun diritto ad uno sconto!")
    }


    if ((inputAge.value >= 1) && (inputAge.value <18)) {
        const discountUnder = pricePerKm * 17.5 / 100;
        const totalUnder = pricePerKm - discountUnder;
        console.log(totalUnder);
        document.getElementById('price').innerHTML = ("Ottimo, hai ottenuto uno sconto del 17.5\%! Il prezzo è:" + " " + totalUnder.toFixed(2) + '\&euro;')
       let removeDnone = document.querySelector('.popupPrice');
       removeDnone.classList.remove('d-none'); 
        
    }
    else if ((inputAge.value>18) && (inputAge.value <65)) {
        console.log(pricePerKm);
        document.getElementById('price').innerHTML = ("Non hai diritto ad alcuno sconto. Il prezzo è:" + " " + pricePerKm.toFixed(2) + '\&euro;')
        let removeDnone = document.querySelector('.popupPrice');
        removeDnone.classList.remove('d-none'); 
    }
    else {
        const discountOver = pricePerKm * 33.3 / 100;
        const totalOver = pricePerKm - discountOver;
        console.log(totalOver);
        document.getElementById('price').innerHTML = ("Ottimo, hai ottenuto uno sconto del 33.3\%! Il prezzo è:" + " " + totalOver.toFixed(2) + '\&euro;')
        let removeDnone = document.querySelector('.popupPrice');
        removeDnone.classList.remove('d-none'); 
    }

});