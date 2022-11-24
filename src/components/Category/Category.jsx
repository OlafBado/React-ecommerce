import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Category extends React.PureComponent {
    handleDropdown = () => {
        this.props.closeDropdown();
        this.props.changeCategory(this.props.name);
    };
    handleChangeCategory = () => this.props.changeCategory(this.props.name);
    render() {
        return (
            <Link
                to={`/${this.props.name}`}
                className={
                    this.props.category === this.props.name
                        ? "nav-link nav-link--active"
                        : "nav-link"
                }
            >
                <button
                    onClick={
                        this.props.closeDropdown
                            ? this.handleDropdown
                            : this.handleChangeCategory
                    }
                    className="header-navigation-button"
                >
                    {this.props.name}
                </button>
            </Link>
        );
    }
}

export default Category;
