import { CategoriesContainer } from "..";
import React from "react";
import "./styles.css";

class CategoriesDropdown extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    closeDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    handleClickOutside = (e) => {
        if (!e.composedPath().find((e) => e.className === "media-dropdown")) {
            this.setState({
                isOpen: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <div className="media-dropdown">
                <button
                    onClick={() => this.closeDropdown()}
                    className="media-dropdown-button"
                ></button>
                <div
                    className="media-dropdown-menu"
                    style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                    {this.props ? (
                        <CategoriesContainer
                            changeCategory={this.props.changeCategory}
                            categories={this.props.categories}
                            category={this.props.category}
                            closeDropdown={this.closeDropdown}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default CategoriesDropdown;
