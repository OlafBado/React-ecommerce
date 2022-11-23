import React from "react";
import logo from "../../assets/Circle Icon.svg";
import "./styles.css";
import { findAmount } from "../../services/calculate/amount";
import { Link } from "react-router-dom";

class ProductCard extends React.PureComponent {
    handleDefault = (e) => e.preventDefault();
    handleAddToCart = () => this.props.handlerAddToCart(this.props.product);
    handleSetId = () => this.props.setProductId(this.props.product.id);
    render() {
        return (
            <Link
                onClick={this.handleSetId}
                className="product-item-link"
                key={this.props.product.id}
                to={`/${this.props.product.id}`}
            >
                <div className="products-item">
                    <div className="products-item-img-container">
                        <img
                            className={
                                this.props.product.inStock
                                    ? "products-item-img"
                                    : " products-item-img products-item-img--disabled"
                            }
                            src={this.props.product.gallery[0]}
                            alt="product"
                        />
                        {this.props.product.inStock ? (
                            <button
                                className="circle-icon-button"
                                onClick={this.handleDefault}
                            >
                                <img
                                    onClick={this.handleAddToCart}
                                    src={logo}
                                    className="circle-icon"
                                    alt="buy now"
                                />
                            </button>
                        ) : (
                            <div className="text-on-image">OUT OF STOCK</div>
                        )}
                    </div>
                    <div
                        className={
                            this.props.product.inStock
                                ? "products-item-description"
                                : "products-item-description--disabled"
                        }
                    >
                        <p className="products-item-description-name">
                            {this.props.product.brand} {this.props.product.name}
                        </p>
                        <p className="products-item-description-price">
                            {this.props.currency}
                            {findAmount(
                                this.props.product,
                                this.props.currency
                            )}
                        </p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProductCard;
