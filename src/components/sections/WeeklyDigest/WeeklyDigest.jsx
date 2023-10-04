import React from 'react';
import './WeeklyDigest.scss';
import { weeklyDigestData } from '../../../mocks/sections/weeklyDigest.js';
import { Title } from '../../units/index.js';

const WeeklyDigest = () => {
  const { title, description, alt, src } = weeklyDigestData;

  return (
    <section className="weekly-digest">
      <div className="weekly-digest__container"></div>
    </section>
  );
};

export { WeeklyDigest };
