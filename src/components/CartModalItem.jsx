import React from 'react'
import { CartInfo, ChangeQuantity } from '.'

class CartModalItem extends React.Component {
    render() {
        return (
            <>
                {this.props.items.map((item, index) => {
                    return (
                    <div key={index} className='cart-modal-item'>
                        <div className='cart-modal-info'>
                            <CartInfo
                                findAmount={this.props.findAmount}
                                currency={this.props.currency}
                                place={'cart'}
                                product={item}
                            />
                        </div>
                        <div className='cart-modal-image'>
                            <div className='cart-modal-image-quantity'>
                                <ChangeQuantity
                                    selectedOptions={item.selectedOptions}
                                    name={item.name}
                                    incrementQuantity={this.props.incrementQuantity}
                                    decrementQuantity={this.props.decrementQuantity}
                                    quantity={item.quantity}
                                />
                            </div>
                            <img src={item.gallery[0]}/>
                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
}

export default CartModalItem