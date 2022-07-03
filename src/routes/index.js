import React from 'react';
import { Helmet } from 'react-helmet';
import VideoHero from './VideoHero';

const DEFAULT = 'Yates Garage';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{DEFAULT}</title>
      </Helmet>
      <header className="App-header">
        <h1>{DEFAULT}</h1>
      </header>
    </>
  );
}

export function About() {
  return (
    <>
      <Helmet>
        <title>{`${DEFAULT} - About`}</title>
      </Helmet>
      <header className="App-header">
        About
      </header>
    </>
  );
}
