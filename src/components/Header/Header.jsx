import React from "react";
import logo from "../../assets/a-logo.jpg";
import { Navigation, Actions, CategoriesDropdown } from "..";
import { Link } from "react-router-dom";
import "./styles.css";

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
    }

    handleChangeCategory = () => this.props.changeCategory("all");

    render() {
        return (
            <div className="header-wrapper">
                <div className="container">
                    <div className="surface">
                        <CategoriesDropdown
                            changeCategory={this.props.changeCategory}
                            categories={this.props.categories}
                            category={this.props.category}
                        />
                        <Navigation
                            changeCategory={this.props.changeCategory}
                            categories={this.props.categories}
                            category={this.props.category}
                        />
                        <div className="logo">
                            <Link to="/all" onClick={this.handleChangeCategory}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <Actions
                            category={this.props.category}
                            isModalOpen={this.props.isModalOpen}
                            openModal={this.props.openModal}
                            currency={this.props.currency}
                            openCurrencySwitcher={
                                this.props.openCurrencySwitcher
                            }
                            isCurrencySwitcherOpen={
                                this.props.isCurrencySwitcherOpen
                            }
                            currencies={this.props.currencies}
                            setCurrency={this.props.setCurrency}
                            items={this.props.items}
                            btnRef={this.btnRef}
                            incrementQuantity={this.props.incrementQuantity}
                            decrementQuantity={this.props.decrementQuantity}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
