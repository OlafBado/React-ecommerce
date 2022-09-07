import React from 'react'
import logo from '../assets/Circle Icon.svg';

class ProductCard extends React.Component {
    render() {
        const {product, currency} = this.props
        return (
            <div className='products-item'>
                <div className='products-item-img'>
                    <img style={product.inStock ? null : {opacity: 0.5}} src={product.gallery[0]} />
                    {product.inStock
                    ?
                    <button className='circle-icon-button' onClick={(e) => e.preventDefault()}>
                        <img onClick={() => this.props.handlerAddToCart(product)} src={logo} className='circle-icon' />
                    </button>
                    :
                    <div className='text-on-image'>OUT OF STOCK</div>}
                </div>
                <div className='products-item-description' style={product.inStock ? {color:'#1D1F22'} : {color:'#8D8F9A'}}>
                    <p className='products-item-description-name'>{product.brand} {product.name}</p>
                    <p className='products-item-description-price'>{this.props.currency}{this.props.findAmount(product, currency)}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard