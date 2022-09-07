import React from 'react'
import { Markup } from 'interweave';
import { getDetails } from '../queries/queries';
import { graphql } from '@apollo/client/react/hoc';
import { Attributes, Button } from '.'

class ProductDetails extends React.Component {

    constructor() {
        super()
        this.state = {
            index: 0,
            selectedOptions: [],
        }
        
    }

    componentDidUpdate = (previousProps, previousState) => {
        if (previousProps.data !== this.props.data ) {
            this.setDefaultAttributes(this.props)
        }
    }

    variantChange = (e) => {
        const target = e.target
        const selectedOptions = this.state.selectedOptions

        //selectedOptions[target.name] = target.value

        const changedAttribute = selectedOptions.find(element => element.attribute === target.name)
        changedAttribute.value = target.value
        this.setState({
            selectedVariant: changedAttribute
        })
    }

    changeImg = (index) => {
        this.setState({
            index: index
        })
    }

    setDefaultAttributes (product) {
        if (!product.data.loading) {
 
            const selectedAttributes = product.data.product.attributes.map(p => {
                    return {
                        attribute: p.id,
                        value: p.items[0].value
                    }                
            } )
            this.setState({
                selectedOptions: selectedAttributes
            })
        }
    }

    displayDetails = () => {
        const { index } = this.state
        const { product } = this.props.data
        const { currency } = this.props
        if (product) {
            return (
                <>
                    <div className='product-details-images'>
                        {product.gallery.map((img, index) => {
                            return (
                                <img onClick={() => this.changeImg(index)} key={index} src={img} />
                            )
                        })}
                    </div>
                    <div className='product-details-main'>
                        <img className='product-details-image' src={product.gallery[index]}/>
                        <div className='product-details-details'>
                            <p className='details-brand'>{product.brand}</p>
                            <p className='details-name'>{product.name}</p>
                            <Attributes
                                selectedOptions={this.state.selectedOptions}
                                attributes={product.attributes}
                                variantChange={this.variantChange}
                                place={'details'}
                            />
                            <p className='details-price'>PRICE:</p>
                            <p className='details-amount'>{this.props.currency}{this.props.findAmount(product, currency)}</p>
                            <Button
                                disabled={product.inStock ? "" : true}
                                onClick={() => this.props.handlerAddToCart({...product, selectedOptions : this.state.selectedOptions})}
                                weight={'600'}
                                size={'16px'}
                                color={'#FFFFFF'}
                                border={'none'}
                                width={'292px'}
                                height={'52px'}
                                bg={'rgba(94, 206, 123, 1)'}
                            >
                                ADD TO CART
                            </Button>
                            <div className='product-details-description'>
                                <Markup content={product.description}/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    
    render() {
        
        return (
            <div className='product-details'>
                {this.displayDetails()}
            </div>
            
        )
    }
}

export default graphql(getDetails, {
    options: (props) => {
        return {
            variables: {
                id: props.id
            },
            fetchPolicy: "no-cache"
        }
    }
})(ProductDetails)