import PageHeader from '../components/PageHeader';
import Market from '../components/Market';
import Footer from '../components/Footer';

import '../styles/coffee.scss';

import girl from '../asset/girl__coffee.png';

const Coffee=()=>{
    return(
        <div className="coffee">
            <PageHeader title={'Our Coffee'}/>
            <div className="coffee__section coffee-about">
                <img src={girl} alt="girl and coffee" className='coffee-about__img' />
                <div className="coffee-about__wrapper">
                    <div className="coffee-about__wrapper-title title">About our beans</div>
                    <div className="coffee-about__wrapper-separator separator">                 
                        <div className="separator__left-line separator__left-line_black"></div>
                        <div className="separator__icon separator__icon_black "></div> 
                        <div className="separator__right-line separator__right-line_black"></div>
                    </div>
                    <div className="coffee-about__wrapper-text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </div>
                </div>
            </div>
            <Market/>
            <Footer/>
        </div>
    )
}

export default Coffee;