import React from 'react';
import LoginStyles from './Login.module.scss';
import {reduxForm} from "redux-form";
import {maxLength, required} from "../../Utils/Validators/Validators";
import {Input} from "../Common/FormControls/FormControl";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField} from "../Common/FormControls/FormControl";
import FormControlStyles from './../Common/FormControls/FormControls.module.css';
import Button from "../Common/Button/Button";

const maxLength30 = maxLength(30);

const LoginForm = ({
   handleSubmit, error
}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', 'Email', 'Email', [required, maxLength30], Input)}
        {createField('password', 'Password', 'Password', [required, maxLength30], Input, {type: 'password'})}
        {error && <div className={FormControlStyles.formSummaryError}>
            {error}
        </div> }
        <div>
            {createField('rememberMe', '', 'Remember Me', [], 'input', {type: 'checkbox'})}
        </div>
        <div>
            <Button className={LoginStyles.btnLoginForm}>Login</Button>
        </div>
    </form>
}

const LoginFormRedux = reduxForm({form: 'loginForm'})(LoginForm);

const Login = ({
    login, isAuth
}) => {
    const onSubmit = (values) => {
        login(values.email, values.password, values.rememberMe);
    }

    if(isAuth) return <Redirect to={'/profile'}/>

    return <div className={LoginStyles.wrapper}>
        <div className={LoginStyles.loginForm}>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)