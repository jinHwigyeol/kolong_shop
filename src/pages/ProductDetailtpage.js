import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const ProducDetailtpage = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  const params = useParams();

  const getProductDetail = async () =>{
    let url =`https://my-json-server.typicode.com/jinHwigyeol/kolong_shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[])


  return (
    <div>
      <div className='proDetailImg'>
        <img src={id?.img}/>
      </div>
      <div className='proInfo'>
        <h2>제품명</h2>
        <h2>가격</h2>
        <form>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default ProducDetailtpage