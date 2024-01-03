import { FeedBackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleReviewsClick = type => {
    setReviews(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  const { good, neutral, bad } = reviews;

  const countTotalReviews = () => {
    return good + neutral + bad;
  };

  const countPositiveReviewsPercentage = () => {
    return ((good * 100) / (neutral + bad + good) || 0).toFixed(0);
  };

  {
    const totalReviews = countTotalReviews();
    const positiveReviewsPercentage = countPositiveReviewsPercentage();
    return (
      <div className="feedbackForm">
        <Section title={'Please leave feedback'}>
          <FeedBackOptions
            options={Object.keys(reviews)}
            reviewsReceiver={handleReviewsClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalReviews > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalReviews}
              positivePercentage={positiveReviewsPercentage}
            />
          ) : (
            <Notification message="There are no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
