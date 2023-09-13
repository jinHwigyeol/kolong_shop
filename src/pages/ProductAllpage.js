import React, {useEffect, useState} from 'react';
import ProductBox from '../components/ProductBox';
import { useSearchParams } from 'react-router-dom';

const ProductAllpage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () =>{
    let keyword = query.get('q') || '';
    console.log('쿼리값', keyword);
    let url = `https://my-json-server.typicode.com/jinHwigyeol/kolong_shop/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{getProduct()},[query]);
  return (
    <div className='inner'>
      <div className='productWarp'>
        <ul className='productList'>
          {productList.map((menu)=>(
          <li>
            <ProductBox item={menu}/>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ProductAllpage