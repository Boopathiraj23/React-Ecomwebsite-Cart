import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = ({cart_in,setCartIn}) => {
     const [product1,setProduct1]=useState(null)
     const [qty,setqty]=useState(1)
     const {id}=useParams()
     useEffect(()=>{
          fetch(process.env.REACT_APP_API_URL+'/singleproduct/'+ id).then(res=>
               res.json()).then(res =>setProduct1(res.singleproduct))
     },[])
     const addcart=()=>{
        const itemExist=cart_in.find((item)=>item.product1._id == product1._id)
        if(!itemExist){
            const cart_items={product1,qty}
            setCartIn((state1)=>[...state1,cart_items])
            toast.success('Successfully Carted...!')
        }
        }
        const increaseqty=()=>{

            if(product1.stock == qty){
                return
            }
            setqty((state)=>state + 1)


        }
        const decreaseqty=()=>{
            if(qty>1){
                 setqty((state)=>state - 1)     
            }
        }
     
  return (
    product1 && <div classNameName="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src={product1.images[0].image} alt="sdf" height="500" width="500"/>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product1.name}</h3>
                <p id="product_id">{product1._id}</p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${product1.ratings/5 * 100}%`}}></div>
                </div>
           

                <hr/>

                <p id="product_price">${product1.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decreaseqty} >-</span>

                    <input type="number" className="form-control count d-inline" value={qty} readOnly />

                    <span className="btn btn-primary plus" onClick={increaseqty} >+</span>
                </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addcart} disabled={product1.stock==0} > Add to Cart</button>

                <hr/>

                <p>Status: <span id="stock_status" className={product1.stock>0 ? 'text-success':'text-danger'} >{product1.stock >0 ? 'In Stock' : 'Out of Stock'}</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product1.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>{product1.seller}</strong></p>
				
                <div className="rating w-50"></div>
						
            </div>

        </div>

    </div>
  )
  
}

export default ProductDetails
