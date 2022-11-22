import React from "react";
import { CurrencySwitcherContainer, CartModal, CartModalContainer } from "..";
import vectorDown from "../../assets/Vector-down.svg";
import vectorUp from "../../assets/Vector-up.svg";
import "./styles.css";
import { calculateTotalQuantity } from "../../services/calculate/totalQuantity";

class Actions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.imgRef = React.createRef();
    }

    // handleTotalQuantity = () =>
    //     this.props.calculateTotalQuantity(this.props.items);

    handleCurrencySwitcher = () => this.props.openCurrencySwitcher();

    handleModal = () => this.props.openModal();

    render() {
        return (
            <div className="actions">
                <button
                    ref={this.buttonRef}
                    className="actions-currency"
                    onClick={this.handleCurrencySwitcher}
                >
                    {this.props.currency}
                    <img
                        ref={this.imgRef}
                        src={
                            this.props.isCurrencySwitcherOpen
                                ? vectorUp
                                : vectorDown
                        }
                        alt="vector"
                    />
                </button>
                <button
                    ref={this.props.btnRef}
                    onClick={this.handleModal}
                    className="actions-cart"
                >
                    {calculateTotalQuantity(this.props.items) >= 1 ? (
                        <div className="badge">
                            {calculateTotalQuantity(this.props.items)}
                        </div>
                    ) : null}
                </button>

                {this.props.isCurrencySwitcherOpen ? (
                    <CurrencySwitcherContainer
                        currencies={this.props.currencies}
                        setCurrency={this.props.setCurrency}
                        currency={this.props.currency}
                        openCurrencySwitcher={this.props.openCurrencySwitcher}
                        buttonref={this.buttonRef}
                        imgref={this.imgRef}
                    />
                ) : null}
                {this.props.isModalOpen ? (
                    <CartModalContainer
                        category={this.props.category}
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
