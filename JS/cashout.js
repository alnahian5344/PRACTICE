


document.getElementById('cash-out-btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const outMoney = document.getElementById('cash-out-amt').value;
    const outPass = document.getElementById('cash-out-add-pass').value;
    if (outPass === '1234') {
        const prevAmount = document.getElementById('prev-amt').innerText;
        const newOputAmount = parseFloat(outMoney);
        const newPrevMoney = parseFloat(prevAmount);
        const totalAmount=newPrevMoney-newOputAmount;
       document.getElementById('prev-amt').innerText=totalAmount; 
    }else{
        alert('U cannot cashout money')
    }
})