import React, { Fragment } from 'react';
import Head from '../components/Head';
import Logo from '../components/Logo';
import PassCode from '../components/PassCode';

const Home = () => (
  <Fragment>
    <Head title="Hyped Sync" />
    <Logo />
    <PassCode />
  </Fragment>
);

export default Home;