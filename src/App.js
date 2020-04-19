import React, { Component } from "react";
import "./styles.css";

class test extends Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };
  handleClick = e => {
    console.log("Button was clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
  };
  render() {
    return (
      <>
        <h1>titulo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.handleChange}
              className="form-cotrol"
              type="text"
              name="Primer nombre"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </>
    );
  }
}

export default test;
