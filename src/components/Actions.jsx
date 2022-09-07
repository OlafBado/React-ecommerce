import React from 'react'
import { CurrencySwitcher } from '.'
import vectorDown from '../assets/Vector-down.svg';
import vectorUp from '../assets/Vector-up.svg';

class Actions extends React.Component {

    constructor(props) {
        super(props)
        this.buttonRef = React.createRef();
        this.imgRef = React.createRef()
    }

    render() {

        let totalQuantity = this.props.calculateTotalQuantity(this.props.items)
       
        return (
            <div className='actions'>
                <button ref={this.buttonRef} className='actions-currency' onClick={() => this.props.openCurrencySwitcher()}>
                    {this.props.currency}
                    <img ref={this.imgRef} src={this.props.isCurrencySwitcherOpen === true ? vectorUp : vectorDown}/>
                </button>
                <button onClick={() => this.props.openModal()} className='actions-cart'>
                    {totalQuantity >= 1
                    ?
                    <div className='badge'>{totalQuantity}</div>
                    :
                    null }
                </button>
                
                {this.props.isCurrencySwitcherOpen
                ? 
                <CurrencySwitcher
                    currencies={this.props.currencies}
                    setCurrency={this.props.setCurrency}
                    currency={this.props.currency}
                    openCurrencySwitcher={this.props.openCurrencySwitcher}
                    buttonref={this.buttonRef}
                    imgref={this.imgRef}
                />
                :
                null}
            </div>
        )
    }
}

export default Actions