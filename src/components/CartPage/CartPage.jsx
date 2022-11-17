import React from "react";
import { Title, Button, CartItem } from "..";
import "./styles.css";

class CartPage extends React.Component {
    calculateTax(totalAmount) {
        const tax = totalAmount * 0.21;
        return Math.round(tax * 100) / 100;
    }

    render() {
        const {
            currency,
            items,
            findAmount,
            incrementQuantity,
            decrementQuantity,
        } = this.props;
        const totalQuantity = this.props.calculateTotalQuantity(items);
        const totalAmount = this.props.calculateTotalAmount(
            items,
            currency,
            findAmount
        );

        return (
            <div className="container padding">
                <Title
                    margin={"55px"}
                    weight={"700"}
                    size={"32px"}
                    height={"40px"}
                >
                    CART
                </Title>
                <div className="cart-list">
                    {items.map((item, index) => {
                        return (
                            <CartItem
                                {...item}
                                key={index}
                                findAmount={findAmount}
                                currency={currency}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                            />
                        );
                    })}
                    <div className="cart-list-summary">
                        <div className="cart-list-summary-description">
                            <p className="summary">Tax 21%: </p>
                            <p className="summary">Quantity: </p>
                            <p className="summary">Total: </p>
                        </div>
                        <div className="cart-list-summary-values">
                            <p className="values">
                                {currency}
                                {this.calculateTax(totalAmount)}
                            </p>
                            <p className="values">{totalQuantity}</p>
                            <p className="values">
                                {currency}
                                {totalAmount}
                            </p>
                        </div>
                    </div>
                    <Button
                        weight={"600"}
                        size={"14px"}
                        color={"#FFFFFF"}
                        border={"none"}
                        width={"279px"}
                        height={"43px"}
                        bg={"#5ECE7B"}
                    >
                        ORDER
                    </Button>
                </div>
            </div>
        );
    }
}

export default CartPage;
