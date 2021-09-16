import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../context/UserContext';
import { SignUpUser } from '../helpers/apiCalls';
import { toast } from 'react-toastify';

const SignUp = () => {
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        const res = await SignUpUser( data );
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
           <h5>Sign Up</h5>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name: </label>
                <input id="firstName" name="firstName" type="text" placeholder="firstName" {...register("firstName", {required: true})} />
                {errors.firstName && <span>First Name is required</span>}

                <label htmlFor="lastName">Last Name: </label>
                <input id="lastName" name="lastName" type="text" placeholder="lastName" {...register("lastName", {required: true})} />
                {errors.lastName && <span>Last Name is required</span>}

                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" placeholder="username" {...register("username", {required: true})} />
                {errors.username && <span>Username is required</span>}

                <label htmlFor="signUpEmail">Email: </label>
                <input id="signUpEmail" name="signUpEmail" type="email" placeholder="email" {...register("email", {required: true})} />
                {errors.email && <span>Email is required</span>}

                <label htmlFor="signUpPassword">Password: </label>
                <input id="signUpPassword" name="signUpPassword" type="password" placeholder="password" {...register("password", {required: true})} />
                {errors.password && <span>Password is required</span>}

                <input type="submit" />
            </form>
        </section>
    )
}

export default SignUp
