import { findAmount } from "./amount";

export const calculateTotalAmount = (items, currency) => {
    const totalAmount = items.reduce((acc, cv) => {
        const amount = findAmount(cv, currency);
        acc = acc + amount * cv.quantity;
        return Math.round(acc * 100) / 100;
    }, 0);
    return totalAmount;
};
