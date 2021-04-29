import React from 'react';
import s from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <section className={s.aboutMeContainer}>
        <div className={s.line}></div>
        <div className={s.container}>
          <div className={s.info}>
            <h1 className={s.name}>Olena Kononenko</h1>
            <h2 className={s.profession}>Front-End Developer</h2>

            <p className={s.description}>Привет, меня зовут Елена</p>
          </div>
          <section className={s.proContainer}>
            {/* Projects */}
            <h3 className={s.aboutMeTitle}>Projects</h3>
            <ul className={s.aboutMeList}>
              <li className={s.proItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={s.proLink}
                  href="https://morra-phonebook.netlify.app/"
                >
                  Phone Book
                </a>
                <p className={s.proTechnologies}>
                  React - Redux - React Hooks - React Bootstrap - Axios
                </p>
                <p className={s.proAbout}>
                  The project was first completed in Redux, and then finalized
                  with React Hooks
                </p>
              </li>
              <li className={s.proItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={s.proLink}
                  href="https://maksimlisovoi.github.io/team-project-js-filmoteka/"
                >
                  Filmoteka
                </a>
                <p className={s.proTechnologies}>
                  HTML5 - SASS - JS - GULP - Firebase - jQuery
                </p>
                <p className={s.proAbout}>Team Project</p>
              </li>
              <li className={s.proItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={s.proLink}
                  href="https://elenakononenko.github.io/group-project-NEW/"
                >
                  HellEN
                </a>
                <p className={s.proTechnologies}>
                  HTML5 - SASS - PARCEL - jQuery
                </p>
                <p className={s.proAbout}>Team Project</p>
              </li>
              <li className={s.proItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={s.proLink}
                  href="https://elenakononenko.github.io/goit-markup-hw-08/index.html"
                >
                  WebStudio
                </a>
                <p className={s.proTechnologies}>HTML5 - CSS3</p>
                <p className={s.proAbout}>
                  The first student project utilizing newly aquired skills
                </p>
              </li>
            </ul>
          </section>
          {/* Education */}
          <section className={s.education}>
            <h3 className={s.aboutMeTitle}>Education</h3>
            <ul className={s.aboutMeList}>
              <li>
                <h4 className={s.profTitle}>
                  <span className={s.profCompany}>GoIT</span>
                </h4>
                <h5 className={s.managTitle}>Front-End</h5>
                <span className={s.proTime}>
                  June 2020 - May 2021
                  <span className={s.proDivider}>|</span> Kyiv
                </span>
              </li>
              <li>
                <h4 className={s.profTitle}>
                  <span className={s.profCompany}>
                    Bogomolets National Medical University
                  </span>
                </h4>
                <h5 className={s.managTitle}>Pharmacy</h5>
                <span className={s.proTime}>
                  September 2009 - February 2014
                  <span className={s.proDivider}>|</span> Ukraine
                </span>
              </li>
            </ul>
          </section>
          {/* Job */}
          <section>
            <h3 className={s.aboutMeTitle}>Work Experience</h3>
            <ul className={s.aboutMeList}>
              <li>
                <h5 className={s.managTitle}>Pharmacist </h5>
                <span className={s.proTime}>
                  2009 - 2019
                  <span className={s.proDivider}>|</span> Kyiv
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
