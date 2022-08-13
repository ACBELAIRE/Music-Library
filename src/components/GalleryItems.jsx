import { useState } from 'react'

function GalleryItem(props) {
    //define two view states one for at a glance and one for more detailed once clicked
    //in return statement have a ternary operator when true show detailed and when false show simple view
    let [view, setView] = useState(false)

const simpleStyle = {
    'width': '25vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px'
}

const detailStyle = {
    'width': '80vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px',
    'backgroundImage': `url(${props.item.artworkUrl100})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'yellow'
}
    const simpleView = () => {
        <div style ={simpleStyle} />
        return (
            <div style ={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style ={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem
