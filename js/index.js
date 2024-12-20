document.getElementById('donate-now-btn')
    .addEventListener('click', function () {

        const donateMoney = getInputValue('donate-input-field');
        const donateForFloodInNoakhali = getTextValue('donate-money-for-noakhali-flood');

        if (isNaN(donateMoney)) {
            alert('Failed to add money for donate.');
            return;
        }

        const updateBalance = donateMoney + donateForFloodInNoakhali;
        document.getElementById('donate-money-for-noakhali-flood').innerText = updateBalance;

        const donateAccountBalance = getTextValue('donate-account-balance');
        const donateAccountBalanceUpdate = donateAccountBalance - donateMoney;
        document.getElementById('donate-account-balance').innerText = donateAccountBalanceUpdate;

        if (donateMoney > donateAccountBalance) {
            alert('You do not have enough money to donate.');
            return;
        }

        const transactionEntry = document.createElement('p');
        transactionEntry.innerText = `
        ${donateMoney} Taka is Donated for Flood at Noakhali, Bangladesh`;
        
        document.getElementById('transaction-history').appendChild(transactionEntry);

    });



document.getElementById('donate-now-btn-2')
    .addEventListener('click', function () {

        const donateMoneyCard2 = getInputValue('donate-input-field2');
        const donateMoneyForFeniRelief = getTextValue('donate-money-for-feni-relief');

        if (isNaN(donateMoneyCard2)) {
            alert('Failed to add money for donate');
            return;
        }

        const updateBalance2 = donateMoneyCard2 + donateMoneyForFeniRelief;
        document.getElementById('donate-money-for-feni-relief').innerText = updateBalance2;

        const donateAccountBalance2 = getTextValue('donate-account-balance');
        const donateAccountBalanceUpdate2 = donateAccountBalance2 - donateMoneyCard2;
        document.getElementById('donate-account-balance').innerText = donateAccountBalanceUpdate2;

        if (donateMoneyCard2 > donateAccountBalance2) {
            alert('You do not enough money to donate.');
            return;
        }

        const transactionEntry2 = document.createElement('p');
        transactionEntry2.innerText = `
        ${donateMoneyCard2} Taka is Donated for Flood Relief in Feni, Bangladesh`;
        
        document.getElementById('transaction-history').appendChild(transactionEntry2);


    });



document.getElementById('donate-now-btn3')
    .addEventListener('click', function () {

        const donateMoneyCard3 = getInputValue('donate-input-field3');
        const donateMoneyAidForInjured = getTextValue('donate-money-aid-for-injured');

        if(isNaN(donateMoneyCard3)){
            alert('Failed to add money for donate');
            return;
        }

        const updateBalance3 = donateMoneyCard3 + donateMoneyAidForInjured;
        document.getElementById('donate-money-aid-for-injured').innerText = updateBalance3;

        const donateAccountBalance3 = getTextValue('donate-account-balance');
        const donateAccountBalanceUpdate3 = donateAccountBalance3 - donateMoneyCard3;
        document.getElementById('donate-account-balance').innerText = donateAccountBalanceUpdate3;

        if(donateMoneyCard3 > donateAccountBalance3){
            alert('You do not enough money to donate');
            return;
        }

        const transactionEntry3 = document.createElement('p');
        transactionEntry3.innerText = `
        ${donateMoneyCard3} Taka is Donated to Aid for Injured People, Bangladesh`;
        
        document.getElementById('transaction-history').appendChild(transactionEntry3);

    })