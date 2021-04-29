import React from 'react';
import s from './Wrapper.module.css';

export default function Container({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
