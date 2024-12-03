document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('amt').value;
    const addPass = document.getElementById('add-pass').value;
    // console.log(addMoney,addPass);
    if (addPass === '1234') {

        const prevMoney = document.getElementById('prev-amt').innerText;
        const newAddMoney = parseFloat(addMoney);
        const newPrevMoney = parseFloat(prevMoney);
        const totalMoney = newAddMoney + newPrevMoney;
        document.getElementById('prev-amt').innerText = totalMoney;
        const p = document.createElement('p');
        p.innerText =newAddMoney, totalMoney;
        document.getElementById('trans-form').appendChild(p);
    } else {
        alert('Cannot Preceed');
    }

})