import React, { useContext } from "react";
import { SignInUser, googleSignUp } from "../helpers/apiCalls"
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import GoogleLogin from 'react-google-login';

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
    
    const responseGoogle = async (response) => {
        console.log("I AM THE GOOGLE RES OBJECT", response);
        const { email, familyName, givenName, googleId } = response.profileObj;
        const data = {
            firstName: givenName,
            lastName: familyName,
            googleId,
            email
        };

        const res = await googleSignUp(data);
        if (!res.error) {
            setUser(res);
            history.push("/shop");
        } else {
            toast( `${res.error.message}`)
        }
    };

    return (
        <section className="page-wrapper">
            <h5>Login</h5>

            <GoogleLogin
                clientId="398674317688-kkv811k3v7plm5ehkdk5rq6ipk5l1mqt.apps.googleusercontent.com"
                buttonText="Connect with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

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
