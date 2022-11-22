export const calculateTotalQuantity = (items) => {
    if (!items) return;
    const totalQuantity = items.reduce((acc, cv) => {
        acc = acc + cv.quantity;
        return acc;
    }, 0);
    return totalQuantity;
};
