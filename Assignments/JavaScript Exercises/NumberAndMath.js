function formatCurrency(amount, currencyCode = 'INR') {
    let locale;
    if (currencyCode === 'USD') {
        locale = 'en-US';
    } else if (currencyCode === 'EUR') {
        locale = 'de-DE';
    } else if (currencyCode === 'JPY') {
        locale = 'ja-JP';
    } else if (currencyCode === 'GBP') {
        locale = 'en-GB';
    } else if (currencyCode === 'INR') {
        locale = 'en-IN';
    } else {
        locale = 'en-IN';
    }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
}

console.log(formatCurrency(216314, 'USD'));
console.log(formatCurrency(250000));
console.log(formatCurrency(500450, 'GBP'));
console.log(formatCurrency(2345, 'EUR'));
console.log(formatCurrency(1234, 'JPY'));