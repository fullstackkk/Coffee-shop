import PageHeader from '../components/PageHeader';
import Market from '../components/Market';
import Footer from '../components/Footer';

import cup from '../asset/Cup_of_coffee.png';

import '../styles/beans.scss';

const Beans=()=>{
    return(
        <div className="beans">
            <PageHeader title={'For your pleasure'}/>
            <div className="beans__section beans-about">
                <img src={cup} alt="girl and coffee" className='beans-about__img' />
                <div className="beans-about__wrapper">
                    <div className="beans-about__wrapper-title title">About our beans</div>
                    <div className="beans-about__wrapper-separator separator">                 
                        <div className="separator__left-line separator__left-line_black"></div>
                        <div className="separator__icon separator__icon_black "></div> 
                        <div className="separator__right-line separator__right-line_black"></div>
                    </div>
                    <div className="beans-about__wrapper-text">
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

export default Beans;