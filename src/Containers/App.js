import React, { Component } from "react";
import classes from "./App.module.css";

import Nav from "../Components/Nav/Nav";
import Form from "../Components/Form/Form";
import Results from "../Components/Results/Results";
import Backdrop from "../Components/Backdrop/Backdrop";

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
    selectedItemIndex: 0,
    navOpen: false
  };

  formRef = React.createRef();

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
      if (this.state.margin + 1 <= this.state.maxMargin) {
        newState.margin++;
      }
    } else if (adjustType === `decrease`) {
      if (this.state.margin > 0) {
        newState.margin--;
      }
    }
    this.setState(newState);
  };

  selectItemHandler = index => {
    const newState = { ...this.state };
    if (index >= newState.formValues.itemQuantity || index < 0) {
      return;
    }
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
    this.formRef.current.resetFocus();
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
    newState.margin = this.decreaseMarginHandler(
      newState.margin,
      newState.maxMargin
    );
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

  decreaseMarginHandler = (margin, maxMargin) => {
    return maxMargin < margin ? maxMargin : margin;
  };

  toggleNavHandler = () => {
    const currentNavOpen = this.state.navOpen;
    this.setState({ navOpen: !currentNavOpen });
  };

  closeNavHandler = () => {
    this.setState({ navOpen: false });
  };

  render() {
    const disableDecreaseButton = this.state.margin <= 0;
    const disableIncreaseButton = this.state.margin >= this.state.maxMargin;
    const disablePreviousButton = this.state.selectedItemIndex <= 0;
    const disableNextButton =
      this.state.selectedItemIndex + 1 >= this.state.formValues.itemQuantity;

    return (
      <div
        className={classes.wrapper}
        onKeyPress={e => this.keyPressHandler(e)}
      >
        <div
          className={[
            classes.GearIcon,
            classes[this.state.navOpen ? "rotate" : ""]
          ].join(" ")}
          onClick={this.toggleNavHandler}
        />
        <Backdrop
          navOpen={this.state.navOpen}
          closeNav={this.closeNavHandler}
        />
        <Nav
          isMetric={this.state.isMetric}
          includeHeight={this.state.includeHeight}
          changeUnit={this.changeUnitHandler}
          changeHeightDisplay={this.changeHeightDisplayHandler}
          navOpen={this.state.navOpen}
        />
        <main className={classes.main}>
          <div className={classes.container}>
            <Form
              ref={this.formRef}
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
              selectedItemIndex={this.state.selectedItemIndex}
              selectItem={this.selectItemHandler}
              margin={this.state.margin}
              adjustMargin={this.adjustMarginHandler}
              disableDecreaseButton={disableDecreaseButton}
              disableIncreaseButton={disableIncreaseButton}
              disablePreviousButton={disablePreviousButton}
              disableNextButton={disableNextButton}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
