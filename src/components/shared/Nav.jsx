import { Link, useLocation, useNavigate } from 'react-router-dom';
import Profile from '../../images/profile.jpg';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';
import '../../styles/_nav.scss';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


function NavComponent() {

    const { t } = useTranslation();
    const [isProjects, setIsProjects] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        // Actualizar isProjects basado en la ubicación actual
        if (location.pathname === '/projects') {
            setIsProjects(false);
        } else {
            setIsProjects(true);
        }
    }, [location]);

    const handleButton = () => {
        if (isProjects) {
            setIsProjects(false)
            navigate('/projects');
        } else {
            setIsProjects(true)
            navigate('/');
        }
    };


    return (
        <nav className="container-navbar">
           
            <div className="navbar__picture">
                <img src={Profile} alt="Profile" width="130" height="170" />
            </div>

            <div className="navbar__btt">
                <div className="btt__item">
                    <a href={`/cv/${i18n.language}/CristinaGonzalez_${i18n.language}.pdf`} target="_blank" rel="noopener noreferrer">CV</a>
                </div>
                <div className="btt__item" onClick={handleButton}>
                    <Link to='/projects'>{isProjects ? t('projects') : t('aboutMe') }</Link>
                </div>
            </div>

            <div className="navbar__social">
                <a href="https://www.linkedin.com/in/cristina-gonz%C3%A1lez-coco-532ba2197/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" width="30" height="30" />
                </a>
                <a href="https://github.com/cristinaglezcoco?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub}alt='GitHub' width='30' height="30" />
                </a>
            </div>

        </nav>
    );
}

export default NavComponent;
