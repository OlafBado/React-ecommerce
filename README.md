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

-   [/] fix images dimensions | solution: set 'object-fit: contain' on image
-   [/] The button must work | solution: wrap logo with link
-   [/] add cursor pointer to all clickable elements solution: set 'cursor:pointer' on clickable elements
-   [/] - / - buttons aren’t on one line for different cards | solution: remove max-height on img
-   [/] current category must be in URL | solution: redirect the user immediately after entering the page
-   [/] other things about UX are good
-   [/] write README.md in md format better, not HTML. It will give you more abilities for -beautiful readme | solution: html converted to md
-   [/] fix all tabs and spaces. it’s important to keep your code beautiful. You can use eslint or prettier - for that | solution: prettier did the job
-   [/] Write such logic in chains like .filter().map()… it will decrease amount of variables and will be easier to read | solution: applied logic in chains
-   [/] Don’t you just want to use .push() here? | solution: applied spread operator
-   [/] Good that you fixed all errors in the console. Remove console.logs too | solution: I removed all console logs
-   [/] Use PureComponent instead of Component | solution: replaced standard component with pure component for: ProductCard, DisplayCategories, Slider, Navigation
-   [/] Have style modules in a separate folder | soplution: create folder for each component with styles.css inside
