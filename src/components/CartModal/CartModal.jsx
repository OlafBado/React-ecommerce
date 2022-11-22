import React from "react";
import ReactDOM from "react-dom";
import { CartModalItem, Button } from "..";
import { Link } from "react-router-dom";
import "./styles.css";
import { calculateTotalQuantity } from "../../services/calculate/totalQuantity";
import { calculateTotalAmount } from "../../services/calculate/totalAmount";

class CartModal extends React.PureComponent {
    render() {
        return ReactDOM.createPortal(
            <>
                <div className="overlay-styles"></div>
                <div className="cart-modal">
                    <p>
                        My Bag
                        <span>
                            , {calculateTotalQuantity(this.props.items)}{" "}
                            {calculateTotalQuantity(this.props.items) === 1
                                ? "item"
                                : "items"}
                        </span>
                    </p>
                    <div className="cart-modal-items">
                        {this.props.items.length === 0 ? (
                            <h3 className="empty-bag">Your bag is empty...</h3>
                        ) : (
                            <CartModalItem
                                findAmount={this.props.findAmount}
                                currency={this.props.currency}
                                incrementQuantity={this.props.incrementQuantity}
                                decrementQuantity={this.props.decrementQuantity}
                                items={this.props.items}
                            />
                        )}
                    </div>
                    <div className="cart-modal-description">
                        <p className="cart-modal-total">Total</p>
                        <p className="cart-modal-amount">
                            {this.props.currency}
                            {calculateTotalAmount(
                                this.props.items,
                                this.props.currency
                            )}
                        </p>
                    </div>
                    <div className="cart-modal-buttons">
                        <Link
                            to={`${this.props.category}/cart`}
                            onClick={() => this.props.openModal()}
                        >
                            <Button
                                weight={"600"}
                                size={"14px"}
                                color={"#1D1F22"}
                                border={"1px solid black"}
                                width={"140px"}
                                height={"43px"}
                                bg={"transparent"}
                            >
                                VIEW BAG
                            </Button>
                        </Link>
                        <Button
                            weight={"600"}
                            size={"14px"}
                            color={"#FFFFFF"}
                            border={"none"}
                            width={"140px"}
                            height={"43px"}
                            bg={"#5ECE7B"}
                        >
                            CHECK OUT
                        </Button>
                    </div>
                </div>
            </>,
            document.getElementById("portal")
        );
    }
}

export default CartModal;
