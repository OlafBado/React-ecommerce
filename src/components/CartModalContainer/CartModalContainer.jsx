import React from "react";
import ReactDOM from "react-dom";
import { CartModal } from "..";

class CartModalContainer extends React.PureComponent {
    handleClickOutside = (e) => {
        const element = e.composedPath()[0];
        if (
            element !== this.props.btnRef.current &&
            !e.composedPath().find((e) => e.className === "cart-modal") &&
            e.composedPath()[0].className !== "badge"
        ) {
            this.props.openModal();
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return ReactDOM.createPortal(
            <>
                <CartModal {...this.props} />
            </>,
            document.getElementById("portal")
        );
    }
}

export default CartModalContainer;
