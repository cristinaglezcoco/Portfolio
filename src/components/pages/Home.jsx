// src/components/Home.js
import { FaAngular, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { useTranslation } from 'react-i18next';
import '../../styles/_home.scss';
import '../../styles/_languages.scss';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';
import NavComponent from "../shared/Nav";
import Languages from "./Languages";


function Home() {

    const { t } = useTranslation();

  return (
    <>
      <NavComponent />

      <div className="container-home">

        <div className="upper-content">

            <div className="navbar__social">
                <a href="https://www.linkedin.com/in/cristina-gonz%C3%A1lez-coco-532ba2197/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://github.com/cristinaglezcoco?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub}alt='GitHub' />
                </a>
            </div>
            <Languages/>
        </div>

        <div className="home-title">
          <h1>{t('name')}</h1>
        </div>

        <div className="home-text">
          <h3>{t('hello')}</h3>
          <br />
          <p>{t('intro1')}</p>
          <br />
          <p>{t('intro2')}</p>
          <br/>
          <p>{t('intro3')}</p>
        </div>

        <div className="home-skills">
          <section className="skills-section">
            <h4>{t('languages')}</h4>
            <ul className="skills-list">
              <div className="list-info">
                <IoLogoJavascript size='1.8em' />
                <li className="list-info__item">Javascript</li>
              </div>
              <div className="list-info">
                <IoLogoHtml5 size='1.8em'/>
                <li className="list-info__item">HTML</li>
              </div>
              <div className="list-info">
                <IoLogoCss3 size='1.8em'/>
                <li className="list-info__item">CSS and Scss</li>
              </div>
            </ul>
          </section>
          <section className="skills-section">
            <h4>{t('frameworks')}</h4>
            <ul className="skills-list">
              <div className="list-info">
                <FaReact size='1.8em'/>
                <li className="list-info__item">React</li>
              </div>
              <div className="list-info">
                <FaAngular size='1.8em'/>
                <li className="list-info__item">Angular</li>
              </div>
            </ul>
          </section>
          <section className="skills-section">
            <h4>{t('tools')}</h4>
            <ul className="skills-list">
              <div className="list-info">
                <VscVscode size='1.8em'/>
                <li className="list-info__item">VS Code</li>
              </div>
              <div className="list-info">
                <FaGithub size='1.8em'/>
                <li className="list-info__item">GitHub</li>
              </div>
            </ul>
          </section>
        </div>

      </div>
    </>
  );
}

export default Home;
