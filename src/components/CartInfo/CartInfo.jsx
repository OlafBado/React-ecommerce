import React from "react";
import { AttributesContainer } from "..";
import "./styles.css";
import { findAmount } from "../../services/calculate/amount";

class CartInfo extends React.PureComponent {
    render() {
        return (
            <>
                <p className={`info-brand-${this.props.place}`}>
                    {this.props.product.brand}
                </p>
                <p className={`info-name-${this.props.place}`}>
                    {this.props.product.name}
                </p>
                <p className={`info-price-${this.props.place}`}>
                    {this.props.currency}
                    {findAmount(this.props.product, this.props.currency)}
                </p>
                <AttributesContainer
                    place={this.props.place}
                    selectedOptions={this.props.product.selectedOptions}
                    attributes={this.props.product.attributes}
                />
            </>
        );
    }
}

export default CartInfo;
