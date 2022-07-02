import {useEffect, useState} from 'react';
import DB from '../service/DB.json'

import product_img from '../asset/our_best_1.png';

import '../styles/market.scss';

// const randomData=()=>{
//     const countryArr = ['Brazil', 'Columbia', 'Kenya','Bali', 'Jamaica', 'Mexico'];
//     const titleArr = ['Carapichea', 'Ipecacuanha', 'Cinchona','Caturra','Guatemala', 'Blawan', 'Bali Shinzan','Blue Mountain','Lavado'];

   
//     function getRandomArbitrary(min, max) {
//         return Math.random() * (max - min) + min;
//     }


//     const data=[];
//     for (let index = 0; index < 50; index++) {
//         const randCountry =countryArr[Math.floor(Math.random()*countryArr.length)];
//         const randTitle = titleArr[Math.floor(Math.random()*countryArr.length)];
//         const randPrice = getRandomArbitrary(4 , 25).toFixed(2);
        
//         data.push({id:index, country: randCountry, title: randTitle, price: randPrice})
//     };
//     return data;
// }
// const data = randomData();
// console.log(data)
// console.log(JSON.stringify(data));

const Market=()=>{
    const {data}=DB;

    const [productList, setProductList]=useState([]);



    useEffect(()=>{
        setProductList(data)
    },[])

    const itemList=(arr)=>{
        const items =arr.map((item,i)=>{
            return(
                <div key={item.id} className="product">
                    <img src={product_img} alt="product" className="product__img" />
                    <div className="product__product-descr product-descr">
                        <div className="product-descr__title">{item.title} Coffee 1 kg</div>
                        <div className="product-descr__country">{item.country}</div>
                        <div className="product-descr__price">{item.price}$</div>
                    </div>
                </div> 
            )
        });
        return(
            <div className="market__cards products">                    
                {items}                                
            </div>
        )
    }

    
    const items = itemList(productList);

    return(
        <div className="market">
                <div className="market__delimiter"></div>
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
                {items}
            </div>
    )
}

export default Market;