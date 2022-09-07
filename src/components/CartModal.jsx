import React from 'react'
import ReactDOM from 'react-dom'
import { CartModalItem, Button } from '.'
import { Link } from 'react-router-dom'

class CartModal extends React.Component {

    render() {
        const { currency } = this.props
        let totalQuantity = this.props.items.reduce((acc, cv) => {
            acc = acc + cv.quantity
            return acc
        }, 0)

        let totalAmount = this.props.items.reduce((acc, cv) => {
            //console.log(cv)
            const amount = this.props.findAmount(cv, currency)
            acc = acc + amount * cv.quantity
            return Math.round(acc * 100) / 100
        }, 0)

        return ReactDOM.createPortal(
            <>
                <div onClick={() => this.props.openModal()} className='overlay-styles'></div>
                <div className='cart-modal'>
                    <p>My Bag<span>, {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}</span></p>
                    <div className='cart-modal-items'>
                        <CartModalItem
                            findAmount={this.props.findAmount}
                            currency={this.props.currency}
                            incrementQuantity={this.props.incrementQuantity}
                            decrementQuantity={this.props.decrementQuantity}
                            items={this.props.items}
                        />                       
                    </div>
                    <div className='cart-modal-description'>
                        <p className='cart-modal-total'>Total</p>
                        <p className='cart-modal-amount'>{currency}{totalAmount}</p>
                    </div>
                    <div className='cart-modal-buttons'>
                        <Link to='/cart'>
                            <Button
                                weight={'600'}
                                size={'14px'}
                                color={'#1D1F22'}
                                border={'1px solid black'}
                                width={'140px'}
                                height={'43px'}
                                bg={'transparent'}
                            >
                                VIEW BAG
                            </Button>
                        </Link>
                        <Button 
                            weight={'600'}
                            size={'14px'}
                            color={'#FFFFFF'}
                            border={'none'}
                            width={'140px'}
                            height={'43px'}
                            bg={'#5ECE7B'}
                        >
                            CHECK OUT
                        </Button>
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        )
    }
}

export default CartModal