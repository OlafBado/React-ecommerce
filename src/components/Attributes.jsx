import React from "react";

class Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: {},
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { selectedOptions: props.selectedOptions };
    }

    ifExists = (attribute, value) => {
        if (Object.keys(this.state.selectedOptions).length !== 0) {
            let selectedOptions = this.state.selectedOptions.find((element) => {
                if (
                    element.attribute === attribute &&
                    element.value === value
                ) {
                    return true;
                } else {
                    return false;
                }
            });
            return selectedOptions;
        }
    };

    render() {
        const data = this.props.attributes;
        return (
            <>
                {data.map((attribute) => {
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
                                                        ? (e) =>
                                                              this.props.variantChange(
                                                                  e
                                                              )
                                                        : null
                                                }
                                                className={
                                                    this.ifExists(
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
                                                    this.ifExists(
                                                        attribute.id,
                                                        item.value
                                                    )
                                                        ? `swatch-button-${this.props.place} activeSwatch`
                                                        : `swatch-button-${this.props.place}`
                                                }
                                                onClick={
                                                    this.props.variantChange
                                                        ? (e) =>
                                                              this.props.variantChange(
                                                                  e
                                                              )
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
