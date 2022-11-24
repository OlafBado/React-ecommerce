import React from "react";
import { Markup } from "interweave";
import { Slider, ProductDetailsImg, AttributesContainer } from "..";
import "./styles.css";
import { findAmount } from "../../services/calculate/amount";

class ProductDetails extends React.Component {
    render() {
        return (
            <div className="container padding">
                <div className="product-details">
                    <div className="product-details-images">
                        {this.props.product.gallery.map((img, index) => {
                            return (
                                <ProductDetailsImg
                                    key={index}
                                    img={img}
                                    index={index}
                                    changeImg={this.props.handleChangeImg}
                                />
                            );
                        })}
                    </div>
                    <div className="product-details-main">
                        <div className="details-slider">
                            <img
                                alt="product"
                                className="product-details-image"
                                src={
                                    this.props.product.gallery[this.props.index]
                                }
                            />
                            {this.props.product.gallery.length > 1 ? (
                                <Slider
                                    index={this.props.index}
                                    changeImg={this.props.handleChangeImg}
                                    galleryLength={
                                        this.props.product.gallery.length
                                    }
                                    place="details"
                                />
                            ) : null}
                        </div>
                        <div className="product-details-details">
                            <p className="details-brand">
                                {this.props.product.brand}
                            </p>
                            <p className="details-name">
                                {this.props.product.name}
                            </p>
                            <AttributesContainer
                                selectedOptions={this.props.selectedOptions}
                                attributes={this.props.product.attributes}
                                variantChange={this.props.variantChange}
                                place={"details"}
                            />
                            <p className="details-price">PRICE:</p>
                            <p className="details-amount">
                                {this.props.currency}
                                {findAmount(
                                    this.props.product,
                                    this.props.currency
                                )}
                            </p>
                            {this.props.product.inStock ? (
                                <button
                                    onClick={this.props.handleAddToCart}
                                    className="product-details-button"
                                >
                                    ADD TO CART
                                </button>
                            ) : (
                                <button
                                    className="product-details-button product-details-button--disabled"
                                    disabled={true}
                                >
                                    OUT OF STOCK
                                </button>
                            )}
                            <div className="product-details-description">
                                <Markup
                                    content={this.props.product.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
