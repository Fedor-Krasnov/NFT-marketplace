import React from 'react';
import { Button } from '../units';
import subscriptionStyles from './Subscription.module.scss';

const subscriptionClassName = 'subscription';

const Subscription = () => (
  <div className={subscriptionStyles[subscriptionClassName]}>
    <label className={subscriptionStyles[`${subscriptionClassName}__label`]}>
      <input
        className={subscriptionStyles[`${subscriptionClassName}__input-email`]}
        placeholder="Enter your email here"
      />
      <div>
        <Button title="Subscribe" />
      </div>
    </label>
  </div>
);

export { Subscription };
