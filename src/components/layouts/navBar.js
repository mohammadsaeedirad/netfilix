import React,{useState,useContext} from 'react'
import  {useAuth}  from '../../cotext/AuthContext';
import logo from "../../img/netfilix.png";
import {  Link ,useHistory } from 'react-router-dom';
import NetfilixContext from '../../cotext/netfilix/netfilixContext';


 const NavBar = () => {
     const {currentUser,logout} = useAuth()
     const [error, setError] = useState("")
     const history = useHistory();
     const li_item_class="nav-link nav-danger "

     const netfilixContext=useContext(NetfilixContext);
     const [text,setText]= useState('');
    
    const onSubmit =  e => {
         e.preventDefault();
       
         if(text === ''){
           alert('please enter something');
         }
         else 
        {
          netfilixContext.searchMovies(text);
            setText('');
            history.push("/")
        }
     };
    const onChange = e =>{
         setText(e.target.value);
     };
     async function handleLogout() {
      setError("")
      try {
        await logout()
      } 
      catch {
        setError("Failed to log out")
      }
    }

    return (
      <div>
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img style={{width:"60%"}} src={logo} alt="Logo" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">

                <ul className="navbar-nav me-auto mb-2 mb-md-0">



                    <li className="nav-item" >               
                      <Link className={li_item_class } id="2" to="/">Home</Link>
                    </li>


                    <li className="nav-item">
                      <a className={li_item_class }  id="3" href="#">Gendres</a>
                    </li>

                    <li className="nav-item" >
                      <Link  className={li_item_class } id="4" to="/about">About us</Link>
                    </li>      

                    {currentUser ? 
                            <li  class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-success"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              {currentUser.displayName}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                              <li><Link class="dropdown-item" to="/profile">{currentUser.photoURL && <img src={currentUser.photoURL}  style={{width: '50px', height: '50px',borderRadius:"50%"}} alt="" /> }  profile </Link></li>
                              <li><Link  to="/" class="dropdown-item text-danger" onClick={handleLogout} >logout</Link></li>

                            </ul>
                          </li>   
                               
                    :
                    <li className="nav-item" >               
                      <Link style={{color:"#dc3545"}}  className={li_item_class } id="1" to="/login">Login</Link>
                    </li>
                    }  
                    
                   

                </ul>
                
                <form onSubmit={onSubmit} className="d-flex">                
                    <input className="form-control me-2" style={{ backgroundColor: "rgba(245, 245, 245, 0.89)" }} value={text} onChange={onChange} type="search" placeholder="Search" aria-label="Search"/ >
                    <button className="btn btn-outline-danger" value="search" type="submit">Search</button> 
                </form>
              
            </div>
          </div>
        </nav>
      </header>
     </div>
    )
}

export default NavBar;