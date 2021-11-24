import React from 'react'
import ReactDOM from 'react-dom'
import MovieItem from '../movies/movieItem'
import Loading from '../layouts/Loading'
it('renders without crashing MovieItem', () =>{
   expect(<MovieItem />).toBeTruthy()
   
})
it('renders without crashing Loading', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Loading />,div)
})