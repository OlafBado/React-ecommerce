import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getProducts } from "../queries/queries";
import { ProductCard, Title } from ".";
import { Link } from "react-router-dom";

class Products extends React.Component {
    displayProducts = () => {
        const data = this.props.data;
        if (data.loading) {
            return <div className="data-handler">Loading...</div>;
        } else if (data.error) {
            return <div className="data-handler">Error</div>;
        } else {
            return (
                <div className="products">
                    {data.category.products.map((product) => {
                        return (
                            <Link
                                onClick={() =>
                                    this.props.setProductId(product.id)
                                }
                                style={{ textDecoration: "none" }}
                                key={product.id}
                                to={`/${this.props.category}/${product.id}`}
                            >
                                <ProductCard
                                    currency={this.props.currency}
                                    product={product}
                                    handlerAddToCart={
                                        this.props.handlerAddToCart
                                    }
                                    findAmount={this.props.findAmount}
                                />
                            </Link>
                        );
                    })}
                </div>
            );
        }
    };

    capitalizeFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        return (
            <div className="container padding">
                <Title
                    margin={"88px"}
                    weight={"400"}
                    size={"42px"}
                    height={"67px"}
                >
                    {this.capitalizeFirst(this.props.category)}
                </Title>
                {this.displayProducts()}
            </div>
        );
    }
}

export default graphql(getProducts, {
    options: (props) => {
        return {
            variables: {
                category: { title: window.location.pathname.split("/")[1] },
            },
            fetchPolicy: "no-cache",
        };
    },
})(Products);
