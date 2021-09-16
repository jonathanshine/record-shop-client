import React, { useContext } from "react";
import { SignInUser } from "../helpers/apiCalls"
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
    const { setUser } = useContext( UserContext );
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    
    const onSubmit = async (data) => {
        const res = await SignInUser( data );
        if(!res.error) {
            setUser( res );
            history.push("/shop");
        } else {
            // this toast will pop up with whatever error arises from an invalid login inputs 
            toast(`Unicorn! --> ${res.error.message}`)
        }
    };

    return (
        <section className="page-wrapper">
            <h5>Login</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loginEmail">Email: </label>
                <input id="loginEmail" name="loginEmail" {...register("email", { required: true})} />
                {errors.email && <span>Email is required</span>}
                
                <label htmlFor="loginPassword">Password: </label>
                <input id="loginPassword" name="loginPassword" {...register("password", { required: true })} />
                {errors.password && <span>Password is required</span>}
                
                <input type="submit" />
            </form>
        </section>
    )
}

export default Login
