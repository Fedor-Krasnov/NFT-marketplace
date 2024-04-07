import React from 'react';
import textStyles from './Text.module.scss';

const textClassName = 'text';

const Text = ({ text }) => <div className={textStyles[textClassName]} dangerouslySetInnerHTML={{ __html: text }} />;

export { Text };
