import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext'
import { createOrder, updateUser } from '../helpers/apiCalls';

const Cart = () => {
    const { user, setUser } = useContext( UserContext );

    const prepareOrder = async () => {
        const order = {
            userId: user._id,
            records: user.cart.map(item => {
                return {quantity: item.quantity, record: item.record._id}
            })
        }
        console.log("I AM THE ORDER PAYLOAD --> ", order);

        const res = await createOrder( order );

        if(!res.error) {
            toast("Your order has been placed!");

            let updatedUserCart = await updateUser({ ...user, cart: [] });
            if(!updatedUserCart.error) setUser({ ...user, cart: [] });
            else {
                toast(`${updatedUserCart.error.message}`)
            }
        } else {
            // this toast will pop up with whatever error arises from an invalid login inputs 
            toast(`Unicorn! --> ${res.error.message}`);
        }
    };

    const cartItems = user?.cart.map(item => {
        return <div className="item">
                    <div className="cover">
                    <img src={item.record.cover}/>
                </div>
                <div className="info">
                    <p>{item.record.artist}</p>
                    <p>{item.record.title}</p>
                    <p>{item.record.price}</p>
                    <p>{item.quantity}</p>
                </div>
            </div>
    })

    return (
        <section className="page-wrapper" id="cart">
            <h5>CART</h5>
            {user?.cart.length > 0 ? (<>
                <div className="cart-container">{ cartItems }</div>
                <div className="cart-button" onClick={prepareOrder}>PLACE ORDER</div>
            </>) : (
                <small>Cart is empty</small>
            ) }
            
        </section>
    )
}

export default Cart
