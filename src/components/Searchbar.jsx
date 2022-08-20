import { useState } from 'react'

 //implement the prop info into the function for functionality
//function that will submit and an event will handle the search based on the search term.
//will also have an event change which will take the searched term and make it the target value\
// in order to have user type without pressing submit we need to comment out the onSubmit function.. change our onChange function to accept what the onSubmit function did.


function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            }/>

            <input type="submit" />

        </form>
    )
}

export default SearchBar