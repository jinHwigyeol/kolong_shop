import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
export const ProductDetailpage = () => {
  const {id} = useParams();
  const [product, setProduct ] = useState(null);
  const getProductDetail = async () =>{
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{getProductDetail();}, []);
  return (
    <div>
    <div className='product_detail_img'>
      <img src={product?.img}></img>
    </div> 
    <div className='product_info'>
      <h2>{product?.title}</h2>
      <h3>{product?.price}</h3>
      <form>
        <select>
          {/* && 좌항 우항 같으면 pap실행 */}
          {product?.size.length > 0 && product.size.map    ((item) => ( <option>{item}</option> ))}
        </select>
      </form>
    </div> 
    </div>
  )
}

export default ProductDetailpage