export const calculateTax = (totalAmount) => {
    const tax = totalAmount * 0.21;
    return Math.round(tax * 100) / 100;
};
