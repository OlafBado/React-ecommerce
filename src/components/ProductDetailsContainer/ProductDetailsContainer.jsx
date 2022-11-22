import React from "react";
import { getDetails } from "../../queries/queries";
import { graphql } from "@apollo/client/react/hoc";
import { ProductDetails } from "..";
import "./styles.css";

class ProductDetailsContainer extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            index: 0,
            selectedOptions: {},
            setChangedAttributes: [],
        };
    }

    componentDidUpdate = (previousProps, previousState) => {
        if (previousProps.data !== this.props.data) {
            this.setDefaultAttributes(this.props);
        }
    };

    variantChange = (e) => {
        const target = e.target;
        const selectedOptions = this.state.selectedOptions;
        const changedAttribute = selectedOptions.find(
            (element) => element.attribute === target.name
        );
        changedAttribute.value = target.value;

        const changed = this.state.setChangedAttributes;
        const attributeExists = changed.find((item) => {
            const result = item.attribute === changedAttribute.attribute;
            return result;
        });
        if (!attributeExists) {
            this.setState((prevState) => ({
                setChangedAttributes: [
                    ...prevState.setChangedAttributes,
                    changedAttribute,
                ],
            }));
        } else {
            this.setState((prevState) => ({
                setChangedAttributes: prevState.setChangedAttributes.map((el) =>
                    el.attribute === attributeExists.attribute
                        ? { ...el, value: target.value }
                        : el
                ),
            }));
        }

        this.setState({
            selectedVariant: changedAttribute,
        });
    };

    handleChangeImg = (index) => {
        this.setState({
            index,
        });
    };

    setDefaultAttributes(product) {
        if (product.data.loading || !product.data.product) return;
        if (this.state.setChangedAttributes.length >= 1) {
            const selectedAttributes = product.data.product.attributes.map(
                (p) => {
                    const changedAttribute =
                        this.state.setChangedAttributes.find(
                            (o) => o.attribute === p.id
                        );
                    return {
                        attribute: p.id,
                        value: changedAttribute
                            ? changedAttribute.value
                            : p.items[0].value,
                    };
                }
            );
            this.setState({
                selectedOptions: selectedAttributes,
            });
        } else {
            const selectedAttributes = product.data.product.attributes.map(
                (p) => {
                    return {
                        attribute: p.id,
                        value: p.items[0].value,
                    };
                }
            );
            this.setState({
                selectedOptions: selectedAttributes,
            });
        }
    }

    handleAddToCart = () =>
        this.props.handlerAddToCart({
            ...this.props.data.product,
            selectedOptions: this.state.selectedOptions,
        });

    render() {
        if (this.props.data.loading)
            return <div className="data-handler">Loading...</div>;
        return (
            <div className="container padding">
                <div className="product-details">
                    <ProductDetails
                        product={this.props.data.product}
                        handleChangeImg={this.handleChangeImg}
                        handleAddToCart={this.handleAddToCart}
                        index={this.state.index}
                        currency={this.props.currency}
                        variantChange={this.variantChange}
                        selectedOptions={this.state.selectedOptions}
                    />
                </div>
            </div>
        );
    }
}

export default graphql(getDetails, {
    options: (props) => {
        return {
            variables: {
                id: window.location.pathname.split("/")[2],
            },
            fetchPolicy: "no-cache",
        };
    },
})(ProductDetailsContainer);
