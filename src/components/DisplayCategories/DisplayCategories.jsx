import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

class DisplayCategories extends React.PureComponent {
    render() {
        const active = {
            color: "#5ece7b",
            borderBottom: "2px solid #5ece7b",
        };
        const { categories, changeCategory, closeDropdown } = this.props;
        if (categories) {
            return categories.map((category) => {
                return (
                    <NavLink
                        key={category.name}
                        to={category.name}
                        className="nav-link"
                        style={({ isActive }) => (isActive ? active : null)}
                    >
                        <button
                            onClick={
                                closeDropdown
                                    ? () => {
                                          closeDropdown();
                                          changeCategory(category.name);
                                      }
                                    : () => changeCategory(category.name)
                            }
                            className="header-navigation-button"
                        >
                            {category.name}
                        </button>
                    </NavLink>
                );
            });
        }
    }
}

export default DisplayCategories;
