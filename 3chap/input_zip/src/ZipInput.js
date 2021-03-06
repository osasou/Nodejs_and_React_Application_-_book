import React, { Component } from "react";

export default class ZipInput extends Component {
  constructor(props) {
    super(props);
    const v = this.props.value ? this.props.value : "";
    this.state = {
      value: v,
      isOK: this.checkValue(v),
    };
  }
  checkValue(s) {
    const zipPattern = /^\d{3}-\d{4}$/;
    return zipPattern.test(s); // strのsがzipPatternの正規表現に則しているか
  }
  handleChange(e) {
    console.log("com_handleChange!!!");
    const v = e.target.value;
    const newValue = v.replace(/[^0-9-]+/g, "");
    const newIsOK = this.checkValue(newValue);
    this.setState({
      value: newValue,
      isOK: newIsOK,
    });
    // if (this.props.onChange) {
    //   console.log("this.props.onChange");
    //   this.props.onChange({
    //     target: this,
    //     value: newValue,
    //     isOK: newIsOK,
    //   });
    // }
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("nextProps");
  //   this.setState({
  //     value: nextProps.value,
  //     isOK: this.checkValue(nextProps.value),
  //   });
  // }
  render() {
    const msg = this.renderStatusMessage();
    return (
      <div>
        <label>
          郵便番号：
          <br />
          <input
            type="text"
            placeholder="郵便番号を入力"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          ></input>
          {msg}
        </label>
      </div>
    );
  }
  renderStatusMessage() {
    const so = {
      margin: "8px",
      padding: "8px",
      color: "white",
    };
    let msg = null;
    if (this.state.isOK) {
      so.backgroundColor = "green";
      msg = <span style={so}>OK</span>;
    } else {
      if (this.state.value !== "") {
        so.backgroundColor = "red";
        msg = <span style={so}>NG</span>;
      }
    }
    return msg;
  }
}
