import React, { Component } from "react";


export default class OutsideAlerter extends Component {
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

    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && event.path[0] !== this.props.buttonref.current && event.path[0] !== this.props.imgref.current) {
        this.props.openCurrencySwitcher()
    }
  }

  render() {
    return <div className="dropdown-wrapper" ref={this.wrapperRef}>{this.props.children}</div>;
  }
}