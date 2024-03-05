import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Search = () => {
     const [keyword,setKeyword]=useState("")
     const navigate=useNavigate()
     const searchHandler=()=>{
          navigate('/search?keyword='+keyword) 
          // <Link to={'/search?keyword='+keyword}></Link>    
     }
  return (
     <div class="input-group">
     <input
       type="text"
       id="search_field"
       class="form-control"
       placeholder="Enter Product Name ..."
       onChange={(e)=>setKeyword(e.target.value)}
       onBlur={searchHandler}
     />
     <div class="input-group-append">
       <button id="search_btn" class="btn" onClick={searchHandler} >
         <i class="fa fa-search" aria-hidden="true"></i>
       </button>
     </div>
   </div>
  )
}

export default Search
