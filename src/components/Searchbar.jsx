import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'


 //implement the prop info into the function for functionality
//function that will submit and an event will handle the search based on the search term.
//will also have an event change which will take the searched term and make it the target value\
// in order to have user type without pressing submit we need to comment out the onSubmit function.. change our onChange function to accept what the onSubmit function did.
        
        function SearchBar() {
            const {term, handleSearch} = useContext(SearchContext)
        
            return (
                <form>
                    <input ref={term} type="text" placeholder="Search Here" />
                    <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
                </form>
            )
        }
        export default SearchBar     