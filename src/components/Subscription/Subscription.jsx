import React from 'react';
import './Subscription.scss';
import { Button } from '../units';

const subscriptionClassName = 'subscription';

const Subscription = () => (
  <div className={subscriptionClassName}>
    <label className={`${subscriptionClassName}__label`}>
      <input className={`${subscriptionClassName}__input-email`} placeholder="Enter your email here" />
      <div>
        <Button title="Subscribe" />
      </div>
    </label>
  </div>
);

export { Subscription };
