import style from 'styled-components'

export const Title = style.h1`
    margin-bottom: ${(props) => props.margin};
    font-family: 'Raleway';
    font-style: normal;
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.height};
`