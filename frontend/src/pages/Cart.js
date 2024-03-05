import React, { Fragment, useState } from 'react'
import { Link} from 'react-router-dom'
import {toast} from 'react-toastify'
const Cart = ({cart_in,setCartIn}) => {
    const [complete,SetComplete]=useState(false)
    const increaseqty=(item)=>{
        if(item.product1.stock == item.qty){
            return 
        }
        const updatecart=cart_in.map((i)=>{
            if (i.product1._id == item.product1._id) {
                i.qty++
            }
            return i

        })
        setCartIn(updatecart) 
    }
    const decreaseqty=(item)=>{
         if (item.qty >1) {
            const updatecart=cart_in.map((i)=>{
                if(i.product1._id == item.product1._id)
                i.qty--
            return i
            })
            setCartIn(updatecart)
         }

    }
    const removeitem=(item)=>{
        const updatecart=cart_in.filter((i)=>{
            if(i.product1._id != item.product1._id){
                return true
            }
        })
        setCartIn(updatecart)
    }

    const placeorderhandler=()=>{
        fetch(process.env.REACT_APP_API_URL+'/createorder',{
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(cart_in)

        })
        .then(() => { 
            setCartIn([]); 
            SetComplete(true);
            toast.success("Order Success!")
        })
        
    }

  return (
    cart_in.length > 0 ?
    <Fragment>   
    <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cart_in.length}</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                {cart_in.map((item)=>
               (<>
                <hr />  
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product1.images[0].image} alt="Laptop" height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={'/singleproduct/'+item.product1._id}>{item.product1.name}</Link>
                            {/* <a href="#">{item.product1.name}</a> */}
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.product1.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={()=>decreaseqty(item)}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

								<span className="btn btn-primary plus" onClick={()=>increaseqty(item)}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={()=>removeitem(item)}></i>
                        </div>

                    </div>
                </div>
                </>)
                )}
               
                
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cart_in.reduce((acc,item)=>(acc + item.qty),0)} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">${Number(cart_in.reduce((acc,item)=>(acc + item.product1.price * item.qty),0)).toFixed(2)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeorderhandler}>Place Order</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment> : (!complete ? <h1>Your Cart is Empty</h1> :
    <Fragment>
        <h1>Order Complete</h1>
        <p>Cart Item Successfully Ordered....!</p>
    </Fragment>
    )
    
  )
}

export default Cart
