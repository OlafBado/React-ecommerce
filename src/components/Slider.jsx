import React from "react";
import vectorLeft from "../assets/Vector-left.svg";
import vectorRight from "../assets/Vector-right.svg";

class Slider extends React.Component {
    handleImgChange(direction) {
        if (direction === "next") {
            let newSlide =
                this.props.index === this.props.galleryLength - 1
                    ? 0
                    : this.props.index + 1;
            this.props.changeImg(newSlide);
        } else {
            let newSlide =
                this.props.index === 0
                    ? this.props.galleryLength - 1
                    : this.props.index - 1;
            this.props.changeImg(newSlide);
        }
    }

    render() {
        return (
            <div className={`slider-${this.props.place}`}>
                <button
                    className={`slider-button-${this.props.place}`}
                    onClick={() => this.handleImgChange("prev")}
                >
                    <img src={vectorLeft} alt="vector" />
                </button>
                <button
                    className={`slider-button-${this.props.place}`}
                    onClick={() => this.handleImgChange("next")}
                >
                    <img src={vectorRight} alt="vector" />
                </button>
            </div>
        );
    }
}

export default Slider;
