import React from "react";
import { Attributes } from "..";
import "./styles.css";

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
                    {this.props.findAmount(
                        this.props.product,
                        this.props.currency
                    )}
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
