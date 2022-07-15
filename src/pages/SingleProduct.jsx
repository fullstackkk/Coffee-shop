import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useCoffeeService from '../service/service';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import cover from '../asset/product__cover.png';

import '../styles/singleProduct.scss';

const SingleProduct=()=>{
    const { ProductId } = useParams();
    const [product, setProduct] =useState(null);
    const {getProduct}=useCoffeeService();


    return(
        <div className="single-product">
            <PageHeader title={'Our Coffee'}/>
            <div className="single-product__about about">
                <img src={cover} alt="cover" className='about__img' />
                <div className="about__wrapper">
                    <div className="about__wrapper-title title">About it</div>
                    <div className="about__wrapper-separator separator">                 
                        <div className="separator__left-line separator__left-line_black"></div>
                        <div className="separator__icon separator__icon_black "></div> 
                        <div className="separator__right-line separator__right-line_black"></div>
                    </div>
                    <div className="about__wrapper-country"><span>Country:</span> Brasil</div>
                    <div className="about__wrapper-text">
                    <span>Description: </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="about__wrapper-price"><span>Price: </span>  16.99$</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SingleProduct;