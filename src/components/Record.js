import React from 'react'

const Record = ({data}) => {
    return (
        <div className="record">
            <img src={data.cover} alt="" onError={(event)=>{ return event.target.parentNode.style.display = 'none'}}></img>
            <p>{data.title}</p>
            <small>{data.artist}</small>
        </div>
    )
}

export default Record