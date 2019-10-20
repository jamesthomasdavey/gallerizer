import React, { Component } from 'react';
import classes from './App.module.css';

import Gear from '../Components/Gear/Gear';
import Nav from '../Components/Nav/Nav';
import Form from '../Components/Form/Form';
import Results from '../Components/Results/Results';
import Backdrop from '../Components/Backdrop/Backdrop';
import Toolbar from '../Components/Toolbar/Toolbar';

class App extends Component {
  state = {
    isMetric: false,
    includeHeight: false,
    formValues: {
      wallWidth: '',
      itemWidth: '',
      itemHeight: '',
      itemQuantity: ''
    },
    newFormValues: {
      wallWidth: '',
      itemWidth: '',
      itemHeight: '',
      itemQuantity: ''
    },
    margin: 0,
    maxMargin: 0,
    selectedItemIndex: 0,
    navOpen: false,
    aboutOpen: false
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

  adjustMarginHandler = adjustType => {
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
      wallWidth: '',
      itemWidth: '',
      itemHeight: '',
      itemQuantity: ''
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
        this.state.newFormValues.itemWidth * this.state.newFormValues.itemQuantity) /
      2;
    return Math.floor((maxMargin / this.state.newFormValues.wallWidth) * 100);
  };

  changeValueHandler = event => {
    const dataState = event.target.getAttribute(`id`);
    const newValue = event.target.value;
    const previousFormValues = { ...this.state.newFormValues };
    previousFormValues[dataState] = newValue;
    this.setState({ newFormValues: previousFormValues });
  };

  calculateHandler = e => {
    e.preventDefault();
    let newState = { ...this.state };
    newState.maxMargin = this.getMaxMarginPercentHandler();
    newState.selectedItemIndex = this.decreaseSelectedItemIndex(
      newState.selectedItemIndex,
      newState.newFormValues.itemQuantity
    );
    newState.selectedItemIndex = this.increaseSelectedItemIndex(newState.selectedItemIndex);
    newState.margin = this.decreaseMarginHandler(newState.margin, newState.maxMargin);
    newState.margin = this.increaseMarginHander(newState.margin);
    newState.formValues = newState.newFormValues;
    this.setState(newState, () => {
      setTimeout(() => {
        if (document.querySelector('#wallItem')) {
          document.querySelector('#wallItem').focus();
        } else if (document.querySelector('#errorMessage')) {
          document.querySelector('#errorMessage').focus();
        }
      }, 0);
    });
  };

  keyPressHandler = e => {
    // if (e.key === 'Enter') {
    //   this.calculateHandler();
    // }
  };

  decreaseSelectedItemIndex = (selectedItemIndex, itemQuantity) => {
    return selectedItemIndex + 1 > itemQuantity ? itemQuantity - 1 : selectedItemIndex;
  };

  increaseSelectedItemIndex = selectedItemIndex => {
    return selectedItemIndex < 0 ? 0 : selectedItemIndex;
  };

  decreaseMarginHandler = (margin, maxMargin) => {
    return maxMargin < margin ? maxMargin : margin;
  };

  increaseMarginHander = margin => {
    return margin < 0 ? 0 : margin;
  };

  toggleNavHandler = () => {
    const currentNavOpen = this.state.navOpen;
    this.setState({ navOpen: !currentNavOpen, aboutOpen: false });
  };

  closeNavHandler = () => {
    this.setState({ navOpen: false, aboutOpen: false });
  };

  openAboutHandler = () => {
    this.setState({ aboutOpen: true }, () => {
      document.querySelector('#aboutContent').focus();
    });
  };

  closeAboutHandler = () => {
    this.setState({ aboutOpen: false }, () => {
      document.querySelector('#aboutButton').focus();
    });
  };

  unselectAllHandler = e => {
    if (Number(e.keyCode) === 27 || (
      e.target.getAttribute('id') !== 'wallItem' &&
      e.target.getAttribute('id') !== 'innerDetails' &&
      e.target.getAttribute('id') !== 'innerParagraph' &&
      e.target.getAttribute('id') !== 'innerMarker'
    )) {
      this.setState({ selectedItemIndex: -1000 });
    }
  };

  render() {
    return (
      <div className={classes.wrapper} onKeyPress={e => this.keyPressHandler(e)}>
        <Gear navOpen={this.state.navOpen} toggleNavHandler={this.toggleNavHandler} />
        <Toolbar />
        <Backdrop navOpen={this.state.navOpen} closeNav={this.closeNavHandler} />
        <Nav
          isMetric={this.state.isMetric}
          includeHeight={this.state.includeHeight}
          changeUnit={this.changeUnitHandler}
          changeHeightDisplay={this.changeHeightDisplayHandler}
          navOpen={this.state.navOpen}
          aboutOpen={this.state.aboutOpen}
          openAbout={this.openAboutHandler}
          closeAbout={this.closeAboutHandler}
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
              closeNav={this.closeNavHandler}
            />
            <Results
              isMetric={this.state.isMetric}
              includeHeight={this.state.includeHeight}
              formValues={this.state.formValues}
              selectedItemIndex={this.state.selectedItemIndex}
              selectItem={this.selectItemHandler}
              margin={this.state.margin}
              adjustMargin={this.adjustMarginHandler}
              disableDecreaseButton={this.state.margin <= 0}
              disableIncreaseButton={this.state.margin >= this.state.maxMargin}
              disablePreviousButton={this.state.selectedItemIndex <= 0}
              disableNextButton={
                this.state.selectedItemIndex + 1 >= this.state.formValues.itemQuantity ||
                this.state.selectedItemIndex < 0
              }
              unselectAll={this.unselectAllHandler}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
