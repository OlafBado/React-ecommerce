import React from 'react'
import logo from '../assets/a-logo.jpg'
import { Navigation, Actions, CartModal } from '.'

class Header extends React.Component {
    render() {
        return (
            <>
                <div onClick={this.props.isModalOpen ? () => this.props.openModal() : null} className='surface'>
                    <Navigation
                        changeCategory={this.props.changeCategory}
                        categories={this.props.categories}
                        category={this.props.category}/>
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
                    />
                    
                </div>
                {this.props.isModalOpen
                ? 
                <CartModal
                    openModal={this.props.openModal}
                    currency={this.props.currency}
                    incrementQuantity={this.props.incrementQuantity}
                    decrementQuantity={this.props.decrementQuantity}
                    items={this.props.items}
                    findAmount={this.props.findAmount}
                /> : null}
        </>
        )
    }
}

export default Header