import React from "react";
import { Title, Button, CartItem } from "..";
import "./styles.css";
import { calculateTax } from "../../services/calculate/tax";
import { calculateTotalAmount } from "../../services/calculate/totalAmount";
import { calculateTotalQuantity } from "../../services/calculate/totalQuantity";

class CartPage extends React.PureComponent {
    render() {
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
                    {this.props.items.map((item, index) => {
                        return (
                            <CartItem
                                {...item}
                                key={index}
                                findAmount={this.props.findAmount}
                                currency={this.props.currency}
                                incrementQuantity={this.props.incrementQuantity}
                                decrementQuantity={this.props.decrementQuantity}
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
                                {this.props.currency}
                                {calculateTax(
                                    calculateTotalAmount(
                                        this.props.items,
                                        this.props.currency
                                    )
                                )}
                            </p>
                            <p className="values">
                                {calculateTotalQuantity(this.props.items)}
                            </p>
                            <p className="values">
                                {this.props.currency}
                                {calculateTotalAmount(
                                    this.props.items,
                                    this.props.currency
                                )}
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
