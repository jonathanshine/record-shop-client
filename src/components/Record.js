import React from 'react'

const Record = ({data}) => {
    return (
        <div className="record">
            <img src={data.image[3]['#text']} alt="" onError={(event)=>{ return event.target.parentNode.style.display = 'none'}}></img>
            <p>{data.name}</p>
            <small>{data.artist}</small>
        </div>
    )
}

export default Record