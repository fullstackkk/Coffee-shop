import DarkNavbar from './DarkNavbar';

import '../styles/footer.scss';

const Footer=()=>{
    return(
        <div className="footer">
            <DarkNavbar/>
            <div className="main-footer__separator separator">
                <div className="separator__left-line separator__left-line_black"></div>
                <div className="separator__icon separator__icon_black "></div> 
                <div className="separator__right-line separator__right-line_black"></div>
            </div>
        </div>
    )
}

export default Footer;