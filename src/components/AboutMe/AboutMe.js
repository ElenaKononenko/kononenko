import React from 'react';
import s from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <section className={s.aboutMeContainer}>
        <div className={s.line}></div>
        <div className={s.container}>
          <div className={s.info}>
            <h2 className={s.profession}>Front-End Developer</h2>
            <h1 className={s.name}>Елена Кононенко</h1>

            <p className={s.description}>Привет, меня зовут Елена</p>
          </div>
          <div className={s.proContainer}>
            <h3 className={s.aboutMeTitle}>Проекты</h3>
            <ol className={s.aboutMeList}>
              <li className={s.proItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={s.proLink}
                  href="https://maksimlisovoi.github.io/team-project-js-filmoteka/"
                >
                  Filmoteka
                </a>
                <span className={s.dots}>............................</span>
                <span>
                  <b>[</b> <span className={s.techName}> JavaScript </span>
                  <b>]</b>
                </span>
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
                <span className={s.dots}>
                  ....................................
                </span>
                <span>
                  <b>[</b>
                  <span className={s.techName}> HTML5, CSS3 </span>
                  <b>]</b>
                </span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className={s.aboutMeTitle}>Образование</h3>
            <ul className={s.aboutMeList}>
              <li>
                <h4 className={s.profTitle}>
                  <span className={s.profCompany}>GoIt</span>
                </h4>
                <h5 className={s.managTitle}>Frontend</h5>
                <span className={s.mproTime}>
                  Июнь 2020 - Май 2021
                  <span className={s.proDivider}>|</span> Киев
                </span>
              </li>
              <li>
                <h4 className={s.profTitle}>
                  <span className={s.profCompany}>НМУ им. А.А.Богомольца</span>
                </h4>
                <h5 className={s.managTitle}>Фармация</h5>
                <span className={s.mproTime}>
                  Сентябрь 2009 - Февраль 2014
                  <span className={s.proDivider}>|</span> Украина
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
