import React from 'react';
import './index.css';
import Wrapper from './components/Wrapper';
import SideBar from './components/Aside';
import AboutMe from './components/AboutMe';
export default function App() {
  return (
    <>
      <Wrapper>
        <SideBar />
        <AboutMe />
      </Wrapper>
    </>
  );
}
