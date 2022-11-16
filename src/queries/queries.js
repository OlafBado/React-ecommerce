import { gql } from "@apollo/client";

const getDetails = gql`
    query ($id: String!) {
        product(id: $id) {
            name
            inStock
            gallery
            description
            brand
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
        }
    }
`;

const getProducts = gql`
    query ($category: CategoryInput!) {
        category(input: $category) {
            name
            products {
                id
                inStock
                name
                gallery
                brand
                prices {
                    amount
                    currency {
                        label
                        symbol
                    }
                }
                attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
            }
        }
    }
`;

const categoriesAndCurrencies = gql`
    query {
        categories {
            name
        }
        currencies {
            label
            symbol
        }
    }
`;

export { getProducts, getDetails, categoriesAndCurrencies };
