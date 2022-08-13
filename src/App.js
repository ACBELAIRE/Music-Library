import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
    }, [search])
    
    //prescribe a function to pass down to the searchbar
    // passing two argumentss one is the default event object and the other the term we will type in the search bar
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }
    
    return (
        <div>
            <SearchBar handleSearch = {handleSearch} />
            {message}
            <Gallery />
        </div>
    )
    
}

export default App

