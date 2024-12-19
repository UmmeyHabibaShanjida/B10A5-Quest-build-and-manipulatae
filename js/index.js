document.getElementById('donate-now-btn')
    .addEventListener('click', function () {

        const donateMoney = getInputValue('donate-input-field');
        const donateForFloodInNoakhali = getTextValue('donate-money-for-noakhali-flood');

        if (isNaN(donateMoney)) {
            alert('Failed to add money to donate.');
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

    })