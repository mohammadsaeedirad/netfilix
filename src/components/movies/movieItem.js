import React  from 'react'
import { HashLink as Link } from 'react-router-hash-link';
 const MovieItem = ({movie:{id,title,poster,genres}}) => {

  

    return (
            <div className="card " style={{ border:"0px",borderRadius:"5px",backgroundImage: "linear-gradient(to top left,#1A1A1D,#dc3545)", opacity:"0.95",width: "18rem",margin:"1.5% 0 1.5% 2.5%"}}>
                <img style={{marginTop:"5%",borderRadius:"5px"}} className="card-img-top" src={poster} alt="Card image cap" />
                <span className="img-span badge bg-warning" >{id}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Genres: { genres[0]} and { genres[1]} </p>
                    <Link to={`/movie/${id}`} className="btn btn-dark">more</Link>
                </div>
            </div>

    )
}
export default MovieItem;