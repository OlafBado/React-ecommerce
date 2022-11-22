# React E-commerce App

E-commerce application with different products. Application supports typical online store functionalities. Data is provided by GraphQL endpoint.

Visit this app by clicking on the link: https://react-ecommerce-shop-online.herokuapp.com/

**_The application is responsive_**

## Functionalities

-   Listing page - list products by selected category.
-   Ability to add product directly from listing page.
-   Product details - click on product to see its details. There are photos on the page as well as description about the product. Also (if available) different attributes of product. Select which one you want and click Add to cart button to add product to the cart.
-   Minicart - see your selected products by clicking on cart icon. You can change quantity of products inside of cart and see total price. Click View bag to be redirected to Cart page.
-   Cart page - see all your products, change their quantity and see their photos as well as total tax and total price.
-   Change currency - by clicking on icon next to the cart, you can change currency. It will influence all numeric data like price, total price, tax etc.

## Tech stack

-   React
-   React - styled components
-   GraphQL with Apollo client

## TODO

-   [/] Check all images and make sure the dimensions aren’t get broken (image 1) | solution: object-fit: contain
-   [] The URL for the cart page must be “/cart”, sometimes it’s “/tech/cart” or “/clothes/cart” and so on
-   [] installation steps must be in README
-   [/] If possible you need to use const as much as possible. Avoid let if you can. (image 2) | solution: changed Attributes, ProductDatails, Slider, App
-   [/] Improve naming. What X means? (image 3) | solution: fixed
-   [/] you can just return in this case. no need to declare a variable (image 4) | solution: fixed
-   [/] no need to write === false. you can omit it and write “ if (!this.state.isModalOpen) {}“ (image 5) | solution : fixed app
-   [/] Call setState only once if you need to change multiple state properties (image 6) | solution: fixed app
-   [/] instead of id: id. You can just write id (image 7) | solution: fixed app
-   [/] inverse your if logic everywhere. instead of this you can “if (!items) return;” ….. (image 8) | solution: changed ProductDetails, App:findAmount, incrementQuantity, decrementQuantity,
-   [/] Again, please, don’t use Component. Always use PureComponent | solution: add cartInfo, cartItem, cartPage, changeQuantity, currencySwitcher, header, outsideClick, productDetails, products, app
-   [] Create Container components for business logic. Rendering components must only return JSX, it’s a best practice | solution: container for cartModal, categories, currencySwitcher, productDetails, products
-   [] split your render methods (image 9)
-   [] avoid inline styles and the styles as props. Because it’s hard to rewrite such styles. if you have conditional styling, change the class name depending on the data. But keep your styles in css
-   [] thank you for using refs!
