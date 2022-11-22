import React from "react";
import { OutsideClick, CurrencySwitcherSymbol } from "..";
import "./styles.css";

class CurrencySwitcherContainer extends React.PureComponent {
    render() {
        return (
            <OutsideClick
                imgref={this.props.imgref}
                buttonref={this.props.buttonref}
                openCurrencySwitcher={this.props.openCurrencySwitcher}
            >
                <div className="dropdown">
                    <div className="dropdown-content">
                        {this.props.currencies.map((currency, index) => {
                            return (
                                <CurrencySwitcherSymbol
                                    key={index}
                                    {...currency}
                                    setCurrency={this.props.setCurrency}
                                />
                            );
                        })}
                    </div>
                </div>
            </OutsideClick>
        );
    }
}

export default CurrencySwitcherContainer;
