import React from 'react';
import LoginCss from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../Utils/Validators/Validators";
import {Input} from "../Common/FormControls/FormControl";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLength(30);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <Field id={'email'} validate={[required, maxLength30]} placeholder={'Email'} name={'email'} component={Input}/>
        </div>
        <div>
            <label htmlFor="pass">Password</label>
            <Field id={'pass'} validate={[required, maxLength30]} placeholder={'Password'} name={'password'} component={Input} type={'password'}/>
        </div>
        <div>
            <Field id={'rememberMe'} name={'rememberMe'} component={'input'} type={'checkbox'}/>
            <label htmlFor="rememberMe"> Remember Me</label>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginFormRedux = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe);
    }
    if(props.isAuth) return <Redirect to={'/profile'}/>
    return <div className={LoginCss.wrapper}>
        <div className={LoginCss.loginForm}>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)