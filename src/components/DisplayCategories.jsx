import React from 'react'
import { Link } from 'react-router-dom'

class DisplayCategories extends React.Component {
    
    render() {

        const { categories, changeCategory, closeDropdown } = this.props

        if (categories) {
            return categories.map(category => {
                return (
                    <Link key={category.name} to='/' className={this.props.category === category.name ? 'nav-link activeLink' : 'nav-link'} >
                        <button 
                            onClick={closeDropdown ? () => { closeDropdown(); changeCategory(category.name)} : () => changeCategory(category.name)}
                            className={this.props.category === category.name ? 'header-navigation-button active-navigation-button' : 'header-navigation-button'}
                        >
                            {category.name}
                        </button>
                    </Link>
                )
            })
        }
    }
}

export default DisplayCategories