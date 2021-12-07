import React from 'react';
import Head from 'next/head';
import App from '../components/App';
import { headData } from '../mock/data';

const IndexPage = () => {
  const { title, lang, description } = headData;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Head>
      <App />
    </>
  );
};
export default IndexPage;
