import React from "react";
import ReactDOM from "react-dom";
import { CartModalItem, Button } from "..";
import { Link } from "react-router-dom";
import "./styles.css";

class CartModal extends React.Component {
    handleClickOutside = (e) => {
        const element = e.composedPath()[0];
        if (
            element !== this.props.btnRef.current &&
            !e.composedPath().find((e) => e.className === "cart-modal") &&
            e.composedPath()[0].className !== "badge"
        ) {
            this.props.openModal();
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        const {
            items,
            currency,
            findAmount,
            openModal,
            incrementQuantity,
            decrementQuantity,
        } = this.props;
        const totalQuantity = this.props.calculateTotalQuantity(items);
        const totalAmount = this.props.calculateTotalAmount(
            items,
            currency,
            findAmount
        );

        return ReactDOM.createPortal(
            <>
                <div className="overlay-styles"></div>
                <div className="cart-modal">
                    <p>
                        My Bag
                        <span>
                            , {totalQuantity}{" "}
                            {totalQuantity === 1 ? "item" : "items"}
                        </span>
                    </p>
                    <div className="cart-modal-items">
                        {items.length === 0 ? (
                            <h3 className="empty-bag">Your bag is empty...</h3>
                        ) : (
                            <CartModalItem
                                findAmount={findAmount}
                                currency={currency}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                items={items}
                            />
                        )}
                    </div>
                    <div className="cart-modal-description">
                        <p className="cart-modal-total">Total</p>
                        <p className="cart-modal-amount">
                            {currency}
                            {totalAmount}
                        </p>
                    </div>
                    <div className="cart-modal-buttons">
                        <Link
                            to={`${this.props.category}/cart`}
                            onClick={() => openModal()}
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
