
import  React ,{ Suspense, lazy } from 'react';
import Pagination from '../layouts/Pagination'
import Movies from '../movies/movies';

 const Home = () => {


        return (
            <div>

             <Movies />
             <Pagination />

        </div>
        )
 
}

export default Home;