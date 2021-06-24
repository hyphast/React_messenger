import React from 'react';
import LoginStyles from './Login.module.css';
import {reduxForm} from "redux-form";
import {maxLength, required} from "../../Utils/Validators/Validators";
import {Input} from "../Common/FormControls/FormControl";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField} from "../Common/FormControls/FormControl";
import FormControlCss from './../Common/FormControls/FormControls.module.css';

const maxLength30 = maxLength(30);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField('email', 'Email', 'Email', [required, maxLength30], Input)}
        {createField('password', 'Password', 'Password', [required, maxLength30], Input, {type: 'password'})}
        {props.error && <div className={FormControlCss.formSummaryError}>
            {props.error}
        </div> }
        <div>
            {createField('rememberMe', '', 'Remember Me', [], 'input', {type: 'checkbox'})}
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