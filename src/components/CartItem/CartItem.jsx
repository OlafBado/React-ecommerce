import React from "react";
import { CartInfo, ChangeQuantity, Slider } from "..";
import "./styles.css";

class CartItem extends React.PureComponent {
    state = {
        index: 0,
    };

    changeImg = (index) => {
        this.setState({
            index,
        });
    };

    render() {
        return (
            <div className="cart-item-container">
                <div>
                    <CartInfo
                        findAmount={this.props.findAmount}
                        currency={this.props.currency}
                        product={this.props}
                        place={"cart-page"}
                    />
                </div>
                <div className="cart-item-image">
                    <div className="cart-item-image-quantity">
                        <ChangeQuantity
                            selectedOptions={this.props.selectedOptions}
                            name={this.props.name}
                            incrementQuantity={this.props.incrementQuantity}
                            decrementQuantity={this.props.decrementQuantity}
                            quantity={this.props.quantity}
                        />
                    </div>
                    <div className="cart-item-image-slider">
                        <img
                            src={this.props.gallery[this.state.index]}
                            alt="product"
                        />
                        {this.props.gallery.length > 1 ? (
                            <Slider
                                index={this.state.index}
                                changeImg={this.changeImg}
                                galleryLength={this.props.gallery.length}
                                place="cart"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
