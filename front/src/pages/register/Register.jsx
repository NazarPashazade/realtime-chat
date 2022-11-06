import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const registerUser = (data) => {
        console.log({ data });
    }

    return (

        <>

            <form action="" onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder='Username' {...register("username")} />
                <input type="email" placeholder='Email' {...register("email")} />
                <select name="Gender" >
                    <option value={'SINGLE'}>{'SINGLE'}</option>
                    <option value={'MARRIED'}>{'MARRIED'}</option>
                </select>
                <input type="password" placeholder='Password' {...register("password")} />
                <input type="submit" value="Register" />
            </form>

        </>
    )
}

export default Register;
