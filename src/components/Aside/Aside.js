import React from 'react';
import s from './Aside.module.css';
import myPhoto from './myPhoto.jpg';

export default function SideBar() {
  return (
    <aside className={s.sidebar}>
      <img className={s.myPhoto} src={myPhoto} alt="MyPhoto" />
      <div className={s.mainContainer}>
        <div className={s.contactsContainer}>
          <h3 className={s.contactsTitle}>Contacts</h3>
          <div>
            <span className={s.contactsLinkType}> C:</span>
            <a className={[s.contactsLink]} href="tel:380630785567">
              063 07 85 567
            </a>
          </div>
          <div>
            <span className={s.contactsLinkType}> E: </span>
            <a className={s.contactsLink} href="mailto:morra4444@gmail.com">
              morra4444
            </a>
          </div>
          <div>
            <span className={s.contactsLinkType}> In: </span>
            <a
              target="_blank"
              rel="noreferrer"
              className={s.contactsLink}
              href="https://www.linkedin.com/in/elena-kononenko-5b2288200/"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <span className={s.contactsLinkType}> Git: </span>
            <a
              target="_blank"
              rel="noreferrer"
              className={s.contactsLink}
              href="https://github.com/ElenaKononenko"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={s.contactsContainer}>
          <h3 className={s.techSkillTittle}>Tech Skills</h3>
          <ul>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>React</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>Redux</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}> HTML5</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>CSS3</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>SASS</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>GIT</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>WebPack</span>
            </li>
            <li className={s.techSkillsItem}>
              <span className={s.techSkillsText}>JavaScript</span>
            </li>
          </ul>
        </div>

        <div className={s.contactsContainer}>
          <h3 className={s.softSkillsTitle}>Soft Skills</h3>
          <ul>
            <li className={s.softSkillItem}>
              <span className={s.softSkillsText}>Scrum</span>
            </li>
            <li className={s.softSkillItem}>
              <span className={s.softSkillsText}>Agile</span>
            </li>
            <li className={s.softSkillItem}>
              <span className={s.softSkillsText}>Trello</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
