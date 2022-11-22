import React from "react";
import { Markup } from "interweave";
import { Attributes, Button, Slider, ProductDetailsImg } from "..";
import "./styles.css";
import { findAmount } from "../../services/calculate/amount";

class ProductDetails extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         index: 0,
    //         selectedOptions: {},
    //         setChangedAttributes: [],
    //     };
    // }

    // componentDidUpdate = (previousProps, previousState) => {
    //     if (previousProps.data !== this.props.data) {
    //         this.setDefaultAttributes(this.props);
    //     }
    // };

    // variantChange = (e) => {
    //     const target = e.target;
    //     const selectedOptions = this.state.selectedOptions;
    //     const changedAttribute = selectedOptions.find(
    //         (element) => element.attribute === target.name
    //     );
    //     changedAttribute.value = target.value;

    //     const changed = this.state.setChangedAttributes;
    //     const attributeExists = changed.find((item) => {
    //         const result = item.attribute === changedAttribute.attribute;
    //         return result;
    //     });
    //     if (!attributeExists) {
    //         this.setState((prevState) => ({
    //             setChangedAttributes: [
    //                 ...prevState.setChangedAttributes,
    //                 changedAttribute,
    //             ],
    //         }));
    //     } else {
    //         this.setState((prevState) => ({
    //             setChangedAttributes: prevState.setChangedAttributes.map((el) =>
    //                 el.attribute === attributeExists.attribute
    //                     ? { ...el, value: target.value }
    //                     : el
    //             ),
    //         }));
    //     }

    //     this.setState({
    //         selectedVariant: changedAttribute,
    //     });
    // };

    // changeImg = (index) => {
    //     this.setState({
    //         index,
    //     });
    // };

    // setDefaultAttributes(product) {
    //     if (product.data.loading || !product.data.product) return;
    //     if (this.state.setChangedAttributes.length >= 1) {
    //         const selectedAttributes = product.data.product.attributes.map(
    //             (p) => {
    //                 const changedAttribute =
    //                     this.state.setChangedAttributes.find(
    //                         (o) => o.attribute === p.id
    //                     );
    //                 return {
    //                     attribute: p.id,
    //                     value: changedAttribute
    //                         ? changedAttribute.value
    //                         : p.items[0].value,
    //                 };
    //             }
    //         );
    //         this.setState({
    //             selectedOptions: selectedAttributes,
    //         });
    //     } else {
    //         const selectedAttributes = product.data.product.attributes.map(
    //             (p) => {
    //                 return {
    //                     attribute: p.id,
    //                     value: p.items[0].value,
    //                 };
    //             }
    //         );
    //         this.setState({
    //             selectedOptions: selectedAttributes,
    //         });
    //     }
    // }

    // handleAddToCart = () =>
    //     this.props.handlerAddToCart({
    //         ...this.props.data.product,
    //         selectedOptions: this.state.selectedOptions,
    //     });

    // displayDetails = () => {
    //     const { index } = this.state;
    //     const { product, loading } = this.props.data;
    //     const { currency } = this.props;
    //     if (loading) return <div>Loading...</div>;
    //     return (
    //         <>
    //             <div className="product-details-images">
    //                 {product.gallery.map((img, index) => {
    //                     return (
    //                         <ProductDetailsImg
    //                             img={img}
    //                             index={index}
    //                             changeImg={this.changeImg}
    //                         />
    //                     );
    //                 })}
    //             </div>
    //             <div className="product-details-main">
    //                 <div className="details-slider">
    //                     <img
    //                         alt="product"
    //                         className="product-details-image"
    //                         src={product.gallery[index]}
    //                     />
    //                     {product.gallery.length > 1 ? (
    //                         <Slider
    //                             index={index}
    //                             changeImg={this.changeImg}
    //                             galleryLength={product.gallery.length}
    //                             place="details"
    //                         />
    //                     ) : null}
    //                 </div>
    //                 <div className="product-details-details">
    //                     <p className="details-brand">{product.brand}</p>
    //                     <p className="details-name">{product.name}</p>
    //                     <Attributes
    //                         selectedOptions={this.state.selectedOptions}
    //                         attributes={product.attributes}
    //                         variantChange={this.variantChange}
    //                         place={"details"}
    //                     />
    //                     <p className="details-price">PRICE:</p>
    //                     <p className="details-amount">
    //                         {this.props.currency}
    //                         {findAmount(product, currency)}
    //                     </p>
    //                     <Button
    //                         disabled={product.inStock ? "" : true}
    //                         onClick={this.handleAddToCart}
    //                         weight={"600"}
    //                         size={"16px"}
    //                         color={product.inStock ? "#FFFFFF" : "#8D8F9A"}
    //                         border={"none"}
    //                         width={"100%"}
    //                         height={"52px"}
    //                         bg={
    //                             product.inStock
    //                                 ? "rgba(94, 206, 123, 1)"
    //                                 : "#eeeeee"
    //                         }
    //                     >
    //                         {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
    //                     </Button>
    //                     <div className="product-details-description">
    //                         <Markup content={product.description} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // };

    render() {
        console.log(this.props);
        return (
            <div className="container padding">
                <div className="product-details">
                    <>
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
                                        this.props.product.gallery[
                                            this.props.index
                                        ]
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
                                <Attributes
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
                                <Button
                                    disabled={
                                        this.props.product.inStock ? "" : true
                                    }
                                    onClick={this.props.handleAddToCart}
                                    weight={"600"}
                                    size={"16px"}
                                    color={
                                        this.props.product.inStock
                                            ? "#FFFFFF"
                                            : "#8D8F9A"
                                    }
                                    border={"none"}
                                    width={"100%"}
                                    height={"52px"}
                                    bg={
                                        this.props.product.inStock
                                            ? "rgba(94, 206, 123, 1)"
                                            : "#eeeeee"
                                    }
                                >
                                    {this.props.product.inStock
                                        ? "ADD TO CART"
                                        : "OUT OF STOCK"}
                                </Button>
                                <div className="product-details-description">
                                    <Markup
                                        content={this.props.product.description}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
