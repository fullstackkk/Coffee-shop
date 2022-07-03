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
    const [offset, setOffset] = useState(0)
    const [newProductLoading, setNewProductLoading ] = useState(false)

    // side Effect
    useEffect(()=>{
        // console.log('----- Запуск useEffect-----')
        getMoreProducts(offset,true)    
    },[])

    // helper functions
    const getNewProducts=(newProductList)=>{
        // console.log('----- Запуск getNewProducts-----')
        // console.log(`устанаавливаем офсет в getNewProducts, offset: ${offset}`)
        setProductList(productList=>[...productList,...newProductList]);          
        // console.log('----- productList в данный момент -----');         
        // console.log(productList);        
        setOffset(offset => offset + 9); 
        if(data.length < offset+9){                
            setNewProductLoading(true)
        }    
    }

    const getMoreProducts=(offset,initial)=>{
        
        initial ? setNewProductLoading(false) : setNewProductLoading(true);
        // console.log('----- Запуск getMoreProducts-----')
        const newProductList= [];
        for (let index = offset; index < offset+9; index++) {            
            // console.log('----- Запуск For -----')            
            // console.log(`index: ${index}, offset: ${offset}`)
            // console.log(`добавляем в стейт obj с id: ${data[index].id}`)
            newProductList.push(data[index]);                 
        }               
        getNewProducts(newProductList)
    }

    

    // View
    const ItemList=(arr)=>{
        const items =arr.map((item)=>{
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
    const Filter=()=>{
        const onFilter=()=>{
            
        }

        return(
            <div className="filter">
                <div className="filter__text">Or filter</div>
                <div className="filter__navbar navbar">
                    <div onClick={onFilter} className="navbar__link">Brazil</div>
                    <div onClick={onFilter} className="navbar__link">Columbia</div>
                    <div onClick={onFilter} className="navbar__link">Kenya</div>
                </div>
            </div>
        )
    }

    
    const items = ItemList(productList);
    const filter = Filter();

    return(
        <div className="market">
                <div className="market__delimiter"></div>
                <div className="market__navigation">
                    <div className="search">
                        <div className="search__text">Looking for</div>
                        <input className="search__input" placeholder='start typing here...' type="text"  />
                    </div>
                    {filter}
                </div>
                {items}
                <div onClick={()=> getMoreProducts(offset)} 
                    className='market__button button button-dark'
                    disabled={newProductLoading} >More</div>
            </div>
    )
}
export default Market;