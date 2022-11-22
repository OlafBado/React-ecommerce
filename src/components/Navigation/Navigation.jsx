import React from "react";
import { CategoriesContainer } from "..";
import "./styles.css";

class Navigation extends React.PureComponent {
    render() {
        return (
            <div className="header-navigation">
                {this.props ? (
                    <CategoriesContainer
                        changeCategory={this.props.changeCategory}
                        categories={this.props.categories}
                        category={this.props.category}
                    />
                ) : null}
            </div>
        );
    }
}

export default Navigation;
