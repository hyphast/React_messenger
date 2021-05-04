import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email</label>
            <Field placeholder={'Email'} name={'email'} component={'input'}/>
        </div>
        <div>
            <label>Password</label>
            <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
        </div>
        <div>
            <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember Me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginFormRedux = reduxForm({form: 'loginForm'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

export default Login;