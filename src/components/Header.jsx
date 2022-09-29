import React from 'react'
import logo from '../assets/a-logo.jpg'
import { Navigation, Actions, CartModal, CategoriesDropdown } from '.'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.btnRef = React.createRef()
    }

    render() {
        return (
            <>
                <div className='surface'>
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
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <Actions
                        isModalOpen={this.props.isModalOpen} 
                        openModal={this.props.openModal}
                        currency={this.props.currency}
                        openCurrencySwitcher={this.props.openCurrencySwitcher}
                        isCurrencySwitcherOpen={this.props.isCurrencySwitcherOpen}
                        currencies={this.props.currencies}
                        setCurrency={this.props.setCurrency}
                        items={this.props.items}
                        calculateTotalQuantity={this.props.calculateTotalQuantity}
                        btnRef={this.btnRef}
                        calculateTotalAmount={this.props.calculateTotalAmount}
                        findAmount={this.props.findAmount}
                        incrementQuantity={this.props.incrementQuantity}
                        decrementQuantity={this.props.decrementQuantity}
                    />
                    
                </div>
                {/* {this.props.isModalOpen
                ? 
                <CartModal
                    openModal={this.props.openModal}
                    currency={this.props.currency}
                    incrementQuantity={this.props.incrementQuantity}
                    decrementQuantity={this.props.decrementQuantity}
                    items={this.props.items}
                    findAmount={this.props.findAmount}
                    calculateTotalQuantity={this.props.calculateTotalQuantity}
                    calculateTotalAmount={this.props.calculateTotalAmount}
                    btnRef={this.btnRef}
                /> : null} */}
                
        </>
        )
    }
}

export default Header