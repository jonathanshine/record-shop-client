import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Record = ({data}) => {
    const { user, setUser } = useContext(UserContext);

    const addRecordToCart = (id) => {
        
        let recordExists = user.cart.find(item => item.record === id);

        if(recordExists) {
        const updatedCart = user.cart.map((item) => {
            if(item.record === id) {
                return {...item, quantity: item.quantity + 1 };
            } else {
                return item;
            };    
        });
        setUser({...user, cart: updatedCart});
        }
        else {
            // create temporary cart
            let newCart = [...user.cart, { record: id, quantity: 1 }];
    
            // add the id of the record to the cart inside the user object
            setUser({ ...user, cart: newCart });
        }
    };
    
    console.log(user?.cart);

    return (
        <div className="record">
            <img src={data.cover} alt="" onError={(event)=>{ return event.target.parentNode.style.display = 'none'}}></img>
            <p>{data.title}</p>
            <small>{data.artist}</small>
            <div className="add-button" onClick={() => addRecordToCart(data._id)}> + </div>
        </div>
    )
}

export default Record