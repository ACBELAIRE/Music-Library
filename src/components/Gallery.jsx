import { useContext } from 'react'
import { DataContext } from '../context/DataContext.js'
import GalleryItem from './GalleryItems.jsx'

const Gallery = () => {
    const data = useContext(DataContext)

    //create a variable that will iterate over an array.
        const display = data.map((item, i) => {
            return (
                <GalleryItem item={item} key={i} />
            )
        })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
