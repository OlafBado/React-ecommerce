import React from "react";
import ReactDOM from "react-dom";
import { CartModalItem } from "..";
import { Link } from "react-router-dom";
import "./styles.css";
import { calculateTotalQuantity } from "../../services/calculate/totalQuantity";
import { calculateTotalAmount } from "../../services/calculate/totalAmount";

class CartModal extends React.PureComponent {
    handleModal = () => this.props.openModal();
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
                        <Link to="/cart" onClick={this.handleModal}>
                            <button className="cart-modal-button">
                                VIEW BAG
                            </button>
                        </Link>
                        <button className="cart-modal-button cart-modal-button--checkout">
                            CHECK OUT
                        </button>
                    </div>
                </div>
            </>,
            document.getElementById("portal")
        );
    }
}

export default CartModal;
