import React from "react";
import plus from "../../assets/plus-square.svg";
import minus from "../../assets/minus-square.svg";
import "./styles.css";

class ChangeQuantity extends React.PureComponent {
    handleIncrementQuantity = () =>
        this.props.incrementQuantity(
            this.props.name,
            this.props.selectedOptions
        );

    handleDecrementQuantity = () =>
        this.props.decrementQuantity(
            this.props.name,
            this.props.selectedOptions
        );

    render() {
        return (
            <>
                <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={this.handleIncrementQuantity}
                >
                    <img src={plus} alt="plus" />
                </button>
                <p>{this.props.quantity}</p>
                <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={this.handleDecrementQuantity}
                >
                    <img src={minus} alt="minus" />
                </button>
            </>
        );
    }
}

export default ChangeQuantity;
