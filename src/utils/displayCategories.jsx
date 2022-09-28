import { Link } from 'react-router-dom'

const displayCategories = (props) => {
    const { categories, changeCategory } = props
    if (categories) {
        return categories.map(category => {
            return (
                <Link key={category.name} to='/' className={props.category === category.name ? 'nav-link activeLink' : 'nav-link'} >
                    <button 
                        onClick={() => changeCategory(category.name)}
                        className={props.category === category.name ? 'header-navigation-button active-navigation-button' : 'header-navigation-button'}
                    >
                        {category.name}
                    </button>
                </Link>
            )
        })
    }
}

export default displayCategories