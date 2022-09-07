import React from 'react'
import { CartInfo, ChangeQuantity } from '.'
import vectorLeft from '../assets/Vector-left.svg'
import vectorRight from '../assets/Vector-right.svg'

class CartItem extends React.Component {

    state = {
        index: 0
    }

    handlerImgNext() {

       let newSlide = this.state.index === this.props.gallery.length -1 ? 0 : this.state.index +1;
       this.setState({index: newSlide})
    }

    handlerImgPrev() {
        
        let newSlide = this.state.index === 0 ? this.props.gallery.length -1 : this.state.index -1;
        this.setState({index: newSlide})
    }

    render() {
        const { index } = this.state
        return (
            <div className='cart-item-container'>
                <div>
                    <CartInfo
                        findAmount={this.props.findAmount}
                        currency={this.props.currency}
                        product={this.props}
                        place={'details'}
                    />
                </div>
                <div className='cart-item-image'>
                    <div className='cart-item-image-quantity'>
                        <ChangeQuantity 
                            selectedOptions={this.props.selectedOptions}
                            name={this.props.name}
                            incrementQuantity={this.props.incrementQuantity}
                            decrementQuantity={this.props.decrementQuantity}
                            quantity={this.props.quantity}
                        />
                    </div>
                    <div className='cart-item-image-slider'>
                        <img src={this.props.gallery[index]}/>
                        {this.props.gallery.length > 1 
                        ?
                        <div className='slider'>
                            <button onClick={() => this.handlerImgPrev()}><img src={vectorLeft}/></button>
                            <button onClick={() => this.handlerImgNext()}><img src={vectorRight}/></button>
                        </div>
                        : 
                        null}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem