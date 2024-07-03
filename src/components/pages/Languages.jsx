import { useTranslation } from "react-i18next";
import i18n from '../../i18n/i18n'; 
import Spanish from '../../images/spanish.webp';
import German from '../../images/german.webp';
import English from '../../images/english.webp';


function Languages() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

  return (

    <div className="home-languages">
        <img src={Spanish} alt="Spanish" onClick={() => changeLanguage('es')}  width='1.8em'/>
        <img src={German} alt="German" onClick={() => changeLanguage('de')} />
        <img src={English} alt="English" onClick={() => changeLanguage('en')} />
    </div>
  )
}

export default Languages