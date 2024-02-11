import React from 'react';
import './Text.scss';

const textClassName = 'text';

const Text = ({ text }) => <div className={textClassName} dangerouslySetInnerHTML={{ __html: text }} />;

export { Text };
