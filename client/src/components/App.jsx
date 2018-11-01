import React from "react";
import { Input } from "semantic-ui-react";
import PartySizeMenu from "./PartySizeMenu.jsx";
import TimeMenu from "./TimeMenu.jsx";
import DateMenu from "./DateMenu.jsx";
// import { formatDate } from "react-calendar";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.partySizeClickHandler = this.partySizeClickHandler.bind(this);
    this.partySizeStateChanger = this.partySizeStateChanger.bind(this);
    this.timeClickHandler = this.timeClickHandler.bind(this);
    this.timeMenuStateChanger = this.timeMenuStateChanger.bind(this);
    this.dateClickHandler = this.dateClickHandler.bind(this);
    this.dateChanger = this.dateChanger.bind(this);
    this.state = {
      PartySize: "For 3",
      PartySizeMenu: [],
      Date: "Today",
      Calendar: false,
      Time: "7:00 PM",
      TimeMenu: []
    };
  }

  partySizeClickHandler() {
    let arr = [];
    for (var i = 0; i < 20; i++) {
      arr.push(i + 1);
    }
    let obj = Object.assign({}, this.state);
    obj.PartySizeMenu = arr;
    this.setState(obj);
  }
  timeClickHandler() {
    let arr = [];
    for (var i = 0; i < 12; i++) {
      arr.push(i + 1);
    }
    let obj = Object.assign({}, this.state);
    obj.TimeMenu = arr;
    this.setState(obj);
  }
  dateClickHandler() {
    let obj = Object.assign({}, this.state);
    obj.Calendar = true;
    this.setState(obj);
  }

  partySizeStateChanger(size) {
    let obj = Object.assign({}, this.state);
    obj.PartySizeMenu = [];
    obj.PartySize = size ? "For " + size : this.state.PartySize;
    this.setState(obj);
  }
  timeMenuStateChanger(time, tail = "", AM = "") {
    let obj = Object.assign({}, this.state);
    obj.TimeMenu = [];
    obj.Time = time;
    if (tail !== "" && AM !== "") obj.Time = time + ":" + tail + " " + AM;
    this.setState(obj);
  }
  dateChanger(date) {
    let obj = Object.assign({}, this.state);
    obj.Calendar = false;
    let string = "" + date;
    string = moment(string).format("ddd, M/D");
    let today = new Date();
    let todaystring = moment(today).format("ddd, M/D");
    obj.Date = string === todaystring ? "Today" : string;
    this.setState(obj);
  }

  render() {
    return (
      <div id="masterContainer">
        <div id="containerDiv" />
        <div id="sideBar">
          <div className="reservationContainer">
            <div className="hh-header">
              <h3> <span>Make a reservation</span></h3>
            </div>
            <div className="main-container">
              <div className="party-date">
                <div className="party-size">Party Size</div>
                <div className="dd-wrapper">
              <div className="dd-header">
                <div
                  className="dd-header-title"
                  onClick={this.partySizeClickHandler}
                >
                  {this.state.PartySize}
                </div>
              </div>
              <div className="menu-border">
                <ul className="dd-list">
                  {this.state.PartySizeMenu.map((e, i) => (
                    <PartySizeMenu
                      key={i}
                      menu={e}
                      stateChange={this.partySizeStateChanger}
                    />
                  ))}
                </ul>
              </div>
            </div>
              </div>
              <div className="whole">
              <div className="half-left">
                <div id="date-label">Date</div>
                <div className="date">
                  <div id="dateContainer" onClick={this.dateClickHandler}>
                    {this.state.Date}
                  </div>
                  <DateMenu
                    Date={this.state.Date}
                    Calendar={this.state.Calendar}
                    stateChanger={this.dateChanger}
                  />
                </div>
              </div>
              <div className="half-right">
                <div id="time-label">Time</div>
                <div id="timeContainer">
                  <div
                    className="dd-header-title"
                    onClick={this.timeClickHandler}
                  >
                    {this.state.Time}
                  </div>
                  <div className="dd-list-time">
                    <ul className="dd-list">
                      {this.state.TimeMenu.map((e, i) => (
                        <TimeMenu
                          key={i}
                          menu={e}
                          AM={"AM"}
                          currTime={this.state.Time}
                          stateChange={this.timeMenuStateChanger}
                        />
                      ))}
                      {this.state.TimeMenu.map((e, i) => (
                        <TimeMenu
                          key={i}
                          menu={e}
                          AM={"PM"}
                          stateChange={this.timeMenuStateChanger}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              <div id="findATable">
                <button className="findATableButton">
                  <span>Find a Table </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
