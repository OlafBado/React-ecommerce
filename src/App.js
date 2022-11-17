import React from "react";
import { Header, Products, ProductDetails, CartPage } from "./components";
import { graphql } from "@apollo/client/react/hoc";
import { categoriesAndCurrencies } from "./queries/queries";
import { Routes, Route, Navigate } from "react-router-dom";
import "./assets/media.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            currency: "",
            id: "",
            cartItems: [],
            isModalOpen: false,
            isCurrencySwitcherOpen: false,
        };
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (
            nextProps.data.loading === false &&
            prevState.currency === "" &&
            prevState.title === ""
        ) {
            return {
                title: nextProps.data.categories[0].name,
                currency: nextProps.data.currencies[0].symbol,
            };
        }
        return null;
    };

    handleUpdateLocalStorage = () => {
        localStorage.setItem("user", JSON.stringify(this.state));
    };
    componentDidMount = () => {
        window.addEventListener("beforeunload", this.handleUpdateLocalStorage);

        this.userData = JSON.parse(localStorage.getItem("user"));
        if (localStorage.getItem("user")) {
            this.setState({
                title: this.userData.title,
                id: this.userData.id,
                currency: this.userData.currency,
                cartItems: this.userData.cartItems,
            });
        } else {
            this.setState({
                title: "",
                id: "",
                currency: "",
                cartItems: [],
            });
        }
    };

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.handleUpdateLocalStorage
        );
    }

    findAmount = (product, currency) => {
        const currencyDetails = product.prices.find(
            (product) => product.currency.symbol === currency
        );
        if (currencyDetails !== undefined) {
            const { amount } = currencyDetails;
            return amount;
        }
    };

    handlerSetAttributes(product) {
        let selectedAttributes = product.attributes.map((p) => {
            return {
                attribute: p.id,
                value: p.items[0].value,
            };
        });
        return selectedAttributes;
    }

    incrementQuantity = (name, selectedOptions) => {
        this.setState((prevState) => {
            const productValues = selectedOptions.map((item) => item.value);

            const updatedCartItems = prevState.cartItems.map((product) => {
                if (product.name === name) {
                    const check = product.selectedOptions
                        .map((option) => option.value)
                        .every((item, index) => item === productValues[index]);
                    if (check === true) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }
                }
                return product;
            });
            return {
                cartItems: updatedCartItems,
            };
        });
    };

    decrementQuantity = (name, selectedOptions) => {
        this.setState((prevState) => {
            const productValues = selectedOptions.map((item) => item.value);

            if (
                prevState.cartItems.find(
                    (item) => item.selectedOptions === selectedOptions
                ).quantity === 1
            ) {
                const updatedCartItems = prevState.cartItems.filter((p) => {
                    return p.selectedOptions !== selectedOptions;
                });
                return {
                    cartItems: updatedCartItems,
                };
            }

            let updatedCartItems = prevState.cartItems.map((product) => {
                if (product.name === name) {
                    const check = product.selectedOptions
                        .map((option) => option.value)
                        .every((item, index) => item === productValues[index]);
                    if (check === true) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                }
                return product;
            });
            return {
                cartItems: updatedCartItems,
            };
        });
    };

    checkAttributes = (product, selectedOptions) => {
        const sameProductsValues = this.state.cartItems
            .filter((item) => item.name === product.name)
            .map((item) => item.selectedOptions.map((option) => option.value));

        if (selectedOptions) {
            const isSame = sameProductsValues.map((product) =>
                product.every(
                    (item, index) =>
                        item ===
                        selectedOptions.map((item) => item.value)[index]
                )
            );

            const check = isSame.includes(true) ? "exists" : "not exists";
            return check;
        } else {
            const productValues = product.selectedOptions.map(
                (item) => item.value
            );

            const isSame = sameProductsValues.map((product) =>
                product.every((item, index) => item === productValues[index])
            );

            const check = isSame.includes(true) ? "exists" : "not exists";
            return check;
        }
    };

    handlerAddToCart = (product) => {
        const isPresent =
            this.state.cartItems.findIndex((p) => p.name === product.name) !==
            -1;
        if (isPresent && product.selectedOptions) {
            const check = this.checkAttributes(product);
            if (check === "exists") {
                this.incrementQuantity(product.name, product.selectedOptions);
            } else if (check === "not exists") {
                this.setState((prev) => ({
                    cartItems: [...prev.cartItems, { ...product, quantity: 1 }],
                }));
            }
        } else if (!product.selectedOptions) {
            const selectedOptions = this.handlerSetAttributes(product);
            const check = this.checkAttributes(product, selectedOptions);
            if (check === "exists") {
                this.incrementQuantity(product.name, selectedOptions);
            } else if (check === "not exists") {
                this.setState((prev) => ({
                    cartItems: [
                        ...prev.cartItems,
                        { ...product, quantity: 1, selectedOptions },
                    ],
                }));
            }
        } else {
            this.setState((prev) => ({
                cartItems: [...prev.cartItems, { ...product, quantity: 1 }],
            }));
        }
    };

    changeCategory = (category) => {
        this.setState({
            title: category,
        });
    };

    openModal = () => {
        if (this.state.isModalOpen === false) {
            this.setState({
                isModalOpen: true,
                isCurrencySwitcherOpen: false,
            });
        } else {
            this.setState({
                isModalOpen: false,
            });
        }
    };

    openCurrencySwitcher = () => {
        if (this.state.isCurrencySwitcherOpen === false) {
            this.setState({
                isCurrencySwitcherOpen: true,
                isModalOpen: false,
            });
        } else {
            this.setState({
                isCurrencySwitcherOpen: false,
            });
        }
    };

    setCurrency = (currency) => {
        this.setState({
            currency: currency,
        });
        this.setState({
            isCurrencySwitcherOpen: false,
        });
    };

    setProductId = (id) => {
        this.setState({
            id: id,
        });
    };

    calculateTotalQuantity = (items) => {
        if (items) {
            const totalQuantity = items.reduce((acc, cv) => {
                acc = acc + cv.quantity;
                return acc;
            }, 0);
            return totalQuantity;
        }
    };

    calculateTotalAmount = (items, currency, findAmount) => {
        let totalAmount = items.reduce((acc, cv) => {
            const amount = findAmount(cv, currency);
            acc = acc + amount * cv.quantity;
            return Math.round(acc * 100) / 100;
        }, 0);
        return totalAmount;
    };
    render() {
        return (
            <>
                <Header
                    isModalOpen={this.state.isModalOpen}
                    openModal={this.openModal}
                    changeCategory={this.changeCategory}
                    categories={this.props.data.categories}
                    category={this.state.title}
                    currency={this.state.currency}
                    currencies={this.props.data.currencies}
                    openCurrencySwitcher={this.openCurrencySwitcher}
                    isCurrencySwitcherOpen={this.state.isCurrencySwitcherOpen}
                    setCurrency={this.setCurrency}
                    findAmount={this.findAmount}
                    incrementQuantity={this.incrementQuantity}
                    decrementQuantity={this.decrementQuantity}
                    items={this.state.cartItems}
                    calculateTotalQuantity={this.calculateTotalQuantity}
                    calculateTotalAmount={this.calculateTotalAmount}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={`/${this.state.title}`} />}
                    />
                    {this.props.data.categories &&
                        this.props.data.categories.map((cat) => (
                            <Route path={cat.name} key={cat.name}>
                                <Route
                                    index
                                    element={
                                        <Products
                                            category={cat.name}
                                            currency={this.state.currency}
                                            setProductId={this.setProductId}
                                            handlerAddToCart={
                                                this.handlerAddToCart
                                            }
                                            findAmount={this.findAmount}
                                        />
                                    }
                                />
                                <Route
                                    path={`/${cat.name}/:id`}
                                    element={
                                        <ProductDetails
                                            currency={this.state.currency}
                                            id={this.state.id}
                                            handlerAddToCart={
                                                this.handlerAddToCart
                                            }
                                            findAmount={this.findAmount}
                                            category={this.state.title}
                                        />
                                    }
                                />
                            </Route>
                        ))}
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                findAmount={this.findAmount}
                                currency={this.state.currency}
                                incrementQuantity={this.incrementQuantity}
                                decrementQuantity={this.decrementQuantity}
                                items={this.state.cartItems}
                                calculateTotalQuantity={
                                    this.calculateTotalQuantity
                                }
                                calculateTotalAmount={this.calculateTotalAmount}
                            />
                        }
                    />
                </Routes>
            </>
        );
    }
}

export default graphql(categoriesAndCurrencies)(App);
