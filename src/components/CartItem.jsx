import React from 'react'
import { CartInfo, ChangeQuantity, Slider } from '.'

class CartItem extends React.Component {

    state = {
        index: 0
    }

    // handleImgChange(direction) {
    //     if (direction === 'next') {
    //         let newSlide = this.state.index === this.props.gallery.length -1 ? 0 : this.state.index +1;
    //         this.setState({index: newSlide})
    //     } else {
    //         let newSlide = this.state.index === 0 ? this.props.gallery.length -1 : this.state.index -1;
    //         this.setState({index: newSlide})
    //     }
    // }

    // handlerImgNext() {

    //    let newSlide = this.state.index === this.props.gallery.length -1 ? 0 : this.state.index +1;
    //    this.setState({index: newSlide})
    // }

    // handlerImgPrev() {
        
    //     let newSlide = this.state.index === 0 ? this.props.gallery.length -1 : this.state.index -1;
    //     this.setState({index: newSlide})
    // }

    changeImg = (index) => {
        this.setState({
            index: index
        })
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
                        place={'cart-page'}
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
                        <Slider 
                            index={index} 
                            changeImg={this.changeImg} 
                            galleryLength={this.props.gallery.length}
                            place='cart'
                        />
                        : 
                        null}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem