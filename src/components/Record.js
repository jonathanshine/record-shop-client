import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { updateUser } from '../helpers/apiCalls';
import { toast } from 'react-toastify';

const Record = ({data}) => {
    const { user, setUser } = useContext(UserContext);

    const addRecordToCart = async (id) => {
        // use find to check if the record with the given id being passed onCLick is already in the user's cart array
        let recordExists = user.cart.find(item => item.record === id);

        // declare empty array for cart to be updated
        let updatedCart = [];
        if(recordExists) {
            // if record is found, map over user cart
            updatedCart = user.cart.map((item) => {
                // if map finds a record with the given id, then it adds 1 to the quantity field, else it returns the complete record info
                if(item.record === id) {
                    return {...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                };    
            });
            // setUser with the updatedCart variable
            setUser({...user, cart: updatedCart});
        }
        else {
            // if record is NOT found update the user's cart setting the record with the id passed in to the function and setting the quantity to 1
            updatedCart = [...user.cart, { record: id, quantity: 1 }];
        };
        
        // assign the updatedCart to the user's cart in the backend database
        let res = await updateUser({ ...user, cart: updatedCart});
        if(!res.error) setUser({ ...user, cart: res.cart });
        else {
            toast(`${res.error.message}`)
        }
    };

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