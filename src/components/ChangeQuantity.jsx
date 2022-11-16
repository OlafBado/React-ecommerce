import React from "react";
import plus from "../assets/plus-square.svg";
import minus from "../assets/minus-square.svg";

class ChangeQuantity extends React.Component {
    render() {
        return (
            <>
                <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={() =>
                        this.props.incrementQuantity(
                            this.props.name,
                            this.props.selectedOptions
                        )
                    }
                >
                    <img src={plus} alt="plus" />
                </button>
                <p>{this.props.quantity}</p>
                <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={() =>
                        this.props.decrementQuantity(
                            this.props.name,
                            this.props.selectedOptions
                        )
                    }
                >
                    <img src={minus} alt="minus" />
                </button>
            </>
        );
    }
}

export default ChangeQuantity;
