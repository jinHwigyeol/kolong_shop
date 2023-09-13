import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
  
  const navigate = useNavigate();
  const goProductDetail = () =>{navigate('/pages/Homepage')}

  const goProduct=()=>{
    navigate('product?=detail')
  }
  return (
    <div>
      <div className='inner'>
        <Link to='/pages/ProductAllpage'>Hi</Link>
        <br/><br/>
        <button onClick={goProductDetail}>신봉자</button>
        <button onClick={goProduct}>목격자</button>
      </div>
    </div>
  )
}

export default Homepage