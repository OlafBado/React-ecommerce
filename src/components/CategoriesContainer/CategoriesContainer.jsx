import React from "react";
import { Category } from "..";

class CategoriesContainer extends React.PureComponent {
    render() {
        if (!this.props.categories) return <div></div>;
        return this.props.categories.map((category, index) => (
            <Category
                {...category}
                key={index}
                changeCategory={this.props.changeCategory}
                closeDropdown={this.props.closeDropdown}
                category={this.props.category}
            />
        ));
    }
}

export default CategoriesContainer;
