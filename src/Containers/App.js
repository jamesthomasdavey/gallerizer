import React, { Component } from "react";
import "./App.css";

import Nav from "../Components/Nav/Nav";
import Form from "../Components/Form/Form";
import Results from "../Components/Results/Results";

class App extends Component {
  state = {
    isMetric: false,
    includeHeight: false,
    formValues: {
      wallWidth: "",
      itemWidth: "",
      itemHeight: "",
      itemQuantity: ""
    },
    newFormValues: {
      wallWidth: "",
      itemWidth: "",
      itemHeight: "",
      itemQuantity: ""
    },
    margin: 0,
    maxMargin: 0,
    selectedItemIndex: 0
  };

  changeUnitHandler = () => {
    const oldUnit = this.state.isMetric;
    this.setState({ isMetric: !oldUnit });
  };

  changeHeightDisplayHandler = () => {
    const oldIncludeHeight = this.state.includeHeight;
    this.setState({ includeHeight: !oldIncludeHeight });
  };

  adjustMarginHandler = event => {
    const adjustType = event.target.getAttribute(`data-type`);
    const newState = { ...this.state };
    if (adjustType === `increase`) {
      newState.margin++;
    } else if (adjustType === `decrease`) {
      newState.margin--;
    }
    this.setState(newState);
  };

  selectItemHandler = index => {
    const newState = { ...this.state };
    newState.selectedItemIndex = index;
    this.setState(newState);
  };

  resetHandler = () => {
    const newState = { ...this.state };
    newState.formValues = {
      wallWidth: "",
      itemWidth: "",
      itemHeight: "",
      itemQuantity: ""
    };
    newState.newFormValues = { ...newState.formValues };
    newState.margin = 0;
    newState.maxMargin = 0;
    newState.selectedItemIndex = 0;
    this.setState(newState);
  };

  getMaxMarginPercentHandler = () => {
    const maxMargin =
      (this.state.newFormValues.wallWidth -
        this.state.newFormValues.itemWidth *
          this.state.newFormValues.itemQuantity) /
      2;
    return Math.floor((maxMargin / this.state.newFormValues.wallWidth) * 100);
  };

  changeValueHandler = event => {
    const dataState = event.target.getAttribute(`data-state`);
    const newValue = event.target.value;
    const previousFormValues = { ...this.state.newFormValues };
    previousFormValues[dataState] = newValue;
    this.setState({ newFormValues: previousFormValues });
  };

  calculateHandler = () => {
    let newState = { ...this.state };
    newState.maxMargin = this.getMaxMarginPercentHandler();
    newState.selectedItemIndex = this.decreaseSelectedItemIndex(
      newState.selectedItemIndex,
      newState.newFormValues.itemQuantity
    );
    newState.margin = this.decreaseMargin(newState.margin, newState.maxMargin);
    newState.formValues = newState.newFormValues;
    this.setState(newState);
  };

  keyPressHandler = e => {
    if (e.key === "Enter") {
      this.calculateHandler();
    }
  };

  decreaseSelectedItemIndex = (selectedItemIndex, itemQuantity) => {
    return selectedItemIndex + 1 > itemQuantity
      ? itemQuantity - 1
      : selectedItemIndex;
  };

  decreaseMargin = (margin, maxMargin) => {
    return maxMargin < margin ? maxMargin : margin;
  };

  render() {
    return (
      <div className="app" onKeyPress={e => this.keyPressHandler(e)}>
        <Nav
          isMetric={this.state.isMetric}
          includeHeight={this.state.includeHeight}
          changeUnit={this.changeUnitHandler}
          changeHeightDisplay={this.changeHeightDisplayHandler}
        />
        <main>
          <Form
            isMetric={this.state.isMetric}
            includeHeight={this.state.includeHeight}
            newFormValues={this.state.newFormValues}
            changeValue={this.changeValueHandler}
            reset={this.resetHandler}
            calculate={this.calculateHandler}
          />
          <Results
            isMetric={this.state.isMetric}
            includeHeight={this.state.includeHeight}
            formValues={this.state.formValues}
            margin={this.state.margin}
            maxMargin={this.state.maxMargin}
            selectedItemIndex={this.state.selectedItemIndex}
            adjustMargin={this.adjustMarginHandler}
            selectItem={this.selectItemHandler}
            decreaseMargin={this.decreaseMarginHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
