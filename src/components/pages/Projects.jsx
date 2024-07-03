import Slack from '../../images/slack.png'
import Pokedex from '../../images/pokedex.png'
import Disney from '../../images/disney.png'
import Harry from '../../images/hp.png'
import Cervezas from '../../images/cervezas.png'

import { IoLogoAngular, IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io5'
import NavComponent from '../shared/Nav'
import Languages from './Languages'
import { useTranslation } from 'react-i18next';
import '../../styles/_languages.scss';
import '../../styles/_projects.scss';
import { SiMongodb, SiSass } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi';


function Projects() {

    const { t } = useTranslation();

  return (

    <>

    <NavComponent/>

    {/* //Slack, pokeapi, disney, hp, cervezas */}
    <div className="container-projects">

        <Languages/>

        <div className='container-pojects__content'>

            <section className='content-projects'>
                <div className='project-upperline'>
                    <h2>Slack</h2>
                    <div className="project-tech">
                        <IoLogoHtml5 className='icon'/>
                        <SiSass className='icon'/>
                    </div>
                </div>
                <div className="project-pic">
                    <img src={Slack} />
                </div>
                <p>{t('projectIntro')}</p>
                <a href='https://github.com/cristinaglezcoco/Practica-Slack'  target="_blank" rel="noopener noreferrer">{t('view')}</a>
            </section>

            <section className='content-projects'>
                <div className='project-upperline'>
                    <h2>Pokedex</h2>
                    <div className="project-tech">
                        <IoLogoJavascript className='icon'/>
                        <IoLogoHtml5 className='icon'/>
                        <IoLogoCss3 className='icon'/>
                    </div>
                </div>
                <div className="project-pic">
                    <img src={Pokedex} />
                </div>
                <p>{t('projectIntro2')}</p>
                <a href='https://pokedex-olive-tau.vercel.app/' target="_blank" rel="noopener noreferrer" >{t('view')}</a>
            </section>

            <section className='content-projects'>
                <div className='project-upperline'>
                    <h2>Disney</h2>
                    <div className="project-tech">
                        <FaReact className='icon'/>
                        <IoLogoJavascript className='icon'/>
                        <IoLogoHtml5 className='icon'/>
                        <SiSass className='icon'/>
                        <FaNodeJs className='icon' />
                        <SiMongodb className='icon' />
                    </div>
                </div>
                <div className="project-pic">
                    <img src={Disney} />
                </div>
                <p>{t('projectIntro3')}</p>
                <div className='project-view'>
                    <a href='https://front-end-disney.vercel.app/' target="_blank" rel="noopener noreferrer" >{t('viewFront')}</a>
                    <a href='https://github.com/cristinaglezcoco/Node-Disney' target="_blank" rel="noopener noreferrer" >{t('viewBack')}</a>
                </div>
            </section>

            <section className='content-projects'>
                <div className='project-upperline'>
                    <h2>Harry Potter</h2>
                    <div className="project-tech">
                        <IoLogoAngular className='icon'/>
                        <BiLogoTypescript
                        className='icon'/>
                        <IoLogoHtml5 className='icon'/>
                        <SiSass className='icon'/>
                    </div>
                </div>
                <div className="project-pic">
                    <img src={Harry} />
                </div>
                <p>{t('projectIntro4')}</p>
                <a href='https://github.com/cristinaglezcoco/Front-Harry-Potter' target="_blank" rel="noopener noreferrer" >{t('view')}</a>
            </section>

            <section className='content-projects'>
                <div className='project-upperline'>
                    <h2>Cervezas Artesanales</h2>
                    <div className="project-tech">
                        <FaReact className='icon'/>
                        <IoLogoJavascript className='icon'/>
                        <IoLogoHtml5 className='icon'/>
                        <SiSass className='icon'/>
                        <FaNodeJs className='icon' />
                        <SiMongodb className='icon' />
                    </div>
                </div>
                <div className="project-pic">
                    <img src={Cervezas} />
                </div>
                <p>{t('projectIntro5')}</p>
                <div className='project-view'>
                    <a href='https://github.com/cristinaglezcoco/Front-Cervezas-Artesanales' target="_blank" rel="noopener noreferrer" >{t('viewFront')}</a>
                    <a href='https://github.com/cristinaglezcoco/Node-Cervezas-Artesanales' target="_blank" rel="noopener noreferrer" >{t('viewBack')}</a>
                </div>
            </section>

        </div>
    </div>

    </>
  )
}

export default Projects