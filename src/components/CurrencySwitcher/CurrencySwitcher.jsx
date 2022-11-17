import React from "react";
import { OutsideClick } from "..";
import "./styles.css";

class CurrencySwitcher extends React.Component {
    render() {
        const { currencies } = this.props;
        return (
            <OutsideClick
                imgref={this.props.imgref}
                buttonref={this.props.buttonref}
                openCurrencySwitcher={this.props.openCurrencySwitcher}
            >
                <div className="dropdown">
                    <div className="dropdown-content">
                        {currencies.map((currency, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        this.props.currency === currency.symbol
                                            ? "dropdown-element activeDropdown"
                                            : "dropdown-element"
                                    }
                                    onClick={() =>
                                        this.props.setCurrency(currency.symbol)
                                    }
                                >
                                    <p>
                                        {currency.symbol}
                                        {currency.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </OutsideClick>
        );
    }
}

export default CurrencySwitcher;
