alert('Hello  World!');
alert('Carved Rock Fitness');

function showMessage(){
    console.log("message");
}

showMessage();
showMessage();

let funcExp = function(){
    console.log('messgae');
}
funcExp();

const header = document.getElementById('mess');
header.style.color = 'red';
header.style.fontWeight = '600';

const button = document.getElementById('see-review');

button.addEventListener('click', function(){
        const review = document.getElementById('review');
        if(review.classList.contains('d-none')){
            review.classList.remove('d-none');
            button.textContent= 'CLOSE REVIEW';
        }

        else{
            review.classList.add('d-none');
            button.textContent = 'Show Review'
        }
});
