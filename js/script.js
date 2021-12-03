const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button__cart');
const buttonClosed = document.querySelector(".button--closed");
const cancelButton = document.getElementById ('cancelButton');

buttonCart.addEventListener('click', toglleModal);
buttonClosed.addEventListener('click', toglleModal);
cancelButton.addEventListener('click', toglleModal);

function toglleModal(){
    modal.classList.toggle('open');
}

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// function removeOpen(){
//     modal.classList.remove('open')
// }

// console.log(modal);
// console.log(buttonCart);
// console.log(buttonClosed);