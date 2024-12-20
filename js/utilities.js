function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSection(id){
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}