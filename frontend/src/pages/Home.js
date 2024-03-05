import React, { Fragment,useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
     const [products,setProduct]=useState([])
     const [searchparams,setsearch]=useSearchParams()
     useEffect(()=>{
          fetch(process.env.REACT_APP_API_URL+'/products?'+searchparams).then(res=>
               res.json()).then(res =>setProduct(res.products))
     },[searchparams])

  return <Fragment>
    
        

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
          {products.map((product)=><ProductCard product={product} />)}
      </div>
    </section>

    
    
    </Fragment>
}

export default Home
