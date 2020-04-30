import React, { Component } from "react";
import PropTypes from "prop-types";
export class AddToDo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    //Preven tsubmit to site
    e.preventDefault();

    //Pass this up
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add ToDo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddToDo;
