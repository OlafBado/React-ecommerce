import React from "react";
import { CartInfo, ChangeQuantity, Slider } from "..";
import "./styles.css";

class CartItem extends React.Component {
    state = {
        index: 0,
    };

    changeImg = (index) => {
        this.setState({
            index: index,
        });
    };

    render() {
        const { index } = this.state;
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
                        <img src={this.props.gallery[index]} alt="product" />
                        {this.props.gallery.length > 1 ? (
                            <Slider
                                index={index}
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
