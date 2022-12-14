import React from "react";
import "./styles.css";

export default class OutsideAlerter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
            this.wrapperRef &&
            !this.wrapperRef.current.contains(event.target) &&
            event.composedPath()[0] !== this.props.buttonref.current &&
            event.composedPath()[0] !== this.props.imgref.current
        ) {
            this.props.openCurrencySwitcher();
        }
    };

    render() {
        return (
            <div className="dropdown-wrapper" ref={this.wrapperRef}>
                {this.props.children}
            </div>
        );
    }
}
