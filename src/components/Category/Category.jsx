import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const active = {
    color: "#5ece7b",
    borderBottom: "2px solid #5ece7b",
};

class Category extends React.PureComponent {
    render() {
        return (
            <NavLink
                to={this.props.name}
                className="nav-link"
                style={({ isActive }) => (isActive ? active : null)}
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
            </NavLink>
        );
    }
}

export default Category;
