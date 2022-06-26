import '../styles/main.scss';

const Main=()=>{
    return(
        <div className="main">
            <div className="main__section main-header">
                <div className="main-header__navbar navbar">
                        <div className="navbar-link">Coffee house</div>
                        <div className="navbar-link">Our coffee</div>
                        <div className="navbar-link">For your pleasure</div>
                </div>
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
                <div className="main-about__separator separator"></div>
                <div className="main-about__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.

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
                    <div className="main-best__products__item"></div>
                    <div className="main-best__products__item"></div>
                    <div className="main-best__products__item"></div>
                </div>
            </div>
            <div className="main__section main-footer">
                <div className="main-footer__navbar">
                    <div className="main-footer__navbar__link">Coffee house</div>
                    <div className="main-footer__navbar__link">Our coffee</div>
                    <div className="main-footer__navbar__link">For your pleasure</div>
                </div>
                <div className="main-footer__separator separator"></div>
            </div>
        </div>
    )
}

export default Main;