import TitleFeedback from './_01-title';
import FeedbackOptions from './_02-button';
import Statistics from './_03-statistics';
import Notification from './_04-notification';
import css from './app.module.scss';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addValue = e => {
    const key = e.target.innerHTML;
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const arrStateValue = Object.values(this.state);
    const sum = arrStateValue[0] + arrStateValue[1] + arrStateValue[2];
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = Math.round((100 / total) * good);
    return percentage;
  };

  render() {
    return (
      <div className={css['feedback']}>
        <TitleFeedback />
        <div className={css['feedback__button_list']}>
          <FeedbackOptions addValue={this.addValue} BtnName="good" />
          <FeedbackOptions addValue={this.addValue} BtnName="neutral" />
          <FeedbackOptions addValue={this.addValue} BtnName="bad" />
        </div>

        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
