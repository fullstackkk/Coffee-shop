
import product_img from '../asset/our_best_1.png';

import '../styles/market.scss';


// TODO  добавить ветикальную полоску
const Market=()=>{
    return(
        <div className="market">
                <div className="market__navigation">
                    <div className="search">
                        <div className="search__text">Looking for</div>
                        <input className="search__input" placeholder='start typing here...' type="text"  />
                    </div>
                    <div className="filter">
                        <div className="filter__text">Or filter</div>
                        <div className="filter__navbar navbar">
                            <div className="navbar__link">Brazil</div>
                            <div className="navbar__link">Columbia</div>
                            <div className="navbar__link">Kenya</div>
                        </div>
                    </div>
                </div>
                <div className="market__cards products">
                    <div className="product">
                        <img src={product_img} alt="product" className="product__img" />
                        <div className="product__product-descr product-descr">
                            <div className="product-descr__title">AROMISTICO Coffee 1 kg</div>
                            <div className="product-descr__country">Brazil</div>
                            <div className="product-descr__price">6.99$</div>
                        </div>
                    </div>
                    <div className="product">
                        <img src={product_img} alt="product" className="product__img" />
                        <div className="product__product-descr product-descr">
                            <div className="product-descr__title">AROMISTICO Coffee 1 kg</div>
                            <div className="product-descr__country">Brazil</div>
                            <div className="product-descr__price">6.99$</div>
                        </div>
                    </div> 
                    <div className="product">
                        <img src={product_img} alt="product" className="product__img" />
                        <div className="product__product-descr product-descr">
                            <div className="product-descr__title">AROMISTICO Coffee 1 kg</div>
                            <div className="product-descr__country">Brazil</div>
                            <div className="product-descr__price">6.99$</div>
                        </div>
                    </div> 
                    <div className="product">
                        <img src={product_img} alt="product" className="product__img" />
                        <div className="product__product-descr product-descr">
                            <div className="product-descr__title">AROMISTICO Coffee 1 kg</div>
                            <div className="product-descr__country">Brazil</div>
                            <div className="product-descr__price">6.99$</div>
                        </div>
                    </div>                    
                </div>
            </div>
    )
}

export default Market;