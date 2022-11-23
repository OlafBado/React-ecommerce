import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

const active = {
    color: "#5ece7b",
    borderBottom: "2px solid #5ece7b",
};

class Category extends React.PureComponent {
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
                            ? () => {
                                  this.props.closeDropdown();
                                  this.props.changeCategory(this.props.name);
                              }
                            : () => this.props.changeCategory(this.props.name)
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
