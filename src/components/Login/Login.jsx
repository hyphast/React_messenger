import React from 'react';
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
            <label><Field validate={[required, maxLength30]} placeholder={'Email'} name={'email'} component={Input}/>Email</label>
        </div>
        <div>
            <label><Field validate={[required, maxLength30]} placeholder={'Password'} name={'password'} component={Input} type={'password'}/>Password</label>
        </div>
        <div>
            <label><Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember Me</label>
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
    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)