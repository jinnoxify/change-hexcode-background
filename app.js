const btn = document.querySelector('.btn');
const hexCode = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const span = document.querySelector('.code')
function randomCode(){
    return Math.floor(Math.random() * hexCode.length);
}

btn.addEventListener('click', function() {
    let numeral = "#";
    for(let i = 0; i < 6; i++){
        numeral += hexCode[randomCode()];
    }
    document.body.style.background = numeral;
    span.textContent = numeral;
});