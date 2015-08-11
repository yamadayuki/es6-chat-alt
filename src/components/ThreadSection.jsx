import React from "react";

function getStateFromStores() {
  console.log("Return datas");
  return null;
}

let ThreadSection = React.createClass({
  getInitialState() {
    return getStateFromStores();
  },

  componentDidMount() {

  },

  render() {
    return (
      <div className="thread-section"><h2>ThreadSection</h2></div>
    );
  }
});

module.exports = ThreadSection;
