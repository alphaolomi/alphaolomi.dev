/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
