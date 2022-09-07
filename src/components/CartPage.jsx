import React from 'react'
import { Title, Button, CartItem } from '.'

class CartPage extends React.Component {

    calculateTax (totalAmount) {
        const tax = totalAmount * 0.21
        return Math.round(tax * 100) / 100
    }

    render() {

        const { currency } = this.props
        let totalQuantity = this.props.items.reduce((acc, cv) => {
            acc = acc + cv.quantity
            return acc
        }, 0)

        let totalAmount = this.props.items.reduce((acc, cv) => {
            const amount = this.props.findAmount(cv, currency)
            acc = acc + amount * cv.quantity
            return Math.round(acc * 100) / 100
        }, 0)

        return (
            <>
                <Title
                    margin={'55px'}
                    weight={'700'}
                    size={'32px'}
                    height={'40px'}
                >
                    CART
                </Title>
                <div className='cart-list'>
                    {this.props.items.map((item, index) => {
                        return (
                            <CartItem
                                {...item}
                                key={index}
                                findAmount={this.props.findAmount}
                                currency={this.props.currency}
                                incrementQuantity={this.props.incrementQuantity}
                                decrementQuantity={this.props.decrementQuantity}
                            /> 
                        )
                    })}
                    <div className='cart-list-summary'>
                        <div className='cart-list-summary-description'>
                            <p className='summary'>Tax 21%: </p>
                            <p className='summary'>Quantity: </p>
                            <p className='summary'>Total: </p>
                        </div>
                        <div className='cart-list-summary-values'>
                            <p className='values'>{currency}{this.calculateTax(totalAmount)}</p>
                            <p className='values'>{totalQuantity}</p>
                            <p className='values'>{currency}{totalAmount}</p>
                        </div>
                    </div>
                        <Button
                            weight={'600'}
                            size={'14px'}
                            color={'#FFFFFF'}
                            border={'none'}
                            width={'279px'}
                            height={'43px'}
                            bg={'#5ECE7B'}
                        >
                            ORDER
                        </Button>   
                </div>
            </>
        )
    }
}

export default CartPage