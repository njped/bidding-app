let bidArray = [`0`];

function onPageLoad() {
    onClickHandler();
}

function onClickHandler() {
    let buttonBid1 = document.querySelector('.button1');
    let buttonBid2 = document.querySelector('.button2');
    
    buttonBid1.addEventListener('click', addBidToArray())
    buttonBid2.addEventListener('click', addBidToArray())

}


function addBidToArray() {
    let bid1 = document.querySelector('.input1').value;
    let bid2 = document.querySelector('.input2').value;

    console.log(bidArray);
}

window.onload = onPageLoad