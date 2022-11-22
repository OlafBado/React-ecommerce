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
                style={{ textDecoration: "none" }}
                key={this.props.product.id}
                to={`/${this.props.category}/${this.props.product.id}`}
            >
                <div className="products-item">
                    <div className="products-item-img">
                        <img
                            style={
                                this.props.product.inStock
                                    ? null
                                    : { opacity: 0.5 }
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
                        className="products-item-description"
                        style={
                            this.props.product.inStock
                                ? { color: "#1D1F22" }
                                : { color: "#8D8F9A" }
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
