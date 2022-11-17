import React from "react";
import { CurrencySwitcher, CartModal } from "..";
import vectorDown from "../../assets/Vector-down.svg";
import vectorUp from "../../assets/Vector-up.svg";
import "./styles.css";

class Actions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.imgRef = React.createRef();
    }

    render() {
        const totalQuantity = this.props.calculateTotalQuantity(
            this.props.items
        );

        return (
            <div className="actions">
                <button
                    ref={this.buttonRef}
                    className="actions-currency"
                    onClick={() => this.props.openCurrencySwitcher()}
                >
                    {this.props.currency}
                    <img
                        ref={this.imgRef}
                        src={
                            this.props.isCurrencySwitcherOpen === true
                                ? vectorUp
                                : vectorDown
                        }
                        alt="vector"
                    />
                </button>
                <button
                    ref={this.props.btnRef}
                    onClick={() => this.props.openModal()}
                    className="actions-cart"
                >
                    {totalQuantity >= 1 ? (
                        <div className="badge">{totalQuantity}</div>
                    ) : null}
                </button>

                {this.props.isCurrencySwitcherOpen ? (
                    <CurrencySwitcher
                        currencies={this.props.currencies}
                        setCurrency={this.props.setCurrency}
                        currency={this.props.currency}
                        openCurrencySwitcher={this.props.openCurrencySwitcher}
                        buttonref={this.buttonRef}
                        imgref={this.imgRef}
                    />
                ) : null}
                {this.props.isModalOpen ? (
                    <CartModal
                        openModal={this.props.openModal}
                        currency={this.props.currency}
                        incrementQuantity={this.props.incrementQuantity}
                        decrementQuantity={this.props.decrementQuantity}
                        items={this.props.items}
                        findAmount={this.props.findAmount}
                        calculateTotalQuantity={
                            this.props.calculateTotalQuantity
                        }
                        calculateTotalAmount={this.props.calculateTotalAmount}
                        btnRef={this.props.btnRef}
                    />
                ) : null}
            </div>
        );
    }
}

export default Actions;
