import React from "react";
import logo from "../assets/a-logo.jpg";
import { Navigation, Actions, CategoriesDropdown } from ".";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
    }

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
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <Actions
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
                            calculateTotalQuantity={
                                this.props.calculateTotalQuantity
                            }
                            btnRef={this.btnRef}
                            calculateTotalAmount={
                                this.props.calculateTotalAmount
                            }
                            findAmount={this.props.findAmount}
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
