import displayCategories from "../utils/displayCategories"
import React from 'react'
import { OutsideClick } from '.'

class CategoriesDropdown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div className="media-dropdown">
                <button onClick={() => this.setState({isOpen: !this.state.isOpen})} className='media-dropdown-button'></button>
                <div className="media-dropdown-menu" style={{display: this.state.isOpen ? 'block' : 'none'}}>
                    { this.props ? displayCategories(this.props) : '' }
                </div>
            </div>
        )
    }
}

export default CategoriesDropdown