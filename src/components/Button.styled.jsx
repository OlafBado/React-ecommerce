import style from 'styled-components'

export const Button = style.button`
    background: ${(props) => props.bg};
    min-height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: ${(props) => props.border};
    color: ${(props) => props.color};
    font-family: 'Raleway';
    font-style: 'normal';
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};

    @media (max-width: 400px) {
        width: 100%
    }
`

