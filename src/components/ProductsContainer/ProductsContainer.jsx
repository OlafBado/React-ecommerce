import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getProducts } from "../../queries/queries";
import { ProductCard } from "..";
import "./styles.css";

class ProductsContainer extends React.PureComponent {
    capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    render() {
        if (this.props.data.loading)
            return <div className="data-handler">Loading..</div>;
        return (
            <div className="container padding">
                <h1 className="products-container-title">
                    {this.capitalizeFirst(this.props.category)}
                </h1>
                <div className="products">
                    {this.props.data?.category?.products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            currency={this.props.currency}
                            category={this.props.category}
                            handlerAddToCart={this.props.handlerAddToCart}
                            setProductId={this.props.setProductId}
                        />
                    ))}
                </div>
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
})(ProductsContainer);
