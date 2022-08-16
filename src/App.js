import { useEffect, useState, useRef } from 'react'
import { DataContext } from './context/DataContext.js'
import { SearchContext } from './context/SearchContext.js'
import Gallery from './components/Gallery.jsx'
import SearchBar from './components/Searchbar.jsx'

const App = () => {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

//define a variable for the url it will need to fetch and then pass that variable within the function
//add a conditional to prevent the function from running continuously if there is no search term
    const API_URL = 'https://itunes.apple.com/search?term='


     //prescribe a function to pass down to the searchbar
    // passing two argumentss one is the default event object and the other the term we will type in the search bar
    const handleSearch = (e, term) => {
        e.preventDefault()
        const fetchData = async () => {
            document.title = `${term} music`
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                return setData(resData.results)
            } else {
                return setMessage('Not Found.')
            }
        }
        fetchData()
        setSearch(term)
    }
 //ship the data down the the Gallery Component so that it will be able to render in future steps
    return (
        <div className="App">
            <SearchContext.Provider value={{
                    term: searchInput,
                    handleSearch: handleSearch
            }}>
                    <SearchBar/>
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
                <Gallery />
            </DataContext.Provider>
        </div>
    )
}

export default App

    
