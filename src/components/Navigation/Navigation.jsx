import React from "react";
import { DisplayCategories } from "..";
import "./styles.css";

class Navigation extends React.PureComponent {
    render() {
        return (
            <div className="header-navigation">
                {this.props ? (
                    <DisplayCategories
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
