import React ,{useContext,useEffect,useState} from 'react'
import NetfilixContext from '../../cotext/netfilix/netfilixContext'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'



const Pagination = () => {

    const netfilixContext =useContext(NetfilixContext)
    const { getMovies,metaData,loading }=netfilixContext;

    const handleClick= e =>{
        getMovies(e.target.value)
      
    }
    useEffect(() => {     
        getMovies(metaData.current_page)  
    },[]);


    const loadPagination = (MD) =>{
         const count = MD.page_count;
         let pages = [];
         for (let index = 1; index <= count; index++) {
            if(Math.abs(index-MD.current_page)<6)
            pages.push(index);
        }

         const pagination = pages.map(item=> <a href="#top"> <li onClick={handleClick} value={item} className={item==MD.current_page ? "btn btn-warning m-1 ": "btn btn-danger m-1 "} >{item}</li> </a>)
         return pagination

    }
          

    return (
            <div className="pagination">
                {loadPagination(metaData)}
            </div>
        )
}

export default Pagination
