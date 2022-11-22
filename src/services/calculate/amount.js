export const findAmount = (product, currency) => {
    const currencyDetails = product.prices.find(
        (product) => product.currency.symbol === currency
    );
    if (!currencyDetails) return;
    return currencyDetails.amount;
};
