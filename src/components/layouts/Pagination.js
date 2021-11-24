import React ,{useContext,useEffect,useState} from 'react'
import NetfilixContext from '../../cotext/netfilix/netfilixContext'
import { useHistory } from 'react-router'



const Pagination = () => {

    const netfilixContext =useContext(NetfilixContext)
    const { getMovies,metaData,loading }=netfilixContext;
    const history = useHistory();
    const [page,setPage]=useState(1);
    const handleClick= e =>{
        setPage(e.target.value)
       
      
    }
    useEffect(() => {     
        getMovies(page)  
    },[page]);

    // const loadPagination = (metaData) =>{
    //      const count = metaData.page_count;
    //      let pages = [];
    //      for (let index = 1; index <= count; index++) {
    //         if(Math.abs(index-metaData.current_page)<6)
    //         pages.push(index);
    //     }
    // }
  

    return (
        <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center ">

               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="1" onClick={handleClick} className="page-link  bg-dark text-danger" >1</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="2" onClick={handleClick} className="page-link  bg-dark text-danger" >2</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="3" onClick={handleClick} className="page-link  bg-dark text-danger" >3</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="4" onClick={handleClick} className="page-link  bg-dark text-danger" >4</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="5" onClick={handleClick} className="page-link  bg-dark text-danger" >5</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="6" onClick={handleClick} className="page-link  bg-dark text-danger" >6</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="7" onClick={handleClick} className="page-link  bg-dark text-danger" >7</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="8" onClick={handleClick} className="page-link  bg-dark text-danger" >8</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="9" onClick={handleClick} className="page-link  bg-dark text-danger" >9</button></li></a> 
               <a style={{textDecoration:"none"}}  href="#top"><li className="page-item"><button value="10" onClick={handleClick} className="page-link bg-dark text-danger" >10</button></li></a> 



            </ul>
        </nav>
        )
}

export default Pagination
