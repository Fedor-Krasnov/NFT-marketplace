import React from 'react';
import './Subscription.scss';
import { Button } from '../units';

const Subscription = () => (
  <div className="subscription">
    <label className="subscription__label">
      <input className="input__email" placeholder="Enter your email here" />
      <div>
        <Button title="Subscribe" />
      </div>
    </label>
  </div>
);

export { Subscription };
