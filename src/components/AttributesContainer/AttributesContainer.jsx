import React from "react";
import Attributes from "../Attributes/Attributes";

class AttributesContainer extends React.Component {
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
        if (Object.keys(this.state.selectedOptions).length === 0) return;
        const selectedOptions = this.state.selectedOptions.find((element) => {
            if (element.attribute === attribute && element.value === value) {
                return true;
            } else {
                return false;
            }
        });
        return selectedOptions;
    };

    handleVariantChange = (e) => this.props.variantChange(e);

    render() {
        return (
            <Attributes
                attributes={this.props.attributes}
                place={this.props.place}
                handleVariantChange={this.handleVariantChange}
                ifExists={this.ifExists}
                variantChange={this.props.variantChange}
            />
        );
    }
}

export default AttributesContainer;
