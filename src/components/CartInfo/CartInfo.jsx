import React from "react";
import { Attributes } from "..";
import "./styles.css";

class CartInfo extends React.Component {
    render() {
        const { currency } = this.props;
        return (
            <>
                <p className={`info-brand-${this.props.place}`}>
                    {this.props.product.brand}
                </p>
                <p className={`info-name-${this.props.place}`}>
                    {this.props.product.name}
                </p>
                <p className={`info-price-${this.props.place}`}>
                    {currency}
                    {this.props.findAmount(this.props.product, currency)}
                </p>
                <Attributes
                    place={this.props.place}
                    selectedOptions={this.props.product.selectedOptions}
                    attributes={this.props.product.attributes}
                />
            </>
        );
    }
}

export default CartInfo;
