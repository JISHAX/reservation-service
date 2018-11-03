/* eslint-disable */
import React from "react";

class timeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.myTime = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickFunction(menu, state, tail, AM) {
    state(menu, tail, AM);
    document.removeEventListener("click", this.clickHandler, false);
  }
  clickHandler(e, tail) {
    if (!this.myTime.contains(e.target)) {
      document.removeEventListener("click", this.clickHandler, false);
      this.props.stateChange(this.props.currTime);
    }
  }
  render() {
    document.addEventListener("click", this.clickHandler, false);
    return (
      <ul className="dd-list-time" ref={myTime => (this.myTime = myTime)}>
        <li
          className="dd-list-item"
          onClick={this.clickFunction.bind(
            this,
            this.props.menu,
            this.props.stateChange,
            "00",
            this.props.AM
          )}
        >
          {this.props.menu} :00 {this.props.AM}
        </li>
        <li
          className="dd-list-item"
          onClick={this.clickFunction.bind(
            this,
            this.props.menu,
            this.props.stateChange,
            "30",
            this.props.AM
          )}
        >
          {this.props.menu} :30 {this.props.AM}
        </li>
      </ul>
    );
  }
}

export default timeMenu;
