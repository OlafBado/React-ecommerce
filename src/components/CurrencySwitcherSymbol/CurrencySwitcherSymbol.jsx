import React from "react";
import "./styles.css";

class CurrencySwitcherSymbol extends React.PureComponent {
    handleCurrency = () => this.props.setCurrency(this.props.symbol);
    render() {
        return (
            <div
                className={
                    this.props.currency === this.props.symbol
                        ? "dropdown-element activeDropdown"
                        : "dropdown-element"
                }
                onClick={this.handleCurrency}
            >
                <p>
                    {this.props.symbol}
                    {this.props.label}
                </p>
            </div>
        );
    }
}

export default CurrencySwitcherSymbol;
