import GalleryItem from './GalleryItems.jsx'

function Gallery(props){
    //create a variable that will iterate over an array.
        const display = props.data.map((item, i) => {
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
