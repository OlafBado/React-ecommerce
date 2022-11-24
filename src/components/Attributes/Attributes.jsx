import React from "react";
import "./styles.css";

class Attributes extends React.Component {
    render() {
        return (
            <>
                {this.props.attributes.map((attribute) => {
                    return (
                        <div key={attribute.id} className="text-div">
                            <p
                                className={
                                    this.props.place === "cart"
                                        ? "cart-attributes"
                                        : "details-attributes"
                                }
                            >
                                {attribute.id}:
                            </p>
                            {attribute.type === "text" ? (
                                <div className={`text-${this.props.place}`}>
                                    {attribute.items.map((item, index) => {
                                        return (
                                            <button
                                                name={attribute.id}
                                                value={item.value}
                                                key={index}
                                                onClick={
                                                    this.props.variantChange
                                                        ? this.props
                                                              .handleVariantChange
                                                        : null
                                                }
                                                className={
                                                    this.props.ifExists(
                                                        attribute.id,
                                                        item.value
                                                    )
                                                        ? `text-button-${this.props.place} activeText`
                                                        : `text-button-${this.props.place}`
                                                }
                                            >
                                                {item.value}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className={`swatch-${this.props.place}`}>
                                    {attribute.items.map((item, index) => {
                                        return (
                                            <button
                                                key={index}
                                                name={attribute.id}
                                                value={item.value}
                                                className={
                                                    this.props.ifExists(
                                                        attribute.id,
                                                        item.value
                                                    )
                                                        ? `swatch-button-${this.props.place} activeSwatch`
                                                        : `swatch-button-${this.props.place}`
                                                }
                                                onClick={
                                                    this.props.variantChange
                                                        ? this.props
                                                              .handleVariantChange
                                                        : null
                                                }
                                                style={{
                                                    background: item.value,
                                                }}
                                            ></button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Attributes;
