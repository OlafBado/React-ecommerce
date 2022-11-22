import React from "react";

class ProductDetailsImg extends React.PureComponent {
    handleChangeImg = () => this.props.changeImg(this.props.index);
    render() {
        return (
            <img
                onClick={this.handleChangeImg}
                key={this.props.index}
                src={this.props.img}
                alt="product"
            />
        );
    }
}

export default ProductDetailsImg;
