import React, { FC } from 'react';

import Head from '../components/Head';
import Footer from '../components/Footer';

import { Main, Content404 } from '../styles/styles';

const Page404: FC = () => {
  return (
    <>
      <Head title="Badges Generator for README.md" />
      <Main>
        <Content404>
          <h1>404</h1>
          <p>This page could not be found</p>
        </Content404>
      </Main>
      <Footer />
    </>
  );
};

export default Page404;