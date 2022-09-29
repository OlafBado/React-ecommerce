import React from 'react'
import { Link } from 'react-router-dom'
import { OutsideClick } from '.'
import { DisplayCategories } from '.'

class Navigation extends React.Component {

    // displayCategories = () => {
    //     const { categories } = this.props
    //     if (categories) {
    //         return categories.map(category => {
    //             return (
    //                 <Link key={category.name} to='/' className={this.props.category === category.name ? 'nav-link activeLink' : 'nav-link'} >
    //                     <button 
    //                         onClick={() => this.props.changeCategory(category.name)}
    //                         className={this.props.category === category.name ? 'header-navigation-button active-navigation-button' : 'header-navigation-button'}
    //                     >
    //                         {category.name}
    //                     </button>
    //                 </Link>
    //             )
    //         })
    //     }
    // }

    render() {
                
        return (
            <div className='header-navigation'>
                { this.props ? 
                <DisplayCategories 
                    changeCategory={this.props.changeCategory}
                    categories={this.props.categories}
                    category={this.props.category}
                />
                : 
                ''
                }
            </div>
        )
    }
}

export default Navigation