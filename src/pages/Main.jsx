import Navbar from '../components/Navbar';

import '../styles/main.scss';

import our_best_1 from '../asset/our_best_1.png';
import our_best_2 from '../asset/our_best_2.png';
import our_best_3 from '../asset/our_best_3.png';
import Footer from '../components/Footer';

const Main=()=>{
    return(
        <div className="main">
            <div className="main__section main-header">
                <Navbar/>
                <div className="main-header__title">Everything You Love About Coffee</div>
                <div className="main-header__separator separator">                  
                    <div className="separator__left-line"></div>
                    <div className="separator__icon "></div> 
                    <div className="separator__right-line"></div>  
                </div>
                <div className="main-header__description">We makes every day full of energy and taste
                <br/>Want to try our beans?</div>
                <div className='main-header__button button button-more'>More</div>
            </div>


            <div className="main__section main-about">                
                <div className="main-about__title title">About Us</div>
                <div className="main-about__separator separator">                 
                    <div className="separator__left-line separator__left-line_black"></div>
                    <div className="separator__icon separator__icon_black "></div> 
                    <div className="separator__right-line separator__right-line_black"></div>
                </div>
                <div className="main-about__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br/>
                    <br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>
            <div className="main__section main-best">
                <div className="main-best__title title">Our best</div>
                <div className="main-best__products">
                    <div className="main-best__products-card card">
                        <img src={our_best_1} alt="img" className="card__img" />
                        <div className="card__descr">
                            <div className="card__descr-title">Solimo Coffee Beans 2 kg</div>
                            <div className="card__descr-price">10.73$</div>
                        </div>
                    </div>
                    <div className="main-best__products-card card">
                        <img src={our_best_2} alt="img" className="card__img" />
                        <div className="card__descr">                            
                            <div className="card__descr-title">Presto Coffee Beans 1 kg</div>
                            <div className="card__descr-price">15.99$</div>
                        </div>
                    </div>
                    <div className="main-best__products-card card">
                        <img src={our_best_3} alt="img" className="card__img" />
                        <div className="card__descr">
                            <div className="card__descr-title">AROMISTICO Coffee 1 kg</div>
                            <div className="card__descr-price">6.99$</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;