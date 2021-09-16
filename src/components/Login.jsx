import React from "react";
import { SignInUser } from "../helpers/apiCalls"
import { useForm } from "react-hook-form";

const Login = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        const res = await SignInUser( data );
        if(res.error) console.log(res.error);
        // else redirect the logged in user
    };

    return (
        <section className="page-wrapper">
            <h5>Login</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true})} />
                {errors.email && <span>Email is required</span>}

                
                <input {...register("password", { required: true })} />
                
                {errors.password && <span>Password is required</span>}
                
                <input type="submit" />
            </form>
        </section>
    )
}

export default Login
